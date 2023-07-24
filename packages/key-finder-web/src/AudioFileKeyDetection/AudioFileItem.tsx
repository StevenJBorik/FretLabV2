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
}

interface Props {
  fileItem: FileItem;
  updateDigest: (uuid: string, digest: string) => void;
  updateResult: (uuid: string, result: string) => void;
  audioElement: HTMLAudioElement | null; // Pass the audio element from the parent component
  frets: number; // Add frets property to store user-defined frets value
  startFret: number; // Add startFret property to store user-defined startFret value
  order: 'ascending' | 'descending' | 'random'; // Add order property to store user-defined order value
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
}

class AudioFileItem extends Component<Props, State> {
  audioElement: HTMLAudioElement | null = null; // Use HTMLAudioElement for audio playback
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
  };

  audioContext: AudioContext | null = null;
  audioSource: AudioBufferSourceNode | null = null;
  originalSource: AudioBufferSourceNode | null = null;
  audioInterval: number | null;
  lastPlayedPosition: number | null;
  isReadyToPlay: boolean = false;
  mounted = false;
  fretboardContainerRef = createRef<HTMLDivElement>();

  componentDidMount() {
    this.mounted = true; // Set to true when the component is mounted
    this.initAudio(this.props.fileItem);
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps.fileItem.id !== this.props.fileItem.id) {
      console.log('AudioFileItem - componentDidUpdate');
      this.initAudio(this.props.fileItem);
    }
  }

  componentWillUnmount() {
    this.mounted = false; // Set to false when the component is unmounted
    this.worker?.terminate();
    this.audioElement?.removeEventListener(
      'canplaythrough',
      this.handleAudioCanPlay
    );
    this.audioElement?.removeEventListener(
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
    this.props.updateDigest(this.props.fileItem.id, hashHex);
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
              this.renderFretboardScale(normalizedResult); // Render the fretboard scale
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

  renderFretboardScale(normalizedResult: string | null) {
    if (!normalizedResult) {
      return;
    }

    const { frets, startFret, order } = this.props; // Get the user-defined frets, startFret, and order from props
    const container = this.fretboardContainerRef.current;

    if (container) {
      container.innerHTML = '';

      const fb = fretboards.Fretboard();
      fb.add(normalizedResult);

      if (order === 'ascending') {
        fb.paint(container, { frets, startFret });
      } else if (order === 'descending') {
        fb.paint(container, { frets, startFret, descending: true });
      } else if (order === 'random') {
        fb.paint(container, { frets, startFret, random: true });
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
    const audioElement = this.props.audioElement;
    if (!audioElement) return;

    this.setState({ currentTime: audioElement.currentTime });

    // Call the method to update the fretboard scale based on the current timestamp
    this.updateFretboardScale(audioElement.currentTime);
  };

  // Inside AudioFileItem class
  updateFretboardScale = (currentTimestamp: number) => {
    const { sectionBoundaries, frets, startFret, order } = this.props;

    for (let i = 0; i < sectionBoundaries.length; i++) {
      if (sectionBoundaries[i] === currentTimestamp) {
        // Calculate the next startFret based on the selected order
        let nextStartFret = startFret;
        if (order === 'ascending') {
          nextStartFret = (nextStartFret + frets) % 12;
        } else if (order === 'descending') {
          nextStartFret = (nextStartFret - frets + 12) % 12;
        } else if (order === 'random') {
          nextStartFret = Math.floor(Math.random() * 12);
        }

        // Update the state with the new startFret and render the fretboard
        this.setState({ startFret: nextStartFret }, () => {
          const normalizedResult = this.getKeySignatureNumericValue(
            this.state.result
          );
          this.renderFretboardScale(normalizedResult);
        });
        break;
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
                // ref={(el) => (this.audioElement = el)}
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
