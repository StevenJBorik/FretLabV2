import { h, Component } from 'preact';
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
}

interface Props {
  fileItem: FileItem;
  updateDigest: (uuid: string, digest: string) => void;
  updateResult: (uuid: string, result: string) => void;
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
  source: AudioBufferSourceNode | null;
  playingSource: AudioBufferSourceNode | null;
}

class AudioFileItem extends Component<Props, State> {
  audioElement: HTMLAudioElement = new Audio();
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
    source: null,
    playingSource: null,
  };

  audioContext: AudioContext | null = null;
  source: AudioBufferSourceNode | null = null;

  componentDidMount() {
    if (this.props.fileItem.canProcess) {
      const reader = new FileReader();
      reader.onload = this.handleFileLoad;
      reader.readAsArrayBuffer(this.props.fileItem.file);
    }

    // Create the audio context here and use it for playback later
    this.audioContext = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    this.audioElement.addEventListener('error', (error) => {
      console.error('Audio playback error:', error);
    });
  }

  componentDidUpdate(prevProps: Props) {
    if (
      prevProps.fileItem.canProcess === false &&
      this.props.fileItem.canProcess === true
    ) {
      const reader = new FileReader();
      reader.onload = this.handleFileLoad;
      reader.readAsArrayBuffer(this.props.fileItem.file);
    }
  }

  componentWillUnmount() {
    this.worker?.terminate();
    this.audioElement.pause();
    this.audioElement.removeEventListener(
      'timeupdate',
      this.handleAudioTimeUpdate
    );
    this.audioElement.removeEventListener('error', () => {});

    // Close the audio context when the component is unmounted
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
  }

  handleAudioPlayPause = () => {
    if (!this.audioContext || !this.state.source) return;

    const { source, playingSource, isPlaying, currentTime } = this.state;

    if (isPlaying) {
      this.audioContext.suspend().then(() => {
        this.setState({ isPlaying: false });
        source.stop();
      });
    } else {
      this.audioContext.resume().then(() => {
        if (playingSource) {
          // Stop the currently playing source if it exists
          playingSource.stop();
        }
        this.setState({ isPlaying: true });
        const newSource = this.audioContext.createBufferSource();
        newSource.buffer = source.buffer;
        newSource.connect(this.audioContext.destination);
        newSource.onended = () => {
          this.setState({ isPlaying: false, playingSource: null });
        };
        this.setState({ playingSource: newSource });
        newSource.start(0, currentTime); // Start the new source node from the current time
      });
    }
  };

  handleAudioTimeUpdate = () => {
    this.setState({ currentTime: this.audioElement.currentTime });
  };

  handleAudioSeek = (event: Event) => {
    if (!this.audioElement) return;
    const seekTime = (event.target as HTMLInputElement).valueAsNumber;
    this.audioElement.currentTime = seekTime;
    this.setState({ currentTime: seekTime });
  };

  handleAudioFile = async (buffer: AudioBuffer) => {
    console.log('AudioFileItem - handleAudioFile');

    const context = this.audioContext; // Use the existing audio context
    if (!context) return;

    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.onended = () => {
      this.setState({ isPlaying: false });
    };

    this.setState({ analyzing: true });

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

    // Start audio playback after the context is created and everything is set up
    source.start();
    this.setState({ source, isPlaying: true });
  };

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

  getKeySignatureNumericValue(result: string | null) {
    console.log('AudioFileItem - getKeySignatureNumericValue');
    if (!result) {
      return null;
    }

    const normalizedResult = result.toLowerCase();

    return normalizedResult;
  }

  handleFileLoad = async (event: ProgressEvent<FileReader>): Promise<void> => {
    const context = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    if (!crypto?.subtle?.digest) {
      console.error(
        'Web Cryptography API is not supported in this environment.'
      );
      return;
    }
    const digest = await crypto.subtle.digest(
      'SHA-256',
      event.target.result as ArrayBuffer
    );
    const hashArray = Array.from(new Uint8Array(digest));
    const hashHex = hashArray
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
    this.props.updateDigest(this.props.fileItem.id, hashHex);

    console.log('AudioFileItem - handleFileLoad');
    context.decodeAudioData(
      event.target.result as ArrayBuffer,
      (buffer) => {
        this.handleAudioFile(buffer);
      },
      (error) => {
        console.error('Error decoding audio data:', error);
      }
    );
  };
  renderFretboardScale(normalizedResult: string | null) {
    if (!normalizedResult) {
      return;
    }

    const container = document.getElementById('fretboard-container');

    // Clear the container before rendering the fretboard to avoid duplicates
    container.innerHTML = '';

    const fb = fretboards.Fretboard();
    fb.add(normalizedResult).paint(container);
  }

  render() {
    const { fileItem } = this.props;
    const { analyzing, result, isPlaying, currentTime } = this.state;

    return (
      <div class="file-item__container">
        <div class="file-item__info">{/* Render file item information */}</div>
        <div class="file-item__rendered-fretboard">
          {analyzing && <div>Analyzing...</div>}
          {result && (
            <div>
              Result: {result}
              {/* Render the fretboard scale here */}
              <div id="fretboard-container"></div>
            </div>
          )}

          {/* Audio Player */}
          <div>
            {fileItem.file && (
              <audio
                ref={(el) => (this.audioElement = el)}
                src={URL.createObjectURL(fileItem.file)}
                controls // Add the controls attribute here
                onTimeUpdate={this.handleAudioTimeUpdate}
              />
            )}
            <button onClick={this.handleAudioPlayPause}>
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            {fileItem.file && (
              <input
                type="range"
                min={0}
                max={this.audioElement?.duration || 0}
                value={currentTime}
                onChange={this.handleAudioSeek}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default AudioFileItem;
