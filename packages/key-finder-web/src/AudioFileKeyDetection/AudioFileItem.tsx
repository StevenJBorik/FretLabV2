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
  incrementFactor: number;
  normalizedResult: string;
  sectionBoundaries: string[][]; // Add sectionBoundaries property to store the section boundaries
}

interface Props {
  fileItem: FileItem;
  updateDigest: (uuid: string, digest: string) => void;
  updateResult: (uuid: string, result: string) => void;
  audioElement: HTMLAudioElement | null; // Pass the audio element from the parent component
  frets: number; // Add frets property to store user-defined frets value
  startFret: number; // Add startFret property to store user-defined startFret value
  order: 'ascending' | 'descending' | 'random'; // Update the type to match the FileItem interface
  incrementFactor: number;
  sectionBoundaries: string[][] | null;
  normalizedResult: string;
  getCurrentTimestamp: () => number; // Include the getCurrentTimestamp function in Props
  updateStartFret: (startFret: number) => void; // Add updateStartFret function to Props
  updateFretSpan: (frets: number) => void;
  handleNoteDetection: (frequency: number) => void; // Adjust the type of 'note' accordingly
  isReadyToPlay: boolean; // Include the 'isReadyToPlay' prop
  detectedNote: string | null; // Add detectedNote property to the props
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
  // frets: number | null;
  // startFret: number | null;
  order: 'ascending' | 'descending' | 'random'; // Update the type to match the FileItem interface
  incrementFactor: number | null;
  files: Array<FileItem>;
  normalizedResult: string | null;
  lastMatchedBoundary: string[] | null;
  detectedNote: string | null;
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
    // frets: this.props.frets,
    // startFret: this.props.startFret,
    order: this.props.order, // Add order property to store user-defined order value
    incrementFactor: this.props.incrementFactor,
    files: [],
    normalizedResult: this.props.normalizedResult || '', // Initialize with an empty string if not provided
    lastMatchedBoundary: [],
    detectedNote: null,
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
  }

  // componentDidUpdate(prevProps: Props) {
  //   // Check if the fileItem.id has changed before initalizing audio
  //   if (prevProps.fileItem.id !== this.props.fileItem.id) {
  //     console.log('AudioFileItem - componentDidUpdate');
  //     this.initAudio(this.props.fileItem);
  //   }

  //   // Check if frets, startFret, or order have changed.
  //   if (
  //     prevProps.frets !== this.props.frets ||
  //     prevProps.startFret !== this.props.startFret ||
  //     prevProps.order !== this.props.order ||
  //     prevProps.incrementFactor !== this.props.incrementFactor ||
  //     prevProps.normalizedResult !== this.props.normalizedResult
  //   ) {
  //     this.setState(
  //       {
  //         order: this.props.order,
  //         incrementFactor: this.props.incrementFactor,
  //         normalizedResult: this.props.normalizedResult, // Add normalizedResult to the state
  //       },
  //       () => {  // Adding a callback after setState completes
  //         // This ensures that we only invoke the renderFretboardScale method once the state is updated
  //         if (prevProps.frets !== this.props.frets || prevProps.startFret !== this.props.startFret) {
  //           this.renderFretboardScale();
  //         }
  //       }
  //     );
  //   }
  // }

  componentDidUpdate(prevProps: Props) {
    // Check if the fileItem.id has changed before initializing audio
    if (prevProps.fileItem.id !== this.props.fileItem.id) {
      console.log('AudioFileItem - componentDidUpdate');
      this.initAudio(this.props.fileItem);
    }
    console.log('componentdidupdate..');
    console.log(
      'prevProps.fileItem.id vs this.props.fileItem.id: ',
      prevProps.fileItem.id,
      this.props.fileItem.id
    );
    console.log(
      'prevProps.frets vs this.props.frets: ',
      prevProps.frets,
      this.props.frets
    );
    console.log(
      'prevProps.startFret vs this.props.startFret: ',
      prevProps.startFret,
      this.props.startFret
    );
    console.log(
      'prevProps.order vs this.props.order: ',
      prevProps.order,
      this.props.order
    );
    console.log(
      'prevProps.incrementFactor vs this.props.incrementFactor: ',
      prevProps.incrementFactor,
      this.props.incrementFactor
    );
    console.log(
      'prevProps.normalizedResult vs this.props.normalizedResult: ',
      prevProps.normalizedResult,
      this.props.normalizedResult
    );

    const stateUpdates: Partial<State> = {};

    // Only setting state if the value has actually changed.
    if (prevProps.order !== this.props.order) {
      stateUpdates.order = this.props.order;
    }

    if (prevProps.incrementFactor !== this.props.incrementFactor) {
      stateUpdates.incrementFactor = this.props.incrementFactor;
    }

    if (prevProps.normalizedResult !== this.props.normalizedResult) {
      stateUpdates.normalizedResult = this.props.normalizedResult;
    }

    // If there are any updates, apply them all at once.
    if (Object.keys(stateUpdates).length > 0) {
      this.setState(stateUpdates);
    }
  }

  // shouldComponentUpdate(nextProps: Props, nextState: State) {
  //   console.log("should component update..")

  //   if (this.state.files !== nextState.files) console.log("state.files changed");
  //   if (this.state.currentTime !== nextState.currentTime) console.log("state.currentTime changed");
  //   if (this.props.frets !== nextProps.frets) console.log("props.frets changed");
  //   if (this.props.startFret !== nextProps.startFret) console.log("props.startFret changed");
  //   if (this.props.order !== nextProps.order) console.log("props.order changed");
  //   if (this.props.incrementFactor !== nextProps.incrementFactor) console.log("props.incrementFactor changed");
  //   if (this.props.normalizedResult !== nextProps.normalizedResult) console.log("props.normalizedResult changed");

  //   return (
  //     this.state.files !== nextState.files ||
  //     this.state.currentTime !== nextState.currentTime ||
  //     // this.props.frets !== nextProps.frets ||
  //     // this.props.startFret !== nextProps.startFret ||
  //     this.props.order !== nextProps.order ||
  //     this.props.incrementFactor !== nextProps.incrementFactor ||
  //     this.props.normalizedResult !== nextProps.normalizedResult
  //     // Include other props/state checks if necessary
  //   );
  // }

  componentWillUnmount() {
    console.log('AudioFileItem component is unmounted. ');
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

  stopListeningForNotes() {
    // Disconnect the media stream source and stop the audio processing
    if (this.audioContext) {
      this.audioContext.close().catch((error) => {
        console.error('Error closing audio context:', error);
      });
      this.audioContext = null;
    }

    // Clear the detected note
    this.setState({ detectedNote: null });
  }

  setDetectedNote = (note: string | null) => {
    this.setState({ detectedNote: note });
  };

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
    // console.log('AudioFileItem - handleAudioFile');

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
  setKeyObtainedCallback = (callback: (key: string) => void) => {
    this.keyObtainedCallback = callback;

    // Call the renderFretboardScale method if the key is already available
    if (this.state.normalizedResult) {
      this.renderFretboardScale();
    }
  };

  getKeySignatureNumericValue(result: string | null) {
    // console.log('AudioFileItem - getKeySignatureNumericValue');
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
    const { normalizedResult, order } = this.state;
    const { frets, startFret } = this.props;
    console.log(
      'in renderFretboardScale method, passed key is: ',
      normalizedResult
    );
    if (!normalizedResult) {
      return;
    }

    console.log('renderFretboardScale - startFret: ', startFret);
    console.log('renderFretboardScale - frets: ', frets);

    // If the key is available, directly invoke the callback
    if (this.keyObtainedCallback) {
      this.keyObtainedCallback(normalizedResult);
      this.keyObtainedCallback = undefined; // Reset the callback
    }

    // Get all previous fretboard containers
    const previousFretboardContainers =
      document.getElementsByClassName('fretboard');

    // Convert HTMLCollection to Array
    const containersArray = Array.from(previousFretboardContainers);

    // Iterate over each container and remove it from the DOM
    containersArray.forEach((container) => {
      container.parentNode.removeChild(container);
    });

    const fb = fretboards.Fretboard({
      frets: frets,
      startFret: startFret,
      showTitle: true,
    });
    // console.log('frets: ', frets);
    // console.log('startFret: ', startFret);

    fb.add(normalizedResult).paint();
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
    // console.log('AudioFileItem - handleAudioCanPlay');
    this.setState({ analyzing: false });
    // console.log('this.props.isReadyToPlay: ', this.props.isReadyToPlay);
    if (this.props.isReadyToPlay) {
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
    // console.log('audio element log: ', audioElement);
    if (!audioElement) return;

    // Round the current timestamp to match the section boundaries
    const currentTimestamp = Math.round(audioElement.currentTime);

    // Convert the current timestamp to a string in the minute:second format
    const formattedTime = this.convertSecondsToMinuteSecond(currentTimestamp);
    // console.log('current time stamp: ', formattedTime);

    console.log('handleAudioTimeUpdate method: checking if boundary matches..');
    // Check if the current timestamp matches any of the section boundaries
    const matchedBoundary = this.props.sectionBoundaries.find((boundary) =>
      boundary.includes(formattedTime)
    );

    // console.log('section boundaries from props', this.props.sectionBoundaries);

    if (matchedBoundary && matchedBoundary !== this.state.lastMatchedBoundary) {
      // console.log("we've got a match!", matchedBoundary);

      // Update the fretboard scale based on the rounded current time
      this.updateFretboardScale(currentTimestamp);

      // Set the last matched boundary to the current matched boundary
      this.setState({ lastMatchedBoundary: matchedBoundary });
    }
  };

  // Function to convert seconds to a string in the minute:second format
  convertSecondsToMinuteSecond = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  updateFretboardScale = (currentTimestamp: number) => {
    console.log('in updateFretboardScale method');
    const { order, incrementFactor } = this.state;
    const { startFret: currentStartFret, frets: currentFrets } = this.props;

    console.log('start fret: ', currentStartFret);
    console.log('end fret: ', currentFrets);

    let fretDiff = currentFrets - currentStartFret;
    let nextStartFret = currentStartFret;
    let nextFretSpan = currentFrets;

    if (order === 'ascending') {
      nextStartFret = nextStartFret + incrementFactor;
      nextFretSpan = nextFretSpan + incrementFactor;

      if (nextFretSpan > 24) {
        nextStartFret = 0;
        nextFretSpan = fretDiff;
      }
    } else if (order === 'descending') {
      nextStartFret = nextStartFret - incrementFactor;
      nextFretSpan = nextFretSpan - incrementFactor;

      if (nextStartFret < 0) {
        nextStartFret = fretDiff;
        nextFretSpan = 24;
      }
    } else if (order === 'random') {
      nextStartFret = Math.floor(Math.random() * 25); // inclusive of 0 and 24
      nextFretSpan = nextStartFret + fretDiff;

      if (nextFretSpan > 24) {
        nextFretSpan = 24;
      }
    }

    // Check if an update is required before calling setState
    if (nextStartFret !== currentStartFret || nextFretSpan !== currentFrets) {
      console.log(
        'updating startFret and frets in updateFretboardScale method..'
      );
      this.props.updateStartFret(nextStartFret);
      this.props.updateFretSpan(nextFretSpan);
    } else {
      // If startFret is not changed, no need to update the state; just render the fretboard scale
      this.renderFretboardScale();
    }
  };

  render() {
    const { fileItem } = this.props;
    const { analyzing, result } = this.state;
    console.log('Child props startFret:', this.props.startFret);
    console.log('Child props end Fret:', this.props.frets);

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

          <div id="fretboard-container" ref={this.fretboardContainerRef} />

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
