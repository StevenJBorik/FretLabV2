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
// import cv, { Mat, Rect } from "opencv-ts";
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

interface Props {}

interface State {
  files: Array<FileItem>;
  sectionBoundaries: string[][];
  frets: number; // User input for frets
  startFret: number; // User input for startFret
  order: 'ascending' | 'descending' | 'random'; // Update the type to match the FileItem interface
  isReadyToPlay: boolean;
  incrementFactor: number;
  detectedNote: string;
  detectedFret: number;
  detectedString: string;
  handLandmarker?: any; // Your hand landmarking model
  handConnections: any;
  runningMode: 'IMAGE' | 'VIDEO'; // Only two modes according to your code
  webcamRunning: boolean;
  lastVideoTime: number;
  results?: any; // The results from your detection
  isCVInitialized: boolean;
}

class AudioFileKeyDetection extends Component<Props, State> {
  ref = createRef<HTMLInputElement>();
  childComponentRef: RefObject<AudioFileItem> = createRef();
  meydaAnalyzer: any;
  videoRef = createRef<HTMLVideoElement>();
  canvasRef = createRef<HTMLCanvasElement>();
  canvasCtx: CanvasRenderingContext2D | null = null;
  audioElement: HTMLAudioElement | null = null;

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
    detectedString: '',
    handLandmarker: null,
    handConnections: null,
    runningMode: 'IMAGE',
    webcamRunning: false,
    lastVideoTime: -1,
    results: null,
    isCVInitialized: false,
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
    this.startListeningForNotes();
    // CV Feature
    // Initiliaze MediaPipe Hand Detection Function - identify positions of fingertips.
    // Initialize OpenCV Fret and String Detection Function
    // Pass detected note & possible string/fret positions from getFrequency.
    // Map positions of fingertips obtained from MediaPipe and OpenCV positional information
    // --> Once Above complete:
    // Logic to deduce the fret and string position based on fingertip position and the detected lines.
    // This will involve spatial comparisons to see which two detected lines the fingertip is between.
    // Additionally, recognize which string the fingertip is closest to.
  }

  componentWillUnmount() {
    // Clean up event listener when the component is unmounted
    // Assuming you have a function called `stopListeningForNotes` to stop listening for notes
    // !!!! UNCOMMENT POST TESTING !!!!
    // this.stopListeningForNotes();

    if (this.videoRef.current && this.videoRef.current.srcObject) {
      let stream = this.videoRef.current.srcObject as MediaStream;
      let tracks = stream.getTracks();

      tracks.forEach((track) => {
        track.stop();
      });

      this.videoRef.current.srcObject = null;
    }

    // Remove event listener
    this.videoRef.current.removeEventListener('loadeddata', this.predictWebcam);
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // Check if any changes in state or props that would trigger a re-render
    if (
      this.state.files !== nextState.files ||
      this.state.frets !== nextState.frets ||
      this.state.startFret !== nextState.startFret ||
      this.state.order !== nextState.order ||
      this.state.incrementFactor !== nextState.incrementFactor
      // Add more checks here if needed for other props or state properties
    ) {
      return true; // Allow re-render
    }
    return false; // Prevent re-render
  }

  // Inside AudioFileKeyDetection class
  getCurrentTimestamp = (): number => {
    const audioElement = this.audioElement;
    if (!audioElement) return 0;
    return audioElement.currentTime;
  };

  createAudioElement = (): HTMLAudioElement => {
    this.audioElement = new Audio(); // Assign the created audio element to the reference
    // Add event listeners, if needed
    return this.audioElement;
  };

  secondsToTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

  handleFileInput = (event: Event): void => {
    console.log('AudioFileKeyDetection - handleFileInput');
    const fileList = (event.target as HTMLInputElement).files;
    console.log('Selected files:', fileList);

    this.setState((prevState) => {
      let availableThreads = prevState.files.reduce((acc, cur) => {
        if (cur.canProcess && !cur.result) return acc - 1;
        return acc;
      }, numberOfThreads);

      const newFiles = prevState.files.slice(); // Create a shallow copy of the files array
      const promises = []; // Create an array to store promises for API calls
      const parsedSectionBoundaries: string[][] = []; // Declare and initialize parsedSectionBoundaries as a two-dimensional array

      for (let fileIdx = 0; fileIdx < fileList.length; fileIdx += 1) {
        let canProcess = false;
        if (availableThreads > 0) {
          canProcess = true;
          availableThreads -= 1;
        }

        const id = uuidv4();

        // Call the API for each selected file
        if (canProcess) {
          const formData = new FormData();
          formData.append('file', fileList[fileIdx]);

          const audioElement = this.createAudioElement(); // Create the audio element here

          const processFilePromise = axios
            .post('http://localhost:5000/api/process-audio', formData, {
              headers: {
                'Content-Type': 'audio/mpeg',
              },
            })
            .then((response) => {
              const rawSectionBoundaries = response.data.sections;
              console.log('Raw Section Boundaries:', rawSectionBoundaries);

              try {
                const parsedSectionBoundariesForFile = rawSectionBoundaries.map(
                  (boundary) => {
                    // Extract minute and second values from the boundary string
                    const [minutes, seconds] = boundary
                      .replace(/[\[\]'"]/g, '') // Remove brackets, single quotes, and double quotes
                      .split(':')
                      .map((value) => parseInt(value, 10));

                    // Construct the minute:second format
                    const formattedTime = `${minutes}:${seconds
                      .toString()
                      .padStart(2, '0')}`;

                    return formattedTime;
                  }
                );

                parsedSectionBoundaries.push(...parsedSectionBoundariesForFile); // Store the section boundaries for the current file

                console.log(
                  'Parsed Section Boundaries:',
                  parsedSectionBoundariesForFile
                );
              } catch (error) {
                console.error('Error parsing section boundaries:', error);
              }
            })
            .catch((error) => {
              console.error('Error processing file with MSAF:', error);
            });

          promises.push(processFilePromise);
          // audioElement.onloadedmetadata = () => {
          //   this.setState({ isReadyToPlay: true });
          // };
        }

        newFiles.push({
          id,
          canProcess,
          file: fileList[fileIdx],
          result: null,
          digest: null,
          keySignatureNumericValue: null,
          scale: null,
          frets: this.state.frets, // Set the correct frets value here
          startFret: this.state.startFret, // Set the correct startFret value here
          order: this.state.order, // Set the correct order value here
          incrementFactor: this.state.incrementFactor,
          normalizedResult: null,
          sectionBoundaries: [], // Initialize with an empty array for now
        });
      }

      // After all API calls are complete, set isReadyToPlay to true
      Promise.all(promises)
        .then(() => {
          this.setState({
            files: newFiles.map((file, index) => ({
              ...file,
              sectionBoundaries: parsedSectionBoundaries.slice(
                index * parsedSectionBoundaries.length,
                (index + 1) * parsedSectionBoundaries.length
              ), // Assign the correct section boundaries for each file
            })),
            isReadyToPlay: true,
          });
        })
        .catch((error) => {
          console.error('Error processing files with MSAF:', error);
        });

      this.ref.current.value = null;
      return { files: newFiles, sectionBoundaries: parsedSectionBoundaries };
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

  // method to update the startFret state
  updateStartFret = (startFret: number): void => {
    this.setState({ startFret });
  };

  // method to update the startFret state
  updateFretSpan = (frets: number): void => {
    this.setState({ frets });
  };

  // Method to handle note detection for lighting up notes on fretboard
  handleNoteDetection = (frequency: number | null) => {
    if (frequency !== null) {
      const noteInfo = this.getNoteFromFrequency(frequency);
      this.setState({
        detectedNote: noteInfo.note,
        detectedFret: noteInfo.fret,
        detectedString: noteInfo.string,
      }); // Set the detectedNote and detectedFret in the state
    } else {
      this.setState({ detectedNote: '', detectedFret: null }); // Clear the detectedNote and detectedFret in the state
    }
    //
    this.updateFretboardHighlights(
      this.state.detectedNote,
      this.state.detectedFret,
      this.state.detectedString
    );
  };

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

  updateFretboardHighlights = (detectedNote, detectedString, detectedFret) => {
    // Unhighlight all notes
    const allCircleElements = document.querySelectorAll('.fretboard circle');
    allCircleElements.forEach((circleElement) => {
      if (circleElement instanceof SVGElement) {
        circleElement.classList.remove('highlight');
        circleElement.style.fill = 'white'; // Reset fill color
      }
    });

    // Highlight the detected note's position
    if (detectedNote && detectedFret) {
      const noteData = this.noteMappings[detectedNote];
      if (noteData) {
        noteData.forEach((data) => {
          if (data.fret === detectedFret && data.string == detectedString) {
            const fretPosition = this.fretPositions[detectedFret];
            const matchingCircle = Array.from(allCircleElements).find(
              (circleElement) => {
                return (
                  parseFloat(circleElement.getAttribute('cx')) ===
                    fretPosition &&
                  circleElement.querySelector('title').textContent.trim() ===
                    detectedNote
                );
              }
            );

            if (matchingCircle instanceof SVGElement) {
              matchingCircle.classList.add('highlight');
              matchingCircle.style.fill = 'green';
            }
          }
        });
      }
    }
  };

  // updateFretboardHighlights = (detectedNote, detectedFret) => {
  //   // Unhighlight all notes
  //   const allCircleElements = document.querySelectorAll('.fretboard circle');
  //   allCircleElements.forEach((circleElement) => {
  //     if (circleElement instanceof SVGElement) {
  //       circleElement.classList.remove('highlight');
  //       circleElement.style.fill = 'white'; // Reset fill color
  //     }
  //   });

  //   // Highlight the detected note's position
  //   if (detectedNote && detectedFret) {
  //     const noteData = this.noteMappings[detectedNote];
  //     if (noteData) {
  //       noteData.forEach((data) => {
  //         if (data.fret === detectedFret) {
  //           const fretPosition = this.fretPositions[detectedFret];
  //           const matchingCircle = Array.from(allCircleElements).find((circleElement) => {
  //             return (
  //               parseFloat(circleElement.getAttribute('cx')) === fretPosition &&
  //               circleElement.querySelector('title').textContent.trim() === detectedNote
  //             );
  //           });

  //           if (matchingCircle instanceof SVGElement) {
  //             matchingCircle.classList.add('highlight');
  //             matchingCircle.style.fill = 'green';
  //           }
  //         }
  //       });
  //     }
  //   }
  // };

  startListeningForNotes() {
    // Set up the event listener or initialize the note detection system
    const audioContext = new AudioContext();
    const analyserNode = audioContext.createAnalyser();

    // Dynamically import the PitchDetector from the pitchyModule.js
    import('./pitchyModule.js')
      .then(({ PitchDetector }) => {
        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then((stream) => {
            audioContext.createMediaStreamSource(stream).connect(analyserNode);

            // Create the pitch detector
            const detector = PitchDetector.forFloat32Array(
              analyserNode.fftSize
            );

            const input = new Float32Array(detector.inputLength);

            const SILENCE_THRESHOLD = 0.25; // Adjust this threshold value as needed

            const processAudioData = () => {
              analyserNode.getFloatTimeDomainData(input);

              // Calculate the maximum amplitude of the input signal
              let maxAmplitude = -Infinity;
              for (let i = 0; i < input.length; i++) {
                if (input[i] > maxAmplitude) {
                  maxAmplitude = input[i];
                }
              }
              if (maxAmplitude > SILENCE_THRESHOLD) {
                // Detect pitch and clarity using pitchy
                const [pitch] = detector.findPitch(
                  input,
                  audioContext.sampleRate
                );

                if (typeof pitch === 'number') {
                  // console.log('pitch:  ', pitch);
                  this.handleNoteDetection(pitch);
                } else {
                  this.handleNoteDetection(null);
                }
              } else {
                this.handleNoteDetection(null);
              }

              requestAnimationFrame(processAudioData);
            };

            // Start processing the audio data
            processAudioData();
          })
          .catch((error) => {
            console.error('Error accessing microphone:', error);
          });
      })
      .catch((error) => {
        console.error('Error importing PitchDetector:', error);
      });
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

  // CV Feature
  // refactor touseOriginalNoteMappings to include fret/string values for instances where note has more than 1 position on fretboard.
  // potentially get rid of closest fret as not using multiple frequency mappings for same note.
  // pass updated note mapping state back to updateFretboard Highlight
  getNoteFromFrequency = (
    frequency: number
  ): { note: string; fret: number; string: string } => {
    const freq =
      typeof frequency === 'string' ? parseFloat(frequency) : frequency;
    let closestNote = '';
    let closestFret = 0; // Initialize with a default value
    let closestDifference = Number.POSITIVE_INFINITY;
    let closestString = 'implement me!';

    for (const note in this.noteMappings) {
      const noteData = this.noteMappings[note];
      noteData.forEach((data) => {
        const difference = Math.abs(freq - data.frequency);
        // console.log(`Note: ${note}, Data:`, data);
        // console.log('Difference:', difference);
        if (difference < closestDifference) {
          closestNote = note;
          closestFret = data.fret; // Set the closest fret value
          closestDifference = difference;
        }
      });
    }

    // console.log('Closest Note:', closestNote);
    // console.log('Closest Fret:', closestFret);

    return { note: closestNote, fret: closestFret, string: closestString };
  };

  // getNoteFromFrequency = (frequency: number): { note: string, fret: number } => {
  //   // Perform calibration
  //   const calibratedFrequencies = {};
  //   for (const note in this.referenceFrequencies) {
  //     const referenceFrequency = this.referenceFrequencies[note];
  //     calibratedFrequencies[note] = Math.abs(frequency - referenceFrequency);
  //   }

  //   // Find the closest note based on calibration
  //   let closestNote = '';
  //   let closestDifference = Number.POSITIVE_INFINITY;

  //   for (const note in calibratedFrequencies) {
  //     const difference = calibratedFrequencies[note];
  //     if (difference < closestDifference) {
  //       closestNote = note;
  //       closestDifference = difference;
  //     }
  //   }

  //   const closestFret = this.noteMappings[closestNote][0].fret; // Use the first fret from noteMappings

  //   return { note: closestNote, fret: closestFret };
  // };
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

  activateWebcam = async () => {
    if (!this.state.handLandmarker) {
      await this.createHandLandmarker();
    }

    // Start the webcam and make predictions
    this.enableCam();
  };

  convertedConnections = [];

  createHandLandmarker = async () => {
    // Dynamic import for the vision tasks.
    const { HandLandmarker, FilesetResolver } = await import(
      './visionModule.js'
    );

    // this.convertedConnections = HandLandmarker.HAND_CONNECTIONS.map(
    //   (connection) => [connection.start, connection.end] as [number, number]
    // );

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm'
    );
    const handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
        delegate: 'GPU',
      },
      runningMode: this.state.runningMode,
      numHands: 2,
    });
    this.setState({
      handLandmarker,
      handConnections: HandLandmarker.HAND_CONNECTIONS,
    });
    console.log('State after createHandLandmarker:', this.state);
  };

  // Refactor - make reactRefs
  // video = document.getElementById('webcam') as HTMLVideoElement;
  // canvasElement = document.getElementById('output_canvas') as HTMLCanvasElement;

  enableCam = async () => {
    if (!this.state.handLandmarker) {
      console.log('Wait! HandLandmarker not loaded yet.');
      return;
    }

    // This part checks if the webcam is running and toggles it.
    this.setState((prevState) => ({
      webcamRunning: !prevState.webcamRunning,
    }));

    const constraints = {
      video: true,
    };

    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (this.videoRef.current) {
        this.videoRef.current.srcObject = stream;
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
        this.videoRef.current.addEventListener(
          'loadeddata',
          this.predictWebcam
        );
      }
    } catch (error) {
      console.error('Error accessing the webcam:', error);
    }

    console.log('State after enableCam:', this.state); // <--- Here
  };

  lastVideoTime = -1;
  // results = undefined;

  predictWebcam = async () => {
    const { DrawingUtils } = await import('./visionModule.js');
    console.log('Imported DrawingUtils:', DrawingUtils);
    console.log('predictWebcam called');
    const drawingUtils = new DrawingUtils(this.canvasCtx);
    console.log('Instantiated drawingUtils:', drawingUtils);

    // Now let's start detecting the stream.
    if (this.state.runningMode === 'IMAGE') {
      await this.state.handLandmarker.setOptions({ runningMode: 'VIDEO' });
      this.setState({ runningMode: 'VIDEO' });
    }

    let startTimeMs = performance.now();
    if (this.state.lastVideoTime !== this.videoRef.current.currentTime) {
      const currentVideoTime = this.videoRef.current.currentTime;
      const results = await this.state.handLandmarker.detectForVideo(
        this.videoRef.current,
        startTimeMs
      );

      console.log('About to set state with results:', results);

      this.setState({
        lastVideoTime: currentVideoTime,
        results,
      });
    }

    console.log('State after setting:', this.state);

    this.canvasCtx.save();
    this.canvasCtx.clearRect(
      0,
      0,
      this.canvasRef.current.width,
      this.canvasRef.current.height
    );

    if (this.state.results && this.state.results.landmarks) {
      console.log(
        'State Results have landmarks:',
        this.state.results.landmarks
      );
      console.log('drawingUtils exists:', !!drawingUtils);
      console.log('drawConnectors function:', drawingUtils.drawConnectors);
      console.log('drawLandmarks function:', drawingUtils.drawLandmarks);

      // video?
      // let currentFrame = cv.imread('output_canvas');

      for (const landmarks of this.state.results.landmarks) {
        const fingerPositionLandmarks = this.state.results.landmarks[0];
        const detectedString = this.determineStringFromLandmarks(
          fingerPositionLandmarks
        );
        const detectedFret = this.determineFretFromLandmarks(
          fingerPositionLandmarks
        );

        console.log('Detected String:', detectedString);
        console.log('Detected Fret:', detectedFret);

        drawingUtils.drawConnectors(landmarks, this.state.handConnections, {
          color: '#00FF00',
          lineWidth: 5,
        });
        drawingUtils.drawLandmarks(landmarks, {
          color: '#FF0000',
          lineWidth: 2,
        });
      }
    }
    this.canvasCtx.restore();

    // Call this function again to keep predicting when the browser is ready.
    if (this.state.webcamRunning === true) {
      window.requestAnimationFrame(this.predictWebcam);
    }
    // console.log('State at the end of predictWebcam:', this.state);  // <--- Here
  };

  determineStringFromLandmarks = async (fingerPositionLandmarks) => {
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

  determineFretFromLandmarks = async (fingerPositionLandmarks) => {
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

  render(props) {
    console.log('AudioFileKeyDetection - render');
    const { files, frets, startFret, order, incrementFactor } = this.state;

    return (
      <>
        <main class="audio-file-key-detection-page">
          <header>
            <h1>Audio File Key Detection</h1>
          </header>
          <div style={{ paddingTop: '1rem' }}>
            <div style={{ marginBottom: '2rem' }}>
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
              <button id="activate-webcam" onClick={this.activateWebcam}>
                Activate Webcam
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
            </div>
          </div>
        </main>
        {files.map((fileItem) => (
          <AudioFileItem
            key={fileItem.id}
            fileItem={fileItem}
            frets={fileItem.frets} // Pass the user-defined frets value to the AudioFileItem component
            startFret={fileItem.startFret} // Pass the user-defined startFret value to the AudioFileItem component
            order={fileItem.order} // Pass the user-defined order value to the AudioFileItem component
            incrementFactor={fileItem.incrementFactor}
            normalizedResult={fileItem.normalizedResult} // Pass the normalizedResult here
            sectionBoundaries={this.state.sectionBoundaries}
            getCurrentTimestamp={this.getCurrentTimestamp} // Pass the prop here
            updateDigest={this.updateDigest}
            updateResult={this.updateResult}
            audioElement={this.audioElement} // Pass the audioElement to the child component
            isReadyToPlay={this.state.isReadyToPlay}
            updateStartFret={this.updateStartFret} // Pass the updateStartFret method as a prop
            updateFretSpan={this.updateFretSpan}
            handleNoteDetection={this.handleNoteDetection} // Include handleNoteDetection in the props passed to the child component
            detectedNote={this.state.detectedNote} // Pass the detected note to the child component
          />
        ))}
      </>
    );
  }
}

export default AudioFileKeyDetection;
