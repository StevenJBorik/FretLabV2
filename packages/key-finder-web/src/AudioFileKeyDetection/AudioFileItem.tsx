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
  };

  componentDidMount() {
    if (this.props.fileItem.canProcess) {
      const reader = new FileReader();
      reader.onload = this.handleFileLoad;
      reader.readAsArrayBuffer(this.props.fileItem.file);
    }
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
  }

  handleAudioFile = async (buffer: AudioBuffer) => {
    console.log('AudioFileItem - handleAudioFile');
    const sampleRate = buffer.sampleRate;
    const numberOfChannels = buffer.numberOfChannels;
    const channelData: Float32Array[] = [];
    for (let i = 0; i < numberOfChannels; i += 1) {
      channelData.push(buffer.getChannelData(i));
    }

    this.setState({ analyzing: true });

    const worker = keyFinderUtils.initializeKeyFinder({
      sampleRate,
      numberOfChannels,
    });

    const segmentCounts = Math.floor(channelData[0].length / sampleRate);

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
            sampleRate,
            numberOfChannels,
            0
          );
        } else {
          // not first response
          const result = keyFinderUtils.extractResultFromByteArray(
            event.data.data
          );
          this.setState({ result });

          if (this.state.currentSegment < segmentCounts) {
            const offset = this.state.currentSegment * sampleRate;
            this.advanceSegmentCount(
              worker,
              channelData,
              sampleRate,
              numberOfChannels,
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
      sampleRate,
      numberOfChannels,
      0
    );
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
    const context = audioUtils.createAudioContext();
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
    context.decodeAudioData(event.target.result as ArrayBuffer, (buffer) => {
      this.handleAudioFile(buffer);
    });
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
    console.log('AudioFileItem - render');
    const { fileItem } = this.props;
    const { analyzing, result } = this.state;

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
        </div>
      </div>
    );
  }
}

export default AudioFileItem;
