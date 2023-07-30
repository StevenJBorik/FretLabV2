import { h, Component, createRef } from 'preact';
import { keyFinderUtils, audioUtils } from '../Utils';
import * as fretboards from 'fretboards';

import './AudioFileItem.css';

export interface FileItem {
  id: string;
  canProcess: boolean;
  file: File;
  result: string | null;
  digest: string | null;
  keySignatureNumericValue: number | null;
  scale: { [key: string]: number[] } | null;
  frets: number; // Add frets property to store user-defined frets value
  startFret: number; // Add startFret property to store user-defined startFret value
  order: 'ascending' | 'descending' | 'random'; // Add order property to store user-defined order value
  normalizedResult: string;
}

interface Props {
  fileItem: FileItem;
  updateDigest: (uuid: string, digest: string) => void;
  updateResult: (uuid: string, result: string) => void;
  audioElement: HTMLAudioElement | null; // Pass the audio element from the parent component
  frets: number; // Add frets property to store user-defined frets value
  startFret: number; // Add startFret property to store user-defined startFret value
  order: 'ascending' | 'descending' | 'random'; // Update the type to match the FileItem interface
  sectionBoundaries: number[] | null;
  normalizedResult: string;
  getCurrentTimestamp: () => number; // Include the getCurrentTimestamp function in Props
  updateStartFret: (startFret: number) => void; // Add updateStartFret function to Props
  isReadyToPlay: boolean; // Include the 'isReadyToPlay' prop
}

interface State {
  analysisStart: number;
  analysisDuration: number;
  currentSegment: number;
  maxSegments: number;
  analyzing: boolean;
  result: string;
  keySignatureNumericValue: number | null;
  fileItem: FileItem;
  scale: { [key: string]: number[] } | null;
  isPlaying: boolean;
  currentTime: number;
  lastPlayedPosition: number | null;
  isReadyToPlay: boolean;
  frets: number | null;
  startFret: number | null;
  order: 'ascending' | 'descending' | 'random'; // Update the type to match the FileItem interface
  files: Array<FileItem>;
  normalizedResult: string | null;
}

class AudioFileItem extends Component<Props, State> {
  worker: Worker | null = null;
  terminated: boolean = false;

  state: State = {
    analysisStart: null,
    analysisDuration: null,
    currentSegment: null,
    maxSegments: null,
    analyzing: false,
    result: null,
    keySignatureNumericValue: null,
    fileItem: this.props.fileItem,
    scale: null,
    isPlaying: false,
    currentTime: 0,
    isReadyToPlay: false,
    lastPlayedPosition: null,
    frets: this.props.frets,
    startFret: this.props.startFret,
    order: this.props.order, // Add order property to store user-defined order value
    files: [],
    normalizedResult: this.props.normalizedResult || '', // Initialize with an empty string if not provided
  };

  audioContext: AudioContext | null = null;
  audioSource: AudioBufferSourceNode | null = null;
  originalSource: AudioBufferSourceNode | null = null;
  audioInterval: number | null;
  lastPlayedPosition: number | null;
  isReadyToPlay: boolean = false;
  mounted = false;
  fretboardContainerRef = createRef<HTMLDivElement>();
  audioElement: HTMLAudioElement | null; // New property to store the audio element

  componentDidMount() {
    console.log('in componentDidMount method');
    this.mounted = true;
    this.audioElement = this.props.audioElement; // Assign the prop value to the class property
    this.initAudio(this.props.fileItem);
    this.props.audioElement?.addEventListener(
      'timeupdate',
      this.handleAudioTimeUpdate
    );
  }

  componentDidUpdate(prevProps: Props) {
    // Check if the fileItem.id has changed before initializing audio
    if (prevProps.fileItem.id !== this.props.fileItem.id) {
      console.log('AudioFileItem - componentDidUpdate');
      this.initAudio(this.props.fileItem);
    }

    // Check if frets, startFret, or order have changed to update the state and re-render the fretboard scale
    if (
      prevProps.frets !== this.props.frets ||
      prevProps.startFret !== this.props.startFret ||
      prevProps.order !== this.props.order ||
      prevProps.normalizedResult !== this.props.normalizedResult
    ) {
      this.setState(
        {
          frets: this.props.frets,
          startFret: this.props.startFret,
          order: this.props.order,
          normalizedResult: this.props.normalizedResult, // Add normalizedResult to the state
        },
        () => {
          this.renderFretboardScale();
        }
      );
    }
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // Check if any changes in state or props that would trigger a re-render
    if (
      this.state.files !== nextState.files ||
      this.state.currentTime !== nextState.currentTime ||
      this.props.isReadyToPlay !== nextProps.isReadyToPlay // Include isReadyToPlay prop
      // Add more checks here if needed for other props or state properties
    ) {
      return true; // Allow re-render
    }
    return false;
  }

  componentWillUnmount() {
    this.mounted = false; // Set to false when the component is unmounted
    this.worker?.terminate();
    this.props.audioElement?.removeEventListener(
      'canplaythrough',
      this.handleAudioCanPlay
    );
    this.props.audioElement?.removeEventListener(
      'timeupdate',
      this.handleAudioTimeUpdate
    );
  }

  initAudio = (fileItem) => {
    const audioElement = this.props.audioElement; // Use the audioElement from props
    audioElement.src = URL.createObjectURL(fileItem.file);
    audioElement.addEventListener('timeupdate', this.handleAudioTimeUpdate);
    audioElement.addEventListener('canplaythrough', this.handleAudioCanPlay);

    const reader = new FileReader();
    reader.onload = this.handleFileLoad;
    reader.readAsArrayBuffer(fileItem.file);
  };

  handleFileLoad = async (event: ProgressEvent<FileReader>): Promise<void> => {
    const context = audioUtils.createAudioContext();
    const digest = await crypto.subtle.digest(
      'SHA-256',
      event.target.result as ArrayBuffer
    );
    const hashArray = Array.from(new Uint8Array(digest));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');

    // Set getCurrentTimestamp method in fileItem
    const updatedFileItem = {
      ...this.props.fileItem,
      getCurrentTimestamp: this.props.getCurrentTimestamp,
    };

    this.props.updateDigest(updatedFileItem.id, hashHex);
    context.decodeAudioData(
      event.target.result as ArrayBuffer,
      this.handleAudioFile
    );
  };

  handleAudioFile = async (buffer: AudioBuffer) => {
    console.log('AudioFileItem - handleAudioFile');

    this.setState({
      analyzing: true,
    });

    const audioContext = new AudioContext();
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);

    // Set the audioSource to the class instance (optional)
    this.audioSource = source;

    const worker = keyFinderUtils.initializeKeyFinder({
      sampleRate: buffer.sampleRate,
      numberOfChannels: buffer.numberOfChannels,
    });

    const channelData: Float32Array[] = [];
    for (let i = 0; i < buffer.numberOfChannels; i += 1) {
      channelData.push(buffer.getChannelData(i));
    }
    const segmentCounts = Math.floor(channelData[0].length / buffer.sampleRate);

    worker.addEventListener('message', (event) => {
      if (event.data.finalResponse) {
        const result = keyFinderUtils.extractResultFromByteArray(
          event.data.data
        );
        console.log(result);
        const normalizedResult = this.getKeySignatureNumericValue(result);
        console.log(normalizedResult);

        // Check if the callback function exists and invoke it with the key
        if (this.keyObtainedCallback) {
          this.keyObtainedCallback(normalizedResult);
          this.keyObtainedCallback = undefined; // Reset the callback
        }

        if (this.mounted) {
          this.setState(
            {
              result,
              analyzing: false,
              normalizedResult,
            },
            () => {
              this.props.updateResult(this.props.fileItem.id, result);
              worker.terminate();
              this.renderFretboardScale();
            }
          );
        }
      } else {
        // Not final response
        if (event.data.data === 0) {
          // very first response
          this.advanceSegmentCount(
            worker,
            channelData,
            buffer.sampleRate,
            buffer.numberOfChannels,
            0
          );
        } else {
          // not first response
          const result = keyFinderUtils.extractResultFromByteArray(
            event.data.data
          );
          this.setState({ result });

          if (this.state.currentSegment < segmentCounts) {
            const offset = this.state.currentSegment * buffer.sampleRate;
            this.advanceSegmentCount(
              worker,
              channelData,
              buffer.sampleRate,
              buffer.numberOfChannels,
              offset
            );
          } else {
            // no more segments
            worker.postMessage({ funcName: 'finalDetection' });
          }
        }
      }
    });

    this.advanceSegmentCount(
      worker,
      channelData,
      buffer.sampleRate,
      buffer.numberOfChannels,
      0
    );
  };

  // Function to handle the key obtained callback
  keyObtainedCallback: ((key: string) => void) | undefined;

  // Method to set the key obtained callback
  // Method to set the key obtained callback
  setKeyObtainedCallback = (callback: (key: string) => void) => {
    this.keyObtainedCallback = callback;

    // Call the renderFretboardScale method if the key is already available
    if (this.state.normalizedResult) {
      this.renderFretboardScale();
    }
  };

  getKeySignatureNumericValue(result: string | null) {
    console.log('AudioFileItem - getKeySignatureNumericValue');
    if (!result) {
      return null;
    }

    const normalizedResult = result.toLowerCase();
    // const normalizedResult = "\"" + rawResult + "\"";

    return normalizedResult;
  }

  arrayBufferToHex(buffer: ArrayBuffer): string {
    const hashArray = Array.from(new Uint8Array(buffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  renderFretboardScale() {
    const { normalizedResult, frets, startFret, order } = this.state;
    console.log(
      'in renderFretboardScale method, passed key is: ',
      normalizedResult
    );
    if (!normalizedResult) {
      return;
    }

    // If the key is available, directly invoke the callback
    if (this.keyObtainedCallback) {
      this.keyObtainedCallback(normalizedResult);
      this.keyObtainedCallback = undefined; // Reset the callback
    }

    const container = this.fretboardContainerRef.current;

    if (container) {
      container.innerHTML = '';

      const fb = fretboards.Fretboard({ frets: frets, startFret: startFret });
      console.log(
        'frets, startFret, and order variables',
        frets,
        startFret,
        order
      );

      fb.add(normalizedResult).paint();
    }
  }

  advanceSegmentCount = (
    worker: Worker,
    channelData: Float32Array[],
    sampleRate: number,
    numberOfChannels: number,
    offset: number
  ) => {
    const segment = keyFinderUtils.zipChannelsAtOffset(
      channelData,
      offset,
      sampleRate,
      numberOfChannels
    );
    worker.postMessage({ funcName: 'feedAudioData', data: [segment] });

    this.setState(({ currentSegment }) => ({
      currentSegment: currentSegment + 1,
    }));
  };

  handleAudioCanPlay = () => {
    console.log('AudioFileItem - handleAudioCanPlay');
    this.setState({ analyzing: false });

    if (this.state.isPlaying) {
      const audioElement = this.props.audioElement;
      if (audioElement) {
        audioElement.currentTime = this.state.lastPlayedPosition || 0;
        audioElement.play();
      }
    }
  };

  handleAudioPlayPause = () => {
    const audioElement = this.props.audioElement;
    if (!audioElement) return;

    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }

    this.setState((prevState) => ({ isPlaying: !prevState.isPlaying }));
  };

  handleAudioSeek = (event: Event) => {
    const audioElement = this.props.audioElement; // Use the audioElement from props
    if (!audioElement || !Number.isFinite(audioElement.duration)) return;

    const seekTime = (event.target as HTMLInputElement).valueAsNumber;

    // Make sure the seekTime is within the valid range (0 to duration)
    const validSeekTime = Math.max(
      0,
      Math.min(seekTime, audioElement.duration)
    );

    // Check if the validSeekTime is finite before updating the currentTime
    if (Number.isFinite(validSeekTime)) {
      // Update the currentTime on the audioElement
      audioElement.currentTime = validSeekTime;
    }
  };

  handleAudioTimeUpdate = () => {
    console.log('in handleAudioTimeUpdate method');
    const audioElement = this.audioElement;
    console.log('audio element log: ', audioElement);
    if (!audioElement) return;

    // Update the current time in the state
    this.setState({ currentTime: audioElement.currentTime });

    this.updateFretboardScale(audioElement.currentTime); // Update the fretboard scale based on the current time
  };

  updateFretboardScale = (currentTimestamp: number) => {
    console.log('in updateFretboardScale method');
    const { frets, order } = this.state;
    const { sectionBoundaries } = this.props;

    console.log('sectionBoundaries props', this.props.sectionBoundaries);

    console.log(sectionBoundaries, frets, order, currentTimestamp);

    for (let i = 0; i < sectionBoundaries.length; i++) {
      if (sectionBoundaries[i] === currentTimestamp) {
        // Calculate the next startFret based on the selected order
        let nextStartFret = this.state.startFret;
        if (order === 'ascending') {
          nextStartFret = (nextStartFret + frets) % 12;
        } else if (order === 'descending') {
          nextStartFret = (nextStartFret - frets + 12) % 12;
        } else if (order === 'random') {
          nextStartFret = Math.floor(Math.random() * 12);
        }

        // Check if an update is required before calling setState
        if (nextStartFret !== this.state.startFret) {
          this.setState({ startFret: nextStartFret }, () => {
            this.renderFretboardScale();
          });
          break;
        }
        this.renderFretboardScale();
      }
    }
  };

  render() {
    const { fileItem } = this.props;
    const { analyzing, result } = this.state;

    return (
      <div class="file-item__container">
        {/* ... (existing code) , fix innerhtml not rendering 7.20*/}
        <div class="file-item__rendered-fretboard">
          {analyzing && <div>Analyzing...</div>}
          {result && (
            <div>
              Result: {result}
              {/* ... (existing code) */}
            </div>
          )}

          <div ref={this.fretboardContainerRef} />

          {/* Audio Player */}
          <div>
            {fileItem.file && (
              <audio
                src={URL.createObjectURL(fileItem.file)}
                ref={(el) => (this.props.audioElement = el)}
                controls={true} // Disable default controls
              />
            )}
            <button onClick={() => this.handleAudioPlayPause()}>
              {this.props.audioElement?.paused ? 'Play' : 'Pause'}
            </button>
            {fileItem.file && (
              <input
                type="range"
                min={0}
                max={this.props.audioElement?.duration || 0}
                value={this.props.audioElement?.currentTime || 0}
                onInput={this.handleAudioSeek}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AudioFileItem;
