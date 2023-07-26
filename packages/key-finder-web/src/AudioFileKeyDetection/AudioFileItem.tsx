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
  };

  audioContext: AudioContext | null = null;
  audioSource: AudioBufferSourceNode | null = null;
  originalSource: AudioBufferSourceNode | null = null;
  audioInterval: number | null;
  lastPlayedPosition: number | null;
  isReadyToPlay: boolean = false;
  mounted = false;
  fretboardContainerRef = createRef<HTMLDivElement>();
  getCurrentTimestamp = () => {
    const audioElement = this.props.audioElement;
    if (!audioElement) return 0;
    return audioElement.currentTime;
  };

  componentDidMount() {
    console.log('in componentDidMount method');
    this.mounted = true; // Set to true when the component is mounted
    this.initAudio(this.props.fileItem);
    this.props.audioElement?.addEventListener(
      'timeupdate',
      this.handleAudioTimeUpdate
    );
    this.props.audioElement?.addEventListener(
      'canplaythrough',
      this.handleAudioCanPlay
    );
  }

  componentDidUpdate(prevProps: Props) {
    // Check if the normalizedResult has changed before updating the state
    if (prevProps.normalizedResult !== this.props.normalizedResult) {
      this.renderFretboardScale();
    }

    // Check if the fileItem.id has changed before initializing audio
    if (prevProps.fileItem.id !== this.props.fileItem.id) {
      console.log('AudioFileItem - componentDidUpdate');
      this.initAudio(this.props.fileItem);
    }

    // Check if frets, startFret, or order have changed to update the state and re-render the fretboard scale
    if (
      prevProps.frets !== this.props.frets ||
      prevProps.startFret !== this.props.startFret ||
      prevProps.order !== this.props.order
    ) {
      this.setState(
        {
          frets: this.props.frets,
          startFret: this.props.startFret,
          order: this.props.order,
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
      this.state.files !== nextState.files || // Check if the files array has changed
      this.state.currentTime !== nextState.currentTime // Check if the current time has changed
      // Add more checks here if needed for other props or state properties
    ) {
      return true; // Allow re-render
    }

    // Additional checks for properties that should trigger re-render
    if (
      this.state.frets !== nextState.frets || // Check if frets have changed
      this.state.startFret !== nextState.startFret || // Check if startFret has changed
      this.state.order !== nextState.order // Check if order has changed
      // Add more checks here if needed for other props or state properties
    ) {
      return true; // Allow re-render
    }

    return false; // Prevent re-render
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
    // Existing audio setup logic
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
      getCurrentTimestamp: this.getCurrentTimestamp,
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
        if (this.mounted) {
          this.setState(
            {
              result,
              analyzing: false,
            },
            () => {
              this.props.updateResult(this.props.fileItem.id, result);
              worker.terminate();
            }
          );
        }
        this.renderFretboardScale();
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

  getKeySignatureNumericValue(result: string | null) {
    console.log('AudioFileItem - getKeySignatureNumericValue');
    if (!result) {
      return null;
    }

    const normalizedResult = result.toLowerCase();

    return normalizedResult;
  }

  arrayBufferToHex(buffer: ArrayBuffer): string {
    const hashArray = Array.from(new Uint8Array(buffer));
    return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
  }

  renderFretboardScale() {
    const { normalizedResult } = this.props;
    console.log(
      'in renderFretboardScale method, passed key is: ',
      normalizedResult
    );
    if (!normalizedResult) {
      return;
    }

    const { frets, startFret, order } = this.state; // Use the state values for rendering
    const container = this.fretboardContainerRef.current;

    if (container) {
      container.innerHTML = '';

      const fb = fretboards.Fretboard();
      // fb.add(normalizedResult);

      console.log(
        'frets, startFret, and order variables',
        frets,
        startFret,
        order
      );

      if (order === 'ascending') {
        fb.add(normalizedResult).paint(container, { frets, startFret });
      } else if (order === 'descending') {
        fb.add(normalizedResult).paint(container, {
          frets,
          startFret,
        });
      } else if (order === 'random') {
        fb.add(normalizedResult).paint(container, {
          frets,
          startFret,
        });
      }
    }
  }
  // fb.add(normalizedResult).paint(container, {
  //   frets: frets,
  //   startFret: startFret,
  // })
  // fb.add(normalizedResult).paint(container, {
  //   frets: 12,
  //   startFret: 0
  // });

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

    const audioElement = this.props.audioElement; // Use the audioElement from props

    if (!audioElement) return;

    if (!audioElement.paused && !audioElement.ended) {
      // Only play the audio if it's not already playing and not ended
      return;
    }

    audioElement.currentTime = this.state.lastPlayedPosition || 0;
    if (this.state.isPlaying) {
      audioElement.play();
    }
  };

  handleAudioPlayPause = () => {
    const audioElement = this.props.audioElement; // Use the audioElement from props
    if (!audioElement) return;

    if (audioElement.paused || audioElement.ended) {
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
    const audioElement = this.props.audioElement;
    if (!audioElement) return;

    this.setState({ currentTime: audioElement.currentTime }, () => {
      const currentTimestamp = this.getCurrentTimestamp(); // Get the current timestamp
      this.updateFretboardScale(currentTimestamp); // Update the fretboard scale once
    });
  };

  updateFretboardScale = (currentTimestamp: number) => {
    console.log('in updateFretboardScale method');
    const { sectionBoundaries, frets, order, normalizedResult } = this.props;

    for (let i = 0; i < sectionBoundaries.length; i++) {
      if (sectionBoundaries[i] === currentTimestamp) {
        // Calculate the next startFret based on the selected order
        let nextStartFret = this.props.startFret;
        if (order === 'ascending') {
          nextStartFret = (nextStartFret + frets) % 12;
        } else if (order === 'descending') {
          nextStartFret = (nextStartFret - frets + 12) % 12;
        } else if (order === 'random') {
          nextStartFret = Math.floor(Math.random() * 12);
        }

        // Check if an update is required before calling setState
        if (nextStartFret !== this.props.startFret) {
          console.log('key in updateFret', normalizedResult);
          // Since startFret is controlled by the parent component, we don't need to use setState here
          this.props.updateStartFret(nextStartFret); // Add the function to update startFret in the parent component
          break;
        }
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
