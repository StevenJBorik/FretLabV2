import { h, Component, createRef, RefObject } from 'preact';
import axios, { all } from 'axios';
import { Link } from 'preact-router';
import AudioFileItem from './AudioFileItem';
import { v4 as uuidv4 } from 'uuid';
import { numberOfThreads } from '../defaults';
import { FileItem } from './AudioFileItem'; // Import the FileItem interface
import './AudioFileKeyDetection.css';
import Essentia from 'essentia.js/dist/essentia.js-core.es.js';
import { EssentiaWASM } from 'essentia.js/dist/essentia-wasm.es.js';
import { PitchDetector } from 'pitchy';

declare var cv: any;

// import {
//   HandLandmarker,
//   FilesetResolver,
// } from 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0';

// import { drawConnectors, drawLandmarks } from 'https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js';

// const { drawConnectors, drawLandmarks } = window.DrawingUtils;
// const { HandLandmarker, FilesetResolver } = window.TasksVision;
// import {
//   HandLandmarker,
//   FilesetResolver,
// } from '@mediapipe/tasks-vision'

// import * as DrawingUtils from '@mediapipe/drawing_utils/drawing_utils.js';

interface Props {
  frets?: number; // Add frets property to store user-defined frets value
  startFret?: number; // Add startFret property to store user-defined startFret value
}

interface State {
  files: Array<FileItem>;
  sectionBoundaries: string[];
  frets: number; // User input for frets
  startFret: number; // User input for startFret
  order: 'ascending' | 'descending' | 'random'; // Update the type to match the FileItem interface
  isReadyToPlay: boolean;
  incrementFactor: number;
  detectedNote: string;
  detectedFret: number;
  detectedString: number;
  lastPlayedFret: number | null;
  handLandmarker?: any; // Your hand landmarking model
  handConnections: any;
  runningMode: 'IMAGE' | 'VIDEO'; // Only two modes according to your code
  webcamRunning: boolean;
  lastVideoTime: number;
  results?: any; // The results from your detection
  fretDistance: number;
  calibrationMode: boolean;
  handPositionRange: { start: number; end: number } | null; // This can be null if no hand position range is detected.
  isCalibrated: boolean;
  showGuitarPrompt: boolean;
  isFileUploaded: boolean;
  lastValidNote: string;
  lastValidFret: number;
  lastValidString: number;
}

class AudioFileKeyDetection extends Component<Props, State> {
  ref = createRef<HTMLInputElement>();
  childComponentRef: RefObject<AudioFileItem> = createRef();
  meydaAnalyzer: any;
  videoRef = createRef<HTMLVideoElement>();
  canvasRef = createRef<HTMLCanvasElement>();
  canvasCtx: CanvasRenderingContext2D | null = null;
  audioElement: HTMLAudioElement | null = null;
  opencvIsReady = createRef<boolean>();
  debugCanvasRef = createRef<HTMLCanvasElement>();
  cachedCircles: SVGCircleElement[] = [];
  currentHighlightedCircle: SVGCircleElement | null = null; // Add this line
  debouncedHandleNoteDetection = this.debounce(this.handleNoteDetection, 150);
  thresholds: { [key: number]: { min: number; max: number } } = {};

  state: State = {
    files: [],
    sectionBoundaries: [],
    frets: 12, // Default value for frets
    startFret: 0, // Default value for startFret
    order: 'ascending', // Default value for order
    isReadyToPlay: false,
    incrementFactor: 3,
    detectedNote: '',
    detectedFret: 0,
    detectedString: 0,
    handLandmarker: null,
    handConnections: null,
    runningMode: 'IMAGE',
    webcamRunning: false,
    lastVideoTime: -1,
    results: null,
    fretDistance: null,
    calibrationMode: false,
    handPositionRange: null,
    isCalibrated: false,
    showGuitarPrompt: false,
    isFileUploaded: false,
    lastPlayedFret: null,
    lastValidNote: '',
    lastValidFret: 0,
    lastValidString: 0,
  };

  componentDidMount() {
    document.title = 'keyfinder | Key Finder for Audio Files';
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        'content',
        'A web application to find the musical key (root note) of an audio file. Song will be analyzed right in your browser. Select the audio file from your computer to find the root note.'
      );
    if (this.canvasRef.current) {
      this.canvasCtx = this.canvasRef.current.getContext('2d');
    }
    this.computeThresholds();
    this.startListeningForNotes();
  }

  componentWillUnmount() {}

  // shouldComponentUpdate(nextProps: Props, nextState: State) {
  //   console.log('AudioFileKeyDetection - shouldComponentUpdate');
  //   // console.log(
  //   //   'Previous startFret:',
  //   //   this.props.startFret,
  //   //   'Next startFret:',
  //   //   nextProps.startFret
  //   // );
  //   // console.log(
  //   //   'Previous frets:',
  //   //   this.props.frets,
  //   //   'Next frets:',
  //   //   nextProps.frets
  //   // );
  //   if (
  //     this.state.files !== nextState.files ||
  //     // this.state.frets !== nextState.frets ||
  //     // this.state.startFret !== nextState.startFret ||
  //     this.state.order !== nextState.order ||
  //     this.state.incrementFactor !== nextState.incrementFactor
  //     // Add more checks here if needed for other props or state properties
  //   ) {
  //     console.log(
  //       'parent component AudioFilekeyDetection returned true -- rerendering AudioFileKeyDetection component..'
  //     );
  //     return true; // Allow re-render
  //   }
  //   return false; // Prevent re-render
  // }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('AudioFileKeyDetection - shouldComponentUpdate');

    const filesChanged = this.state.files !== nextState.files;
    const orderChanged = this.state.order !== nextState.order;
    const incrementFactorChanged =
      this.state.incrementFactor !== nextState.incrementFactor;
    const sectionBoundariesChanged =
      JSON.stringify(this.state.sectionBoundaries) !==
      JSON.stringify(nextState.sectionBoundaries);

    if (
      filesChanged ||
      orderChanged ||
      incrementFactorChanged ||
      sectionBoundariesChanged
    ) {
      console.log(
        'parent component AudioFileKeyDetection returned true -- rerendering'
      );
      return true;
    }

    return false;
  }

  computeThresholds() {
    let frequencies = [];
    for (let note in this.noteMappings) {
      for (let mapping of this.noteMappings[note]) {
        if (!frequencies.includes(mapping.frequency)) {
          frequencies.push(mapping.frequency);
        }
      }
    }
    frequencies.sort((a, b) => a - b);
    let midpoints = [];
    for (let i = 0; i < frequencies.length - 1; i++) {
      midpoints.push((frequencies[i] + frequencies[i + 1]) / 2);
    }
    for (let i = 0; i < frequencies.length; i++) {
      if (i === 0) {
        this.thresholds[frequencies[i]] = { min: 0, max: midpoints[i] };
      } else if (i === frequencies.length - 1) {
        this.thresholds[frequencies[i]] = {
          min: midpoints[i - 1],
          max: Infinity,
        };
      } else {
        this.thresholds[frequencies[i]] = {
          min: midpoints[i - 1],
          max: midpoints[i],
        };
      }
    }
  }

  handleOpenCVReady = () => {
    this.opencvIsReady.current = true;
    console.log('openCV is ready!');
    // Call any initial setup or functions you need here
  };

  // Inside AudioFileKeyDetection class
  // getCurrentTimestamp = (): number => {
  //   const audioElement = this.audioElement;
  //   if (!audioElement) return 0;
  //   return audioElement.currentTime;
  // };

  // createAudioElement = (): HTMLAudioElement => {
  //   this.audioElement = new Audio(); // Assign the created audio element to the reference
  //   // Add event listeners, if needed
  //   return this.audioElement;
  // };

  secondsToTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  // handleYouTubeLink = async () => {
  //   const youtubeLinkElement = document.querySelector(
  //     '.youtube-link-input'
  //   ) as HTMLInputElement;
  //   const youtubeLink = youtubeLinkElement?.value;

  //   if (youtubeLink) {
  //     const response = await axios.post(
  //       'http://localhost:4000/api/process-youtube-link',
  //       { link: youtubeLink }
  //     );

  //     if (response.data && response.data.mp3) {
  //       // Convert the MP3 data to a File object and trigger handleFileInput logic
  //       const mp3File = new File([response.data.mp3], 'youtube-audio.mp3', {
  //         type: 'audio/mpeg',
  //       });
  //       const mockEvent = {
  //         target: {
  //           files: [mp3File],
  //           value: '',
  //           addEventListener: () => {},
  //           removeEventListener: () => {},
  //           dispatchEvent: (event: Event) => true,
  //         } as any,
  //       };
  //       this.handleFileInput(mockEvent as any);
  //     }
  //   }
  // };

  // handleFileInput = (event: Event): void => {
  //   console.log('AudioFileKeyDetection - handleFileInput');
  //   const fileList = (event.target as HTMLInputElement).files;
  //   console.log('Selected files:', fileList);

  //   this.setState((prevState) => {
  //     let availableThreads = prevState.files.reduce((acc, cur) => {
  //       if (cur.canProcess && !cur.result) return acc - 1;
  //       return acc;
  //     }, numberOfThreads);

  //     const newFiles = prevState.files.slice(); // Create a shallow copy of the files array
  //     const promises = []; // Create an array to store promises for API calls
  //     const parsedSectionBoundaries: string[][] = []; // Declare and initialize parsedSectionBoundaries as a two-dimensional array

  //     for (let fileIdx = 0; fileIdx < fileList.length; fileIdx += 1) {
  //       let canProcess = false;
  //       if (availableThreads > 0) {
  //         canProcess = true;
  //         availableThreads -= 1;
  //       }

  //       const id = uuidv4();

  //       // Call the API for each selected file
  //       if (canProcess) {
  //         const formData = new FormData();
  //         formData.append('file', fileList[fileIdx]);

  //         const audioElement = this.createAudioElement(); // Create the audio element here

  //         const processFilePromise = axios
  //           .post('http://localhost:4000/api/process-audio', formData, {
  //             headers: {
  //               'Content-Type': 'audio/mpeg',
  //             },
  //           })
  //           .then((response) => {
  //             const rawSectionBoundaries = response.data.sections;
  //             console.log('Raw Section Boundaries:', rawSectionBoundaries);

  //             try {
  //               const parsedSectionBoundariesForFile = rawSectionBoundaries.map(
  //                 (boundary) => {
  //                   // Extract minute and second values from the boundary string
  //                   const [minutes, seconds] = boundary
  //                     .replace(/[\[\]'"]/g, '') // Remove brackets, single quotes, and double quotes
  //                     .split(':')
  //                     .map((value) => parseInt(value, 10));

  //                   // Construct the minute:second format
  //                   const formattedTime = `${minutes}:${seconds
  //                     .toString()
  //                     .padStart(2, '0')}`;

  //                   return formattedTime;
  //                 }
  //               );

  //               parsedSectionBoundaries.push(...parsedSectionBoundariesForFile); // Store the section boundaries for the current file

  //               console.log(
  //                 'Parsed Section Boundaries:',
  //                 parsedSectionBoundariesForFile
  //               );
  //             } catch (error) {
  //               console.error('Error parsing section boundaries:', error);
  //             }
  //           })
  //           .catch((error) => {
  //             console.error('Error processing file with MSAF:', error);
  //           });

  //         promises.push(processFilePromise);
  //         // audioElement.onloadedmetadata = () => {
  //         //   this.setState({ isReadyToPlay: true });
  //         // };
  //       }

  //       newFiles.push({
  //         id,
  //         canProcess,
  //         file: fileList[fileIdx],
  //         result: null,
  //         digest: null,
  //         keySignatureNumericValue: null,
  //         scale: null,
  //         frets: this.state.frets, // Set the correct frets value here
  //         startFret: this.state.startFret, // Set the correct startFret value here
  //         order: this.state.order, // Set the correct order value here
  //         incrementFactor: this.state.incrementFactor,
  //         normalizedResult: null,
  //         sectionBoundaries: [], // Initialize with an empty array for now
  //       });
  //     }

  //     // After all API calls are complete, set isReadyToPlay to true
  //     Promise.all(promises)
  //       .then(() => {
  //         this.setState({
  //           files: newFiles.map((file, index) => ({
  //             ...file,
  //             sectionBoundaries: parsedSectionBoundaries.slice(
  //               index * parsedSectionBoundaries.length,
  //               (index + 1) * parsedSectionBoundaries.length
  //             ), // Assign the correct section boundaries for each file
  //           })),
  //           isReadyToPlay: true,
  //           isFileUploaded: true,
  //         });
  //       })
  //       .catch((error) => {
  //         console.error('Error processing files with MSAF:', error);
  //       });

  //     this.ref.current.value = null;
  //     return { files: newFiles, sectionBoundaries: parsedSectionBoundaries };
  //   });
  // };

  handleYouTubeLink = async () => {
    const youtubeLinkElement = document.querySelector(
      '.youtube-link-input'
    ) as HTMLInputElement;
    const youtubeLink = youtubeLinkElement?.value;

    if (youtubeLink) {
      const response = await axios.post(
        'http://localhost:4000/api/process-youtube-link',
        { link: youtubeLink },
        { responseType: 'arraybuffer' }
      ); // Handle response type as arraybuffer

      if (response.data) {
        const mp3File = new File(
          [new Blob([response.data], { type: 'audio/mpeg' })],
          'youtube-audio.mp3'
        ); // Use the received ArrayBuffer
        const mockEvent = {
          target: {
            files: [mp3File],
            value: '',
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: (event: Event) => true,
          } as any,
        };
        this.handleFileInput(mockEvent as any);
      }
    }
  };

  // handleFileInput = (event: Event): void => {
  //   console.log('AudioFileKeyDetection - handleFileInput');
  //   const fileList = (event.target as HTMLInputElement).files;
  //   console.log('Selected files:', fileList);

  //   this.setState((prevState) => {
  //     let availableThreads = prevState.files.reduce((acc, cur) => {
  //       if (cur.canProcess && !cur.result) return acc - 1;
  //       return acc;
  //     }, numberOfThreads);

  //     const newFiles = prevState.files.slice();
  //     const promises = [];
  //     const parsedSectionBoundaries: string[] = [];

  //     for (let fileIdx = 0; fileIdx < fileList.length; fileIdx += 1) {
  //       let canProcess = false;
  //       if (availableThreads > 0) {
  //         canProcess = true;
  //         availableThreads -= 1;
  //       }

  //       const id = uuidv4();

  //       if (canProcess) {
  //         const formData = new FormData();
  //         formData.append('file', fileList[fileIdx]);
  //         console.log("handleFileInput: sending file to api..")
  //         const processFilePromise = axios
  //           .post('http://localhost:4000/api/process-audio', formData, {
  //             headers: {
  //               'Content-Type': 'audio/mpeg',
  //             },
  //           })
  //           .then((response) => {
  //             const rawSectionBoundaries = response.data.sections;

  //             try {
  //               const parsedSectionBoundariesForFile = rawSectionBoundaries.map(
  //                 (boundary) => {
  //                   const [minutes, seconds] = boundary
  //                     .replace(/[\[\]'"]/g, '')
  //                     .split(':')
  //                     .map((value) => parseInt(value, 10));
  //                   const formattedTime = `${minutes}:${seconds
  //                     .toString()
  //                     .padStart(2, '0')}`;
  //                   return formattedTime;
  //                 }
  //               );
  //               console.log("parsed sectionBoundaries after API returns boundaries: ", parsedSectionBoundaries);
  //               parsedSectionBoundaries.push(...parsedSectionBoundariesForFile);
  //             } catch (error) {
  //               console.error('Error parsing section boundaries:', error);
  //             }
  //           })
  //           .catch((error) => {
  //             console.error('Error processing file with MSAF:', error);
  //           });

  //         promises.push(processFilePromise);
  //       }

  //       newFiles.push({
  //         id,
  //         canProcess,
  //         file: fileList[fileIdx],
  //         result: null,
  //         digest: null,
  //         keySignatureNumericValue: null,
  //         scale: null,
  //         frets: this.state.frets,
  //         startFret: this.state.startFret,
  //         order: this.state.order,
  //         incrementFactor: this.state.incrementFactor,
  //         normalizedResult: null,
  //         sectionBoundaries: [],
  //       });
  //     }

  //     Promise.all(promises)
  //       .then(() => {
  //         this.setState({
  //           files: newFiles.map((file, index) => ({
  //             ...file,
  //             sectionBoundaries: parsedSectionBoundaries.slice(
  //               index * parsedSectionBoundaries.length,
  //               (index + 1) * parsedSectionBoundaries.length
  //             ),
  //           })),
  //           isReadyToPlay: true,
  //           isFileUploaded: true,
  //         });
  //       })
  //       .catch((error) => {
  //         console.error('Error in Promise.all:', error);
  //       });

  //     return {
  //       files: newFiles,
  //       isFileUploaded: true,
  //       sectionBoundaries: parsedSectionBoundaries,
  //     };
  //   });
  // };

  handleFileInput = (event: Event): void => {
    console.log('AudioFileKeyDetection - handleFileInput');
    const fileList = (event.target as HTMLInputElement).files;
    console.log('Selected files:', fileList);

    this.setState((prevState) => {
      let availableThreads = prevState.files.reduce((acc, cur) => {
        if (cur.canProcess && !cur.result) return acc - 1;
        return acc;
      }, numberOfThreads);

      const newFiles = prevState.files.slice();
      const promises = [];
      const parsedSectionBoundaries: string[] = [];

      for (let fileIdx = 0; fileIdx < fileList.length; fileIdx += 1) {
        let canProcess = false;
        if (availableThreads > 0) {
          canProcess = true;
          availableThreads -= 1;
        }

        const id = uuidv4();

        if (canProcess) {
          const formData = new FormData();
          formData.append('file', fileList[fileIdx]);
          console.log('handleFileInput: sending file to api..');
          const processFilePromise = axios
            .post('http://localhost:4000/api/process-audio', formData, {
              headers: {
                'Content-Type': 'audio/mpeg',
              },
            })
            .then((response) => {
              console.log(
                'Raw section boundaries from API:',
                response.data.sections
              );
              const rawSectionBoundaries = response.data.sections;

              try {
                const parsedSectionBoundariesForFile = rawSectionBoundaries.map(
                  (boundary) => {
                    const [minutes, seconds] = boundary
                      .replace(/[\[\]'"]/g, '')
                      .split(':')
                      .map((value) => parseInt(value, 10));
                    const formattedTime = `${minutes}:${seconds
                      .toString()
                      .padStart(2, '0')}`;
                    console.log('formatted time: ', formattedTime);
                    return formattedTime;
                  }
                );
                parsedSectionBoundaries.push(...parsedSectionBoundariesForFile);
                console.log(
                  'Parsed section boundaries after API returns: ',
                  parsedSectionBoundariesForFile
                );
              } catch (error) {
                console.error('Error parsing section boundaries:', error);
              }
            })
            .catch((error) => {
              console.error('Error processing file with API:', error);
            });

          promises.push(processFilePromise);
        }

        newFiles.push({
          id,
          canProcess,
          file: fileList[fileIdx],
          result: null,
          digest: null,
          keySignatureNumericValue: null,
          scale: null,
          frets: this.state.frets,
          startFret: this.state.startFret,
          order: this.state.order,
          incrementFactor: this.state.incrementFactor,
          normalizedResult: null,
          sectionBoundaries: [],
        });
      }

      Promise.all(promises)
        .then(() => {
          // This is where we will set the state after all promises have been resolved.
          this.setState({
            files: newFiles.map((file, index) => ({
              ...file,
              sectionBoundaries: parsedSectionBoundaries.slice(
                (index * parsedSectionBoundaries.length) / fileList.length,
                ((index + 1) * parsedSectionBoundaries.length) / fileList.length
              ),
            })),
            isReadyToPlay: true,
            isFileUploaded: true,
            sectionBoundaries: parsedSectionBoundaries, // Assuming you want the full list here
          });
        })
        .catch((error) => {
          console.error('Error in Promise.all:', error);
        });

      // Return early state update for isFileUploaded
      // The rest will be set after the promises are resolved.
      return {
        ...prevState,
        files: newFiles,
        isFileUploaded: true,
      };
    });
  };

  updateDigest = (uuid: string, digest: string): void => {
    console.log('AudioFileKeyDetection - updateDigest');
    this.setState(({ files }) => {
      const newFiles = files.map((file) => {
        if (file.id === uuid) return { ...file, uuid };
        return file;
      });
      return { files: newFiles };
    });
  };

  updateResult = (uuid: string, result: string): void => {
    console.log('AudioFileKeyDetection - updateResult');
    this.setState(({ files }) => {
      let availableThreads = 1;
      const newFiles = files.map((file) => {
        if (file.id === uuid) return { ...file, result };
        if (file.canProcess === false && availableThreads > 0) {
          availableThreads -= 1;
          return { ...file, canProcess: true };
        }
        return file;
      });
      return { files: newFiles };
    });
  };

  // Event handler for updating the frets value
  handleFretsChange = (event: Event): void => {
    const frets = Number((event.target as HTMLInputElement).value);
    this.setState({ frets });
  };

  // Event handler for updating the startFret value
  handleStartFretChange = (event: Event): void => {
    const startFret = Number((event.target as HTMLInputElement).value);
    this.setState({ startFret });
  };

  // Event handler for updating the order value
  handleOrderChange = (event: Event): void => {
    const order = (event.target as HTMLSelectElement).value as
      | 'ascending'
      | 'descending'
      | 'random';
    this.setState({ order });
  };

  // Event handler for updating the range to increment by each time there is a song section change
  handleIncrementFactorChange = (event: Event): void => {
    const incrementFactor = Number((event.target as HTMLInputElement).value);
    this.setState({ incrementFactor });
  };

  handleFretUpdate = (startFret: number, frets: number): void => {
    console.log(
      'handleFretUpdate - initialized from AudioFileItem, setting new startFret/frets state. '
    );
    this.setState({ startFret, frets });
    console.log(
      'handleFretUpdate values for startFret/frets: ',
      startFret,
      frets
    );
  };

  // Parent component method to update section boundaries
  updateSectionBoundaries = (newUserBoundaries) => {
    this.setState({ sectionBoundaries: newUserBoundaries });
  };

  handleNoteDetection(frequency: number | null): void {
    if (frequency !== null) {
      let potentialMatches = this.getNoteFromFrequency(frequency);
      console.log('Detected Frequency: ', frequency);
      console.log('Potential Matches before filtering: ', potentialMatches);

      // Special logic for B3 note on frets 0 and 4
      const b3Fret0Match = potentialMatches.find(
        (match) => match.note === 'B3' && match.fret === 0
      );
      const b3Fret4Match = potentialMatches.find(
        (match) => match.note === 'B3' && match.fret === 4
      );

      if (b3Fret0Match && b3Fret4Match) {
        if (frequency < 246.94) {
          potentialMatches = [b3Fret0Match]; // Prioritize B3 on fret 0
        } else {
          potentialMatches = [b3Fret4Match]; // Prioritize B3 on fret 4
        }
      }

      potentialMatches = potentialMatches.filter((match) => {
        return (
          match.fret >= this.state.startFret &&
          match.fret <= this.state.startFret + this.state.frets
        );
      });

      const distanceToLastFret = (match) =>
        Math.abs(this.state.detectedFret - match.fret);
      potentialMatches.sort(
        (a, b) => distanceToLastFret(a) - distanceToLastFret(b)
      );

      let probableMatch = potentialMatches[0];

      console.log('Probable Match:', probableMatch);

      if (probableMatch) {
        this.setState({
          detectedNote: probableMatch.note,
          detectedFret: probableMatch.fret,
          detectedString: probableMatch.string,
          lastValidNote: probableMatch.note, // Update the last valid values here
          lastValidFret: probableMatch.fret,
          lastValidString: probableMatch.string,
        });
        this.updateFretboardHighlights(probableMatch.note, probableMatch.fret);
      } else if (this.state.detectedNote) {
        this.setState({
          detectedNote: this.state.lastValidNote,
          detectedFret: this.state.lastValidFret,
          detectedString: this.state.lastValidString,
        });
      }
    }
  }

  // handleNoteDetection(frequency: number | null): void {
  //   if (frequency !== null) {
  //     let potentialMatches = this.getNoteFromFrequency(frequency);
  //     console.log('Detected Frequency: ', frequency);
  //     console.log('Potential Matches before filtering: ', potentialMatches);

  //     // Special logic for B3 note on frets 0 and 4
  //     const b3Fret0Match = potentialMatches.find(
  //       (match) => match.note === 'B3' && match.fret === 0
  //     );
  //     const b3Fret4Match = potentialMatches.find(
  //       (match) => match.note === 'B3' && match.fret === 4
  //     );

  //     if (b3Fret0Match && b3Fret4Match) {
  //       if (frequency < 246.94) {
  //         potentialMatches = [b3Fret0Match]; // Prioritize B3 on fret 0
  //       } else {
  //         potentialMatches = [b3Fret4Match]; // Prioritize B3 on fret 4
  //       }
  //     }

  //     potentialMatches = potentialMatches.filter((match) => {
  //       return (
  //         match.fret >= this.state.startFret &&
  //         match.fret <= this.state.startFret + this.state.frets
  //       );
  //     });

  //     console.log('Potential Matches after filtering: ', potentialMatches);

  //     let probableMatch;

  //     if (potentialMatches.length === 1) {
  //       probableMatch = potentialMatches[0];
  //     } else if (potentialMatches.length > 1) {
  //       // Step 1: Filter those on the same fret as the last detected fret.
  //       const sameFretMatches = potentialMatches.filter(
  //         (match) => match.fret === this.state.detectedFret
  //       );

  //       if (sameFretMatches.length === 1) {
  //         probableMatch = sameFretMatches[0];
  //       } else if (sameFretMatches.length > 1) {
  //         // Step 2: Prioritize based on string using the last detected note's string.
  //         const lastDetectedString =
  //           this.noteMappings[this.state.detectedNote]?.string;
  //         const sameStringMatches = sameFretMatches.filter(
  //           (match) => match.string === lastDetectedString
  //         );

  //         probableMatch =
  //           sameStringMatches.length > 0
  //             ? sameStringMatches[0]
  //             : sameFretMatches[0];
  //       } else {
  //         // Step 3: If none on the same fret, then sort based on closeness to the last detected fret.
  //         probableMatch = potentialMatches.sort((a, b) => {
  //           return (
  //             Math.abs(this.state.detectedFret - a.fret) -
  //             Math.abs(this.state.detectedFret - b.fret)
  //           );
  //         })[0];
  //       }
  //     }

  //     console.log('Probable Match:', probableMatch);

  //     if (probableMatch) {
  //       this.setState({
  //         detectedNote: probableMatch.note,
  //         detectedFret: probableMatch.fret,
  //       });
  //       this.updateFretboardHighlights(probableMatch.note, probableMatch.fret);
  //     } else if (this.state.detectedNote) {
  //       this.setState({ detectedNote: '', detectedFret: null });
  //     }
  //   }
  // }

  fretPositions = {
    0: 37.5,
    1: 87.5,
    2: 137.5,
    3: 187.5,
    4: 237.5,
    5: 287.5,
    6: 337.5,
    7: 387.5,
    8: 437.5,
    9: 487.5,
    10: 537.5,
    11: 587.5,
    12: 637.5,
    13: 687.5,
    14: 737.5,
    15: 787.5,
    16: 837.5,
    17: 887.5,
    18: 937.5,
    19: 987.5,
    20: 1037.5,
    21: 1087.5,
    22: 1137.5,
    23: 1187.5,
    24: 1237.5,
  };

  updateFretboardHighlights = (detectedNote, detectedFret) => {
    const fretboardContainer = document.querySelector('.fretboard');

    if (!fretboardContainer) {
      console.error('Fretboard container not found');
      return;
    }
    const allCircleElements =
      fretboardContainer.querySelectorAll('circle.note'); // targeting circles with class 'note'

    // console.log('Total circles:', allCircleElements.length);

    allCircleElements.forEach((circleElement) => {
      if (circleElement instanceof SVGElement) {
        circleElement.classList.remove('highlight');
        circleElement.style.fill = 'white';
      }
    });

    console.log('Detected Note:', detectedNote, 'Detected Fret:', detectedFret);

    if (detectedNote && detectedFret !== undefined) {
      const noteData = this.noteMappings[detectedNote];
      if (noteData) {
        noteData.forEach((data) => {
          if (data.fret === detectedFret) {
            console.log(
              'updateFretboardHighlights - this.state.startFret',
              this.state.startFret
            );
            const relativeFret = detectedFret - this.state.startFret;
            const fretPosition = this.fretPositions[relativeFret];
            // console.log(
            //   'updateFretboardHighlights - relative fret: ',
            //   relativeFret
            // );
            // console.log(
            //   'updateFretboardHighlights - fretPosition ',
            //   fretPosition
            // );

            let matchingCircle;

            if (detectedFret === 0) {
              matchingCircle = Array.from(allCircleElements).find(
                (circleElement) =>
                  circleElement instanceof SVGElement &&
                  circleElement.firstElementChild.textContent.trim() ===
                    detectedNote
              );
            } else {
              matchingCircle = Array.from(allCircleElements).find(
                (circleElement) =>
                  circleElement instanceof SVGElement &&
                  parseFloat(circleElement.getAttribute('cx')) ===
                    fretPosition &&
                  circleElement.firstElementChild &&
                  circleElement.firstElementChild.textContent.trim() ===
                    detectedNote
              );
            }

            console.log('Matching Circle Element:', matchingCircle);

            if (matchingCircle && matchingCircle instanceof SVGElement) {
              matchingCircle.classList.add('highlight');
              matchingCircle.style.fill = 'green';
            }

            const cxMatchingCircles = Array.from(allCircleElements).filter(
              (circleElement) =>
                circleElement instanceof SVGElement &&
                parseFloat(circleElement.getAttribute('cx')) === fretPosition
            );

            const noteMatchingCircles = Array.from(allCircleElements).filter(
              (circleElement) =>
                circleElement instanceof SVGElement &&
                circleElement.firstElementChild &&
                circleElement.firstElementChild.textContent.trim() ===
                  detectedNote
            );

            // console.log(
            //   'Circles matching cx attribute:',
            //   cxMatchingCircles.length
            // );
            // console.log(
            //   'Circles matching detected note:',
            //   noteMatchingCircles.length
            // );

            // console.log('cxMatchingCircles:', cxMatchingCircles);
            // console.log('noteMatchingCircles:', noteMatchingCircles);
          }
        });
      }
    }
  };

  startListeningForNotes() {
    const SILENCE_THRESHOLD = 0.09;
    let detector;
    let frameCounter = 0;
    let lastProcessedTime = 0;
    const PROCESS_INTERVAL = 50;
    const HOLD_TIME = 150; // Change as per your needs
    let lastDetectedPitchTime = 0;
    let lastDetectedPitch = null;

    let previousPitches = [];
    const MAX_PITCHES = 2; // Number of pitches to store for averaging and buffering

    function processAudioData(input, sampleRate) {
      try {
        let maxAmplitude = -Infinity;
        for (let i = 0; i < input.length; i++) {
          if (input[i] > maxAmplitude) {
            maxAmplitude = input[i];
          }
        }

        if (maxAmplitude > SILENCE_THRESHOLD) {
          const [pitch] = detector.findPitch(input, sampleRate);

          if (typeof pitch === 'number') {
            // Smoothing
            previousPitches.push(pitch);
            if (previousPitches.length > MAX_PITCHES) {
              previousPitches.shift();
            }
            const averagePitch =
              previousPitches.reduce((a, b) => a + b) / previousPitches.length;

            // Buffering
            const meanPitch =
              previousPitches.reduce((a, b) => a + b) / previousPitches.length;
            const pitchDifference = Math.abs(meanPitch - pitch);

            if (pitchDifference < 20 || previousPitches.length < MAX_PITCHES) {
              // 5 can be tweaked
              // Hold Time
              const currentTime = Date.now();
              if (
                currentTime - lastDetectedPitchTime > HOLD_TIME ||
                !lastDetectedPitch
              ) {
                this.handleNoteDetection(averagePitch);
                lastDetectedPitch = averagePitch;
                lastDetectedPitchTime = currentTime;
              }
            }
          } else {
            this.handleNoteDetection(null);
          }
        } else {
          this.handleNoteDetection(null);
        }
      } catch (error) {
        console.error('Error in processAudioData: ', error);
      }
    }

    const boundProcessAudioData = processAudioData.bind(this);

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const audioContext = new AudioContext();
        const analyserNode = audioContext.createAnalyser();
        analyserNode.fftSize = 1024;

        audioContext.createMediaStreamSource(stream).connect(analyserNode);
        detector = PitchDetector.forFloat32Array(analyserNode.fftSize);

        function fetchAndSendAudioData() {
          const currentTime = Date.now();
          if (currentTime - lastProcessedTime > PROCESS_INTERVAL) {
            const fftSize = analyserNode.fftSize;
            const audioData = new Float32Array(fftSize);
            analyserNode.getFloatTimeDomainData(audioData);
            boundProcessAudioData(audioData, audioContext.sampleRate);

            lastProcessedTime = currentTime;
          }

          requestAnimationFrame(fetchAndSendAudioData);
        }

        fetchAndSendAudioData();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  }

  debounce(func, delay) {
    let debounceTimer;
    return function (...args) {
      const context = this;
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => func.apply(context, args), delay);
    };
  }

  stopListeningForNotes() {
    if (this.childComponentRef.current) {
      // Call the stopListeningForNotes function in the child component
      this.childComponentRef.current.stopListeningForNotes();
    }
  }

  noteMappings = {
    A2: [
      { fret: 0, string: 5, frequency: 110.0 },
      { fret: 5, string: 6, frequency: 110.0 },
    ],
    A3: [
      { fret: 2, string: 3, frequency: 220.0 },
      { fret: 7, string: 4, frequency: 220.0 },
      { fret: 12, string: 5, frequency: 220.0 },
      { fret: 17, string: 6, frequency: 220.0 },
    ],
    A4: [
      { fret: 5, string: 1, frequency: 440.0 },
      { fret: 10, string: 2, frequency: 440.0 },
      { fret: 14, string: 3, frequency: 440.0 },
      { fret: 19, string: 4, frequency: 440.0 },
    ],
    B2: [
      { fret: 2, string: 5, frequency: 123.47 },
      { fret: 7, string: 6, frequency: 123.47 },
    ],
    B3: [
      { fret: 0, string: 2, frequency: 246.94 },
      { fret: 4, string: 3, frequency: 246.94 },
      { fret: 9, string: 4, frequency: 246.94 },
      { fret: 14, string: 5, frequency: 246.94 },
      { fret: 19, string: 6, frequency: 246.94 },
    ],
    B4: [
      { fret: 7, string: 1, frequency: 493.88 },
      { fret: 12, string: 2, frequency: 493.88 },
      { fret: 16, string: 3, frequency: 493.88 },
      { fret: 21, string: 4, frequency: 493.88 },
    ],
    C3: [
      { fret: 3, string: 5, frequency: 130.81 },
      { fret: 8, string: 6, frequency: 130.81 },
    ],
    C4: [
      { fret: 1, string: 2, frequency: 261.63 },
      { fret: 5, string: 3, frequency: 261.63 },
      { fret: 10, string: 4, frequency: 261.63 },
      { fret: 17, string: 3, frequency: 261.63 },
      { fret: 20, string: 6, frequency: 261.63 },
    ],
    C5: [
      { fret: 8, string: 1, frequency: 523.25 },
      { fret: 13, string: 2, frequency: 523.25 },
      { fret: 20, string: 1, frequency: 523.25 },
    ],
    D3: [
      { fret: 0, string: 4, frequency: 146.83 },
      { fret: 5, string: 5, frequency: 146.83 },
      { fret: 10, string: 6, frequency: 146.83 },
    ],
    D4: [
      { fret: 3, string: 2, frequency: 293.66 },
      { fret: 7, string: 3, frequency: 293.66 },
      { fret: 12, string: 4, frequency: 293.66 },
      { fret: 17, string: 5, frequency: 293.66 },
      { fret: 22, string: 6, frequency: 293.66 },
    ],
    D5: [
      { fret: 10, string: 1, frequency: 587.33 },
      { fret: 15, string: 2, frequency: 587.33 },
      { fret: 19, string: 3, frequency: 587.33 },
    ],
    E2: [{ fret: 0, string: 6, frequency: 82.41 }],
    E3: [
      { fret: 2, string: 4, frequency: 164.81 },
      { fret: 7, string: 5, frequency: 164.81 },
      { fret: 12, string: 6, frequency: 164.81 },
    ],
    E4: [
      { fret: 0, string: 1, frequency: 329.63 },
      { fret: 5, string: 2, frequency: 329.63 },
      { fret: 9, string: 3, frequency: 329.63 },
      { fret: 14, string: 4, frequency: 329.63 },
      { fret: 19, string: 5, frequency: 329.63 },
    ],
    E5: [
      { fret: 12, string: 1, frequency: 659.25 },
      { fret: 17, string: 2, frequency: 659.25 },
    ],
    F2: [{ fret: 1, string: 6, frequency: 87.31 }],
    F3: [
      { fret: 3, string: 4, frequency: 174.61 },
      { fret: 8, string: 5, frequency: 174.61 },
      { fret: 13, string: 6, frequency: 174.61 },
    ],
    F4: [
      { fret: 1, string: 1, frequency: 349.23 },
      { fret: 6, string: 2, frequency: 349.23 },
      { fret: 10, string: 3, frequency: 349.23 },
      { fret: 15, string: 4, frequency: 349.23 },
      { fret: 20, string: 5, frequency: 349.23 },
    ],
    F5: [
      { fret: 13, string: 1, frequency: 698.46 },
      { fret: 18, string: 2, frequency: 698.46 },
      { fret: 22, string: 3, frequency: 698.46 },
    ],
    G2: [{ fret: 3, string: 1, frequency: 98.0 }],
    G3: [
      { fret: 0, string: 3, frequency: 196.0 },
      { fret: 5, string: 4, frequency: 196.0 },
      { fret: 10, string: 5, frequency: 196.0 },
      { fret: 15, string: 6, frequency: 196.0 },
    ],
    G4: [
      { fret: 3, string: 1, frequency: 392.0 },
      { fret: 8, string: 2, frequency: 392.0 },
      { fret: 12, string: 3, frequency: 392.0 },
      { fret: 17, string: 4, frequency: 392.0 },
      { fret: 23, string: 5, frequency: 392.0 },
    ],
    'G#2': [{ fret: 4, string: 6, frequency: 103.83 }],
    'G#3': [
      { fret: 1, string: 3, frequency: 207.65 },
      { fret: 6, string: 4, frequency: 207.65 },
      { fret: 11, string: 5, frequency: 207.65 },
      { fret: 16, string: 6, frequency: 207.65 },
    ],
    'G#4': [
      { fret: 4, string: 1, frequency: 415.3 },
      { fret: 9, string: 2, frequency: 415.3 },
      { fret: 13, string: 3, frequency: 415.3 },
      { fret: 18, string: 4, frequency: 415.3 },
    ],
    'G#5': [
      { fret: 16, string: 1, frequency: 830.61 },
      { fret: 21, string: 2, frequency: 830.61 },
    ],
    'A#2': [
      { fret: 1, string: 5, frequency: 116.54 },
      { fret: 6, string: 6, frequency: 116.54 },
    ],
    'A#3': [
      { fret: 3, string: 3, frequency: 233.08 },
      { fret: 8, string: 4, frequency: 233.08 },
      { fret: 13, string: 5, frequency: 233.08 },
      { fret: 17, string: 6, frequency: 233.08 },
    ],
    'A#4': [
      { fret: 6, string: 1, frequency: 466.16 },
      { fret: 15, string: 3, frequency: 466.166 },
      { fret: 20, string: 4, frequency: 466.16 },
    ],
    'A#5': [
      { fret: 11, string: 2, frequency: 932.33 },
      { fret: 18, string: 3, frequency: 932.33 },
      { fret: 23, string: 2, frequency: 932.33 },
    ],
    'C#3': [
      { fret: 4, string: 5, frequency: 138.59 },
      { fret: 9, string: 6, frequency: 138.59 },
    ],
    'C#4': [
      { fret: 2, string: 2, frequency: 277.18 },
      { fret: 6, string: 3, frequency: 277.18 },
      { fret: 11, string: 4, frequency: 277.18 },
      { fret: 16, string: 5, frequency: 277.18 },
      { fret: 21, string: 6, frequency: 277.18 },
    ],
    'C#5': [
      { fret: 9, string: 1, frequency: 554.37 },
      { fret: 14, string: 2, frequency: 554.37 },
      { fret: 18, string: 3, frequency: 554.37 },
    ],
    'D#3': [
      { fret: 1, string: 4, frequency: 155.56 },
      { fret: 6, string: 5, frequency: 155.56 },
      { fret: 11, string: 6, frequency: 155.56 },
    ],
    'D#4': [
      { fret: 4, string: 2, frequency: 311.13 },
      { fret: 8, string: 3, frequency: 311.13 },
      { fret: 13, string: 4, frequency: 311.13 },
      { fret: 18, string: 5, frequency: 311.13 },
    ],
    'D#5': [
      { fret: 11, string: 1, frequency: 622.25 },
      { fret: 16, string: 2, frequency: 622.25 },
      { fret: 20, string: 3, frequency: 622.25 },
    ],
    'F#2': [{ fret: 2, string: 6, frequency: 92.5 }],
    'F#3': [
      { fret: 4, string: 4, frequency: 185.0 },
      { fret: 9, string: 5, frequency: 185.0 },
      { fret: 14, string: 6, frequency: 185.0 },
    ],
    'F#4': [
      { fret: 2, string: 1, frequency: 369.99 },
      { fret: 7, string: 2, frequency: 369.99 },
      { fret: 11, string: 3, frequency: 369.99 },
      { fret: 16, string: 4, frequency: 369.99 },
      { fret: 21, string: 5, frequency: 369.99 },
    ],
    'F#5': [
      { fret: 14, string: 1, frequency: 739.99 },
      { fret: 19, string: 2, frequency: 739.99 },
      { fret: 23, string: 3, frequency: 739.99 },
    ],
  };

  getNoteFromFrequency = (
    frequency: number
  ): Array<{ note: string; fret: number; string: number }> => {
    const MIN_FREQUENCY = 80;
    const MAX_FREQUENCY = 850;
    const freq =
      typeof frequency === 'string' ? parseFloat(frequency) : frequency;

    // If the frequency is out of bounds, return an empty array
    if (freq < MIN_FREQUENCY || freq > MAX_FREQUENCY) {
      return [];
    }

    const potentialMatches: Array<{
      note: string;
      fret: number;
      string: number;
    }> = [];

    for (const note in this.noteMappings) {
      const noteData = this.noteMappings[note];
      noteData.forEach((data) => {
        const { min, max } = this.thresholds[data.frequency];
        if (freq >= min && freq <= max) {
          potentialMatches.push({
            note: note,
            fret: data.fret,
            string: data.string,
          });
        }
      });
    }
    return potentialMatches;
  };

  centroidValues = [];
  mfccValues = [];
  spectralContrastValues = [];
  spectralFlatnessValues = [];
  spectralPeaksValues = [];
  pitchSalienceValues = [];
  averageInterval;

  handleStartCalibration = async () => {
    try {
      const essentia = new Essentia(EssentiaWASM);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new AudioContext();
      const sampleRate = audioContext.sampleRate;
      const frameSize = 512;
      const source = audioContext.createMediaStreamSource(stream);
      const processor = audioContext.createScriptProcessor(512, 1, 1);

      source.connect(processor);
      processor.connect(audioContext.destination);

      const computeRMS = (buffer) => {
        let sum = 0;
        for (let i = 0; i < buffer.length; i++) {
          sum += buffer[i] * buffer[i];
        }
        return Math.sqrt(sum / buffer.length);
      };

      processor.onaudioprocess = (audioProcessingEvent) => {
        const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
        const rmsValue = computeRMS(inputData);
        const silenceThreshold = 0.08;

        if (rmsValue < silenceThreshold) return;

        const essentiaInputVector = essentia.arrayToVector(inputData);

        // Spectral Centroid Setup
        const centroidResult = essentia.Centroid(essentiaInputVector);
        this.centroidValues.push(centroidResult.centroid);

        function vectorFloatToArray(vector) {
          let arr = [];
          if (vector && typeof vector.size === 'function') {
            for (let i = 0; i < vector.size(); i++) {
              arr.push(vector.get(i));
            }
          } else {
            console.error('Invalid vector:', vector);
          }
          return arr;
        }

        const mfccResult = essentia.MFCC(essentiaInputVector);

        if (mfccResult && mfccResult.bands) {
          const bandsArray = vectorFloatToArray(mfccResult.bands);
          this.mfccValues.push(bandsArray);
        } else {
          console.error('Unexpected mfccResult:', mfccResult);
        }

        // Spectral Contrast Setup
        const spectralContrastWindowedSignal =
          essentia.Windowing(essentiaInputVector);
        const spectralContrastSpectrum = essentia.Spectrum(
          spectralContrastWindowedSignal.frame
        );
        const spectralContrastResult = essentia.SpectralContrast(
          spectralContrastSpectrum.spectrum,
          512
        );

        if (spectralContrastResult && spectralContrastResult.spectralContrast) {
          const contrastArray = vectorFloatToArray(
            spectralContrastResult.spectralContrast
          );
          this.spectralContrastValues.push(contrastArray);
        } else {
          console.error(
            'Unexpected spectralContrastResult:',
            spectralContrastResult
          );
        }

        // Spectral Flatness Setup
        const spectralFlatnessWindowedSignal =
          essentia.Windowing(essentiaInputVector);
        const spectralFlatnessSpectrum = essentia.Spectrum(
          spectralFlatnessWindowedSignal.frame
        );
        const spectralFlatnessResult = essentia.Flatness(
          spectralFlatnessSpectrum.spectrum,
          512
        );
        this.spectralFlatnessValues.push(spectralFlatnessResult.flatness);

        // Spectral Peak Setup
        const spectralPeaksWindowedSignal =
          essentia.Windowing(essentiaInputVector);
        const spectralPeaksSpectrum = essentia.Spectrum(
          spectralPeaksWindowedSignal.frame
        );
        const spectralPeaksResult = essentia.SpectralPeaks(
          spectralPeaksSpectrum.spectrum
        );
        this.spectralPeaksValues.push({
          frequencies: spectralPeaksResult.frequencies,
          magnitudes: spectralPeaksResult.magnitudes,
        });

        // console.log("VectorFloat properties:  ", this.spectralPeaksValues[0].frequencies);

        // Pitch Salience Setup
        const pitchSalienceWindowedSignal =
          essentia.Windowing(essentiaInputVector);
        const pitchSalienceSpectrum = essentia.Spectrum(
          pitchSalienceWindowedSignal.frame
        );
        const pitchSalienceResult = essentia.PitchSalience(
          pitchSalienceSpectrum.spectrum,
          512
        );
        this.pitchSalienceValues.push(pitchSalienceResult.pitchSalience);

        essentiaInputVector.delete();
      };

      this.averageInterval = setInterval(() => {
        if (this.centroidValues.length > 0) {
          const avgCentroid =
            this.centroidValues.reduce((acc, val) => acc + val, 0) /
            this.centroidValues.length;
          console.log('Average Spectral Centroid:', avgCentroid);
          this.centroidValues = [];

          // Compute the sums
          const sums = [];
          this.mfccValues.forEach((val) => {
            for (let i = 0; i < val.length; i++) {
              sums[i] = (sums[i] || 0) + val[i];
            }
          });

          // Compute the averages
          const avgMFCC = sums.map(
            (sum, idx) =>
              sum / this.mfccValues.filter((val) => idx < val.length).length
          );

          console.log('Average MFCCs:', avgMFCC);
          this.mfccValues = [];

          // Compute the sums
          const spectralContrastSums = [];
          this.spectralContrastValues.forEach((val) => {
            for (let i = 0; i < val.length; i++) {
              spectralContrastSums[i] = (spectralContrastSums[i] || 0) + val[i];
            }
          });

          // Compute the averages
          const avgSpectralContrast = spectralContrastSums.map((sum, idx) => {
            const denominator = this.spectralContrastValues.filter(
              (val) => idx < val.length
            ).length;
            return denominator ? sum / denominator : 0;
          });

          console.log('Average Spectral Contrast:', avgSpectralContrast);
          this.spectralContrastValues = [];

          const avgSpectralFlatness =
            this.spectralFlatnessValues.reduce((acc, val) => acc + val, 0) /
            this.spectralFlatnessValues.length;
          console.log('Average Spectral Flatness:', avgSpectralFlatness);
          this.spectralFlatnessValues = [];

          const frequenciesArray = [];
          const magnitudesArray = [];

          // Extract frequencies and magnitudes for each spectral peaks result
          this.spectralPeaksValues.forEach((value) => {
            const freqArray = [];
            const magArray = [];

            for (let i = 0; i < value.frequencies.size(); i++) {
              freqArray.push(value.frequencies.get(i));
            }

            for (let i = 0; i < value.magnitudes.size(); i++) {
              magArray.push(value.magnitudes.get(i));
            }

            frequenciesArray.push(freqArray);
            magnitudesArray.push(magArray);
          });

          // Calculate average for frequencies and magnitudes
          const totalFrequencies = frequenciesArray.reduce(
            (acc, val) => acc + val.reduce((a, v) => a + v, 0),
            0
          );
          const totalMagnitudes = magnitudesArray.reduce(
            (acc, val) => acc + val.reduce((a, v) => a + v, 0),
            0
          );

          const avgFrequencies =
            totalFrequencies /
            (this.spectralPeaksValues.length *
              (frequenciesArray[0] ? frequenciesArray[0].length : 0));
          const avgMagnitudes =
            totalMagnitudes /
            (this.spectralPeaksValues.length *
              (magnitudesArray[0] ? magnitudesArray[0].length : 0));

          console.log('Average Spectral Peaks Frequencies:', avgFrequencies);
          console.log('Average Spectral Peaks Magnitudes:', avgMagnitudes);

          const avgPitchSalience =
            this.pitchSalienceValues.reduce((acc, val) => acc + val, 0) /
            this.pitchSalienceValues.length;
          console.log('Average Pitch Salience:', avgPitchSalience);
          this.pitchSalienceValues = [];
        }
      }, 5000);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  audioContext;
  source;
  processor;

  handleStopCalibration = () => {
    if (this.source) {
      this.source.stop();
      this.source.disconnect();
    }
    if (this.processor) {
      this.processor.disconnect();
    }
  };

  activateWebcam = async (isCalibrationMode = false) => {
    try {
      if (!this.opencvIsReady.current) {
        console.log('activateWebcam: OpenCV is not ready yet.');
        return;
      }

      // Start the webcam
      this.enableCam();
      this.setState({ calibrationMode: isCalibrationMode });
    } catch (error) {
      console.error('Error in activateWebcam:', error);
    }
  };

  enableCam = async () => {
    console.log('in enableCam');

    try {
      if (!this.opencvIsReady.current) {
        console.log('enableCam: OpenCV is not ready yet.');
        return;
      }

      // Toggle webcam state
      this.setState((prevState) => ({
        webcamRunning: !prevState.webcamRunning,
      }));

      const constraints = {
        video: true,
      };

      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (this.videoRef.current) {
        this.videoRef.current.srcObject = stream;
        this.videoRef.current.play();
      }
      if (this.videoRef.current && this.canvasRef.current) {
        this.videoRef.current.onloadedmetadata = () => {
          this.canvasRef.current.style.width = `${this.videoRef.current.videoWidth}px`;
          this.canvasRef.current.style.height = `${this.videoRef.current.videoHeight}px`;
          this.canvasRef.current.width = this.videoRef.current.videoWidth;
          this.canvasRef.current.height = this.videoRef.current.videoHeight;
        };
      }
      if (this.videoRef.current) {
        console.log('calling showGuitarPrompt');
        this.videoRef.current.addEventListener(
          'loadeddata',
          this.showGuitarPrompt // This replaces predictWebcam
        );
      }

      console.log('State after enableCam:', this.state);
    } catch (error) {
      console.error('Error in enableCam:', error);
    }
  };

  showGuitarPrompt = () => {
    console.log('showGuitarPrompt..');
    this.setState({ showGuitarPrompt: true }, () => {
      console.log('showGuitarPrompt state: ', this.state.showGuitarPrompt);
    });
    if (this.videoRef.current) {
      this.videoRef.current.removeEventListener(
        'loadeddata',
        this.showGuitarPrompt
      );
    }
  };

  proceedWithProcessing = () => {
    console.log(
      'User confirmed guitar positioning. Proceeding with processing...'
    );
    this.processOpenCV();
  };

  processOpenCV = () => {
    try {
      console.log('Starting processOpenCV...');
      const video = this.videoRef.current;
      const canvas = this.canvasRef.current;
      const ctx = canvas.getContext('2d');

      // Draw the current video frame on canvas
      ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);

      // Convert the canvas data to OpenCV format
      const src = cv.imread(canvas);
      const dst = new cv.Mat();

      // Pre-process the image (grayscale & edge detection)
      cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
      // Contrast Enhancement
      let clahe = new cv.CLAHE(5, new cv.Size(16, 16));
      clahe.apply(dst, dst);

      // Morphological Operations
      let kernel = cv.getStructuringElement(cv.MORPH_RECT, new cv.Size(1, 7));
      cv.morphologyEx(dst, dst, cv.MORPH_GRADIENT, kernel);

      cv.Canny(dst, dst, 90, 300, 3, false); // You can play with these parameters
      // After cv.Canny
      const canvasDebug = this.debugCanvasRef.current;
      const ctxDebug = canvasDebug?.getContext('2d');
      if (canvasDebug instanceof HTMLCanvasElement && ctxDebug) {
        cv.imshow(canvasDebug, dst);
      } else {
        console.error("Canvas is not valid or context couldn't be fetched");
      }

      // Detect frets
      const lines = new cv.Mat();
      // threshold - Reduce detect more line, increase strict: current 150
      // min line length - increase to remove smaller noisy lines
      // max line gap - gap between segements to consider them as a line.
      cv.HoughLinesP(dst, lines, 1, Math.PI / 180, 150, 200, 50); // Params can be tuned

      if (lines.data32S.length < lines.rows * lines.cols) {
        console.error('Detected lines data is incomplete.');
        return; // Or handle in a way you deem fit.
      }

      // Filter for vertical lines
      let verticalLinesArray = [];
      for (let i = 0; i < lines.rows; i++) {
        const x1 = lines.data32S[i * lines.cols];
        const y1 = lines.data32S[i * lines.cols + 1];
        const x2 = lines.data32S[i * lines.cols + 2];
        const y2 = lines.data32S[i * lines.cols + 3];
        const angle = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
        if (Math.abs(angle) > 80 && Math.abs(angle) < 100) {
          verticalLinesArray.push(lines.row(i).data32S);
        }
      }

      let verticalLines = cv.matFromArray(
        verticalLinesArray.length,
        lines.cols,
        cv.CV_32S,
        [].concat(...verticalLinesArray)
      );

      console.log(`processOpenCV: Detected ${lines.rows} lines.`);

      if (this.state.calibrationMode) {
        const averageFretDistance = this.calibrateFretDistance(verticalLines);
        console.log(
          `processOpenCV: Calibrated average fret distance: ${averageFretDistance}`
        );
        this.setState({
          fretDistance: averageFretDistance,
          calibrationMode: false,
          isCalibrated: true,
        });
        if (
          this.videoRef.current &&
          this.videoRef.current.srcObject instanceof MediaStream
        ) {
          const tracks = this.videoRef.current.srcObject.getTracks();
          tracks.forEach((track) => track.stop());
        }
        alert('Fret Calibration Successful!');
      } else {
        // Analyze gaps
        const handPositionRange = this.analyzeGaps(verticalLines);
        if (handPositionRange) {
          console.log(
            `processOpenCV: Determined hand position range: ${JSON.stringify(
              handPositionRange
            )}`
          );
          this.setState({ handPositionRange });
        }
      }
      // Cleanup
      src.delete();
      dst.delete();
      lines.delete();
    } catch (error) {
      console.error('Error in processOpenCV:', error);
    }
  };

  analyzeGaps = (lines) => {
    const threshold = this.state.fretDistance * 1.5; // Assuming a 50% increase is significant
    console.log(`analyzeGaps: Gap detection threshold: ${threshold}`);

    let possibleStart = null;

    for (let i = 0; i < lines.rows - 1; i++) {
      const start1 = lines.data32S[i * lines.cols];
      const end1 = lines.data32S[i * lines.cols + 2];

      const start2 = lines.data32S[(i + 1) * lines.cols];
      const end2 = lines.data32S[(i + 1) * lines.cols + 2];

      const avgY1 = (start1.y + end1.y) / 2;
      const avgY2 = (start2.y + end2.y) / 2;

      const gap = avgY2 - avgY1;

      if (gap > threshold && possibleStart === null) {
        // We start detecting a possible hand position here
        possibleStart = i + 1;
        console.log(
          `analyzeGaps: Possible hand position started at line: ${possibleStart}`
        );
      } else if (gap <= this.state.fretDistance && possibleStart !== null) {
        // End of possible hand position, so we return the range
        console.log(
          `analyzeGaps: Possible hand position detected from line ${possibleStart} to ${
            i + 1
          }`
        );
        return { start: possibleStart, end: i + 1 };
      }
    }

    // If we reach here without finding the end, then it's possible the hand covers till the last detected fret
    if (possibleStart !== null) {
      console.log(
        `analyzeGaps: Hand covers till the last detected fret. Start line: ${possibleStart}`
      );
      return { start: possibleStart, end: lines.rows };
    }

    return null; // No significant blockage detected
  };

  calibrateFretDistance = (lines) => {
    let totalDistance = 0;
    for (let i = 0; i < lines.rows - 1; i++) {
      const start1_x = lines.data32S[i * lines.cols];
      const start1_y = lines.data32S[i * lines.cols + 1];
      const end1_x = lines.data32S[i * lines.cols + 2];
      const end1_y = lines.data32S[i * lines.cols + 3];

      const start2_x = lines.data32S[(i + 1) * lines.cols];
      const start2_y = lines.data32S[(i + 1) * lines.cols + 1];
      const end2_x = lines.data32S[(i + 1) * lines.cols + 2];
      const end2_y = lines.data32S[(i + 1) * lines.cols + 3];

      if (
        typeof start1_y === 'undefined' ||
        typeof end1_y === 'undefined' ||
        typeof start2_y === 'undefined' ||
        typeof end2_y === 'undefined'
      ) {
        console.error(
          `Error in line extraction for line ${i} or ${
            i + 1
          }. Check the data structure.`
        );
        console.log(
          `Raw data for lines ${i} and ${i + 1}:`,
          lines.data32S.slice(i * lines.cols, (i + 2) * lines.cols)
        );
        continue; // Skip to next iteration
      }

      const avgY1 = (start1_y + end1_y) / 2;
      const avgY2 = (start2_y + end2_y) / 2;

      const gap = avgY2 - avgY1;
      console.log(`Detected gap between line ${i} and line ${i + 1}: ${gap}`);
      totalDistance += gap;
    }
    const average = totalDistance / (lines.rows - 1);
    console.log(`Overall average fret distance: ${average}`);
    return average;
  };

  /// !!! Outdated code below !!!! ///    /// !!! Outdated code below !!!! ///    /// !!! Outdated code below !!!! ///
  /// !!! Outdated code below !!!! ///    /// !!! Outdated code below !!!! ///    /// !!! Outdated code below !!!! ///
  /// !!! Outdated code below !!!! ///    /// !!! Outdated code below !!!! ///    /// !!! Outdated code below !!!! ///

  lastVideoTime = -1;
  // results = undefined;

  // predictWebcam = async () => {
  //   console.log('inpredictcam');
  //   if (!this.opencvIsReady.current) {
  //     console.log('predictWebcam: OpenCV is not ready yet.');
  //     return;
  //   }

  //   const { DrawingUtils } = await import('./visionModule.js');
  //   const drawingUtils = new DrawingUtils(this.canvasCtx);

  //   if (this.state.runningMode === 'IMAGE') {
  //     await this.state.handLandmarker.setOptions({ runningMode: 'VIDEO' });
  //     this.setState({ runningMode: 'VIDEO' });
  //   }

  //   let startTimeMs = performance.now();
  //   if (this.state.lastVideoTime !== this.videoRef.current.currentTime) {
  //     const currentVideoTime = this.videoRef.current.currentTime;
  //     const results = await this.state.handLandmarker.detectForVideo(
  //       this.videoRef.current,
  //       startTimeMs
  //     );
  //     this.setState({
  //       lastVideoTime: currentVideoTime,
  //       results,
  //     });
  //   }

  //   this.canvasCtx.save();
  //   this.canvasCtx.clearRect(
  //     0,
  //     0,
  //     this.canvasRef.current.width,
  //     this.canvasRef.current.height
  //   );

  //   if (this.state.results && this.state.results.landmarks) {
  //     // Directly convert canvas to OpenCV Mat
  //     const imageData = this.canvasCtx.getImageData(
  //       0,
  //       0,
  //       this.canvasRef.current.width,
  //       this.canvasRef.current.height
  //     );
  //     const canvasSrc = cv.matFromImageData(imageData);

  //     // Perform OpenCV operations once for the frame
  //     const edges = this.preprocessImage(canvasSrc);
  //     const stringsYPositions = this.detectStrings(edges);
  //     const fretsXPositions = this.detectFrets(edges);

  //     for (const landmarks of this.state.results.landmarks) {
  //       const detectedString = this.determineStringFromLandmarks(
  //         landmarks,
  //         stringsYPositions
  //       );
  //       const detectedFret = this.determineFretFromLandmarks(
  //         landmarks,
  //         fretsXPositions
  //       );

  //       this.setState({
  //         detectedString: String(detectedString), // convert to string if needed
  //         detectedFret: Number(detectedFret),
  //       });

  //       console.log('Detected String:', detectedString);
  //       console.log('Detected Fret:', detectedFret);

  //       drawingUtils.drawConnectors(landmarks, this.state.handConnections, {
  //         color: '#00FF00',
  //         lineWidth: 5,
  //       });
  //       drawingUtils.drawLandmarks(landmarks, {
  //         color: '#FF0000',
  //         lineWidth: 2,
  //       });
  //     }
  //   }

  //   this.canvasCtx.restore();

  //   if (this.state.webcamRunning === true) {
  //     window.requestAnimationFrame(this.predictWebcam);
  //   }
  // };

  preprocessImage(image) {
    // Convert to grayscale
    let gray;
    if (image.channels() === 3) {
      gray = image.cvtColor(cv.COLOR_BGR2GRAY);
    } else if (image.channels() === 4) {
      gray = image.cvtColor(cv.COLOR_BGRA2GRAY);
    } else {
      gray = image; // assuming it's already grayscale
    }

    // Blur to reduce noise using GaussianBlur
    let blurred = gray.GaussianBlur(new cv.Size(5, 5), 0, 0);

    // Compute the gradient in x (dx) and y (dy) directions using the sobel method
    let dx = blurred.sobel(cv.CV_64F, 1, 0, 3);
    let dy = blurred.sobel(cv.CV_64F, 0, 1, 3);

    // Edge detection using Canny
    let edges = cv.canny(dx, dy, 50, 150);

    console.log('Grayscale image dimensions:', gray.rows, 'x', gray.cols);
    console.log('Edge-detected image dimensions:', edges.rows, 'x', edges.cols);

    // Clean up resources. Make sure to free up the memory to avoid leaks.
    dx.delete();
    dy.delete();
    gray.delete();
    blurred.delete();

    return edges;
  }

  detectStrings(edgesImage) {
    const STRING_VERTICAL_THRESHOLD = 22;
    const VERTICAL_ANGLE_BUFFER = Math.PI / 12; // +/- 15 degrees
    const VERTICAL_ANGLE = Math.PI / 2; // 90 degrees

    let detectedLines = edgesImage.houghLines(1, Math.PI / 180, 20);
    let stringsYPositions = [];

    for (let i = 0; i < detectedLines.length; i++) {
      let rho = detectedLines[i].at(0);
      let theta = detectedLines[i].at(1);

      if (Math.abs(theta - VERTICAL_ANGLE) > VERTICAL_ANGLE_BUFFER) {
        continue; // Skip non-vertical lines
      }

      // Convert rho, theta to cartesian coordinates
      let a = Math.cos(theta);
      let b = Math.sin(theta);
      let x0 = a * rho;
      let y0 = b * rho;
      let startPoint = new cv.Point(x0 - 1000 * b, y0 + 1000 * a);
      let endPoint = new cv.Point(x0 + 1000 * b, y0 - 1000 * a);

      console.log(
        `Line ${i + 1}: Start (${startPoint.x}, ${startPoint.y}), End (${
          endPoint.x
        }, ${endPoint.y})`
      );

      if (Math.abs(startPoint.y - endPoint.y) < STRING_VERTICAL_THRESHOLD) {
        stringsYPositions.push((startPoint.y + endPoint.y) / 2); // Get the average Y-position
      }
    }

    console.log('Detected string positions (by pixel):', stringsYPositions);

    return stringsYPositions;
  }

  detectFrets(edgesImage) {
    const FRET_HORIZONTAL_THRESHOLD = 22;
    const HORIZONTAL_ANGLE_BUFFER = Math.PI / 12; // +/- 15 degrees

    let detectedLines = edgesImage.houghLines(1, Math.PI / 180, 20);
    let fretsXPositions = [];

    for (let i = 0; i < detectedLines.length; i++) {
      let rho = detectedLines[i].at(0);
      let theta = detectedLines[i].at(1);

      if (
        theta > HORIZONTAL_ANGLE_BUFFER &&
        theta < Math.PI - HORIZONTAL_ANGLE_BUFFER
      ) {
        continue; // Skip non-horizontal lines
      }

      // Convert rho, theta to cartesian coordinates
      let a = Math.cos(theta);
      let b = Math.sin(theta);
      let x0 = a * rho;
      let y0 = b * rho;
      let startPoint = new (cv.Point as any)(x0 - 1000 * b, y0 + 1000 * a);
      let endPoint = new (cv.Point as any)(x0 + 1000 * b, y0 - 1000 * a);

      console.log(
        `Line ${i + 1}: Start (${startPoint.x}, ${startPoint.y}), End (${
          endPoint.x
        }, ${endPoint.y})`
      );

      if (Math.abs(startPoint.x - endPoint.x) < FRET_HORIZONTAL_THRESHOLD) {
        fretsXPositions.push((startPoint.x + endPoint.x) / 2); // Get the average X-position
      }
    }

    console.log('Detected frets positions (by pixel):', fretsXPositions);

    return fretsXPositions;
  }

  determineStringFromLandmarks = async (fingerPositionLandmarks, yPosition) => {
    const STRING_THRESHOLD = 0.5;
    const stringsYPositions = [
      /*...*/
    ];
    const fingertips = [
      fingerPositionLandmarks[8],
      fingerPositionLandmarks[12],
      fingerPositionLandmarks[16],
      fingerPositionLandmarks[20],
    ];

    for (const fingertip of fingertips) {
      for (let i = 0; i < stringsYPositions.length; i++) {
        if (Math.abs(fingertip.y - stringsYPositions[i]) < STRING_THRESHOLD) {
          return i; // Return the index of the string that's being pressed.
        }
      }
    }

    return -1; // If no string is detected.
  };

  determineFretFromLandmarks = async (fingerPositionLandmarks, xPosition) => {
    // Assuming we have X-positions boundaries for frets stored in an array of tuples.
    const fretsXBoundaries = [
      /*...*/
    ]; // e.g., [(startX1, endX1), (startX2, endX2), ...]
    const fingertip = fingerPositionLandmarks[8]; // You can choose any fingertip landmark, or even average them.

    for (let i = 0; i < fretsXBoundaries.length; i++) {
      const [startX, endX] = fretsXBoundaries[i];
      if (fingertip.x >= startX && fingertip.x <= endX) {
        return i; // Return the index of the fret that's being pressed.
      }
    }

    return -1; // If no fret is detected.
  };

  /// !!! Outdated code above !!!! ///     /// !!! Outdated code above !!!! ///     /// !!! Outdated code above !!!! ///
  /// !!! Outdated code above !!!! ///     /// !!! Outdated code above !!!! ///     /// !!! Outdated code above !!!! ///
  /// !!! Outdated code above !!!! ///     /// !!! Outdated code above !!!! ///     /// !!! Outdated code above !!!! ///

  render(props) {
    console.log('AudioFileKeyDetection - render');
    const { files, frets, startFret, order, incrementFactor } = this.state;
    console.log(
      'Parent Component render method - this.state.sectionBoundaries',
      this.state.sectionBoundaries
    );
    return (
      <>
        <main class="audio-file-key-detection-page">
          <header>
            <h1>Audio File Key Detection</h1>
          </header>
          <div style={{ paddingTop: '1rem' }}>
            <div style={{ marginBottom: '2rem' }}>
              <div class="youtube-link-container">
                <input
                  class="youtube-link-input"
                  type="text"
                  placeholder="Paste YouTube Link Here"
                />
                <button onClick={this.handleYouTubeLink}>
                  Convert & Process
                </button>
              </div>
              <label for="load-a-track" style={{ paddingRight: '1rem' }}>
                Load a track:
              </label>
              <input
                ref={this.ref}
                id="load-a-track"
                type="file"
                accept="audio/*"
                multiple={true}
                onChange={async (event) => await this.handleFileInput(event)}
              />
              <label for="frets">End Fret:</label>
              <input
                id="frets"
                type="number"
                min="1"
                max="24" // Set the maximum number of frets you want to support
                value={frets}
                onChange={this.handleFretsChange}
              />
              <br />
              <label for="start-fret">Start Fret:</label>
              <input
                id="start-fret"
                type="number"
                min="0"
                max="24" // Set the maximum number of frets you want to support
                value={startFret}
                onChange={this.handleStartFretChange}
              />
              <br />
              <label for="increment-factor">Increment Factor:</label>
              <input
                id="increment-factor"
                type="number"
                min="1"
                max="24"
                value={incrementFactor}
                onChange={this.handleIncrementFactorChange}
              />
              <br />
              <label for="order">Order:</label>
              <select
                id="order"
                value={order}
                onChange={this.handleOrderChange}
              >
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
                <option value="random">Random</option>
              </select>
              <label for="calibration">Calibration:</label>
              <button
                id="start-calibration"
                onClick={this.handleStartCalibration}
              >
                Start
              </button>
              <button
                id="stop-calibration"
                onClick={this.handleStopCalibration}
              >
                Stop
              </button>
              <button
                id="activate-webcam"
                onClick={() => this.activateWebcam()}
              >
                Activate Webcam
              </button>
              <button
                id="calibrate-fret-distance"
                onClick={() => this.activateWebcam(true)}
              >
                Calibrate Guitar
              </button>
              <div className="webcam-container">
                <video
                  ref={this.videoRef}
                  width="640"
                  height="480"
                  autoPlay
                  muted
                  playsInline
                />
                <canvas ref={this.canvasRef} />
              </div>
              <canvas id="tempCanvas" style={{ display: 'none' }}></canvas>
              <canvas
                ref={this.debugCanvasRef}
                className="debug-canvas"
                width="640"
                height="480"
              ></canvas>
              {this.state.showGuitarPrompt ? (
                <div className="overlay">
                  <div className="modal">
                    <p>
                      Please position your guitar correctly within the frame.
                    </p>
                    <button onClick={this.proceedWithProcessing}>
                      Confirm & Proceed
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </main>
        {files.map((fileItem) => (
          <AudioFileItem
            key={fileItem.id}
            fileItem={fileItem}
            frets={this.state.frets} // Pass the user-defined frets value to the AudioFileItem component
            startFret={this.state.startFret} // Pass the user-defined startFret value to the AudioFileItem component
            order={fileItem.order} // Pass the user-defined order value to the AudioFileItem component
            incrementFactor={fileItem.incrementFactor}
            normalizedResult={fileItem.normalizedResult} // Pass the normalizedResult here
            sectionBoundaries={this.state.sectionBoundaries}
            onUpdateSectionBoundaries={this.updateSectionBoundaries}
            // getCurrentTimestamp={this.getCurrentTimestamp} // Pass the prop here
            updateDigest={this.updateDigest}
            updateResult={this.updateResult}
            // audioElement={this.audioElement} // Pass the audioElement to the child component
            isReadyToPlay={this.state.isReadyToPlay}
            onFretUpdate={this.handleFretUpdate}
            handleNoteDetection={this.debouncedHandleNoteDetection} // Include handleNoteDetection in the props passed to the child component
            detectedNote={this.state.detectedNote} // Pass the detected note to the child component
          />
        ))}
      </>
    );
  }
}

export default AudioFileKeyDetection;
