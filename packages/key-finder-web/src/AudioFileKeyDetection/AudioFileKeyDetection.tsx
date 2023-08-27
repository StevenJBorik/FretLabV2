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
}

class AudioFileKeyDetection extends Component<Props, State> {
  ref = createRef<HTMLInputElement>();
  childComponentRef: RefObject<AudioFileItem> = createRef();
  meydaAnalyzer: any;

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
  };

  audioElement: HTMLAudioElement | null = null;

  componentDidMount() {
    document.title = 'keyfinder | Key Finder for Audio Files';
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        'content',
        'A web application to find the musical key (root note) of an audio file. Song will be analyzed right in your browser. Select the audio file from your computer to find the root note.'
      );
    this.startListeningForNotes();
  }

  componentWillUnmount() {
    // Clean up event listener when the component is unmounted
    // Assuming you have a function called `stopListeningForNotes` to stop listening for notes
    // UNCOMMENT POST TESTING
    // this.stopListeningForNotes();
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
      }); // Set the detectedNote and detectedFret in the state
    } else {
      this.setState({ detectedNote: '', detectedFret: null }); // Clear the detectedNote and detectedFret in the state
    }
    // console.log("this.state.detectedNote: ", this.state.detectedNote);
    this.updateFretboardHighlights(
      this.state.detectedNote,
      this.state.detectedFret
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
  updateFretboardHighlights = (detectedNote, detectedFret) => {
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
          if (data.fret === detectedFret) {
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
      { fret: 0, string: 'A', frequency: 109.29731839890319 },
      { fret: 5, string: 'Low E', frequency: 108.82289874232004 },
    ],
    A3: [
      { fret: 2, string: 'G', frequency: 218.41505353783103 },
      { fret: 7, string: 'D', frequency: 219.36331125231712 },
      { fret: 12, string: 'A', frequency: 218.08466313903585 },
      { fret: 17, string: 'Low E', frequency: 216.15946143420035 },
    ],
    A4: [
      { fret: 5, string: 'High E', frequency: 442.12159464149624 },
      { fret: 10, string: 'B', frequency: 440.19495382570665 },
      { fret: 14, string: 'G', frequency: 439.55032697726375 },
      { fret: 19, string: 'D', frequency: 438.72852520163525 },
    ],
    B2: [
      { fret: 2, string: 'A', frequency: 122.34523180502036 },
      { fret: 7, string: 'Low E', frequency: 121.77339140840631 },
    ],
    B3: [
      { fret: 0, string: 'B', frequency: 245.61046735554012 },
      { fret: 4, string: 'G', frequency: 246.41041179971248 },
      { fret: 9, string: 'D', frequency: 246.83638481464712 },
      { fret: 14, string: 'A', frequency: 245.58414786603186 },
      { fret: 19, string: 'Low E', frequency: 243.79970408499165 },
    ],
    B4: [
      { fret: 7, string: 'High E', frequency: 493.63054537037766 },
      { fret: 12, string: 'B', frequency: 491.74873932396065 },
      { fret: 16, string: 'G', frequency: 492.50921835681856 },
      { fret: 21, string: 'D', frequency: 493.05586222364246 },
    ],
    C3: [
      { fret: 3, string: 'A', frequency: 131.1568087060985 },
      { fret: 8, string: 'Low E', frequency: 129.69916938799216 },
    ],
    C4: [
      { fret: 1, string: 'B', frequency: 262.86311382782856 },
      { fret: 5, string: 'G', frequency: 261.35258994427664 },
      { fret: 10, string: 'D', frequency: 260.826013798937 },
      { fret: 17, string: 'G', frequency: 258.4409214844324 },
      { fret: 20, string: 'Low E', frequency: 258.0232899684571 },
    ],
    C5: [
      { fret: 8, string: 'High E', frequency: 522.3543998301245 },
      { fret: 13, string: 'B', frequency: 520.5119732955417 },
      { fret: 20, string: 'High E', frequency: 519.8088931132332 },
    ],
    D3: [
      { fret: 0, string: 'D', frequency: 144.7792227760196 },
      { fret: 5, string: 'A', frequency: 144.28169007305294 },
      { fret: 10, string: 'Low E', frequency: 145.37975484076748 },
    ],
    D4: [
      { fret: 3, string: 'B', frequency: 293.0052887040495 },
      { fret: 7, string: 'G', frequency: 290.7969580923531 },
      { fret: 12, string: 'D', frequency: 290.3912693154672 },
      { fret: 17, string: 'A', frequency: 288.1441778155962 },
      { fret: 22, string: 'Low E', frequency: 291.216105483294 },
    ],
    D5: [
      { fret: 10, string: 'High E', frequency: 584.9129352573431 },
      { fret: 15, string: 'B', frequency: 582.3735269854725 },
      { fret: 19, string: 'G', frequency: 585.394374111953 },
    ],
    E2: [{ fret: 0, string: 'Low E', frequency: 81.16295716073503 }],
    E3: [
      { fret: 2, string: 'D', frequency: 164.10743500507132 },
      { fret: 7, string: 'A', frequency: 163.26698777551732 },
      { fret: 12, string: 'Low E', frequency: 162.7728749237736 },
    ],
    E4: [
      { fret: 0, string: 'High E', frequency: 329.1075705721399 },
      { fret: 9, string: 'G', frequency: 326.0570366891444 },
      { fret: 14, string: 'D', frequency: 325.88298750333047 },
      { fret: 19, string: 'A', frequency: 325.7414622470455 },
    ],
    E5: [
      { fret: 12, string: 'High E', frequency: 657.2902880621905 },
      { fret: 17, string: 'B', frequency: 656.5691160160274 },
    ],
    F2: [{ fret: 1, string: 'Low E', frequency: 85.81185146938174 }],
    F3: [
      { fret: 3, string: 'D', frequency: 172.97546524964122 },
      { fret: 8, string: 'A', frequency: 172.30021532540152 },
      { fret: 13, string: 'Low E', frequency: 171.71110809613805 },
    ],
    F4: [
      { fret: 1, string: 'High E', frequency: 348.6982451692927 },
      { fret: 6, string: 'B', frequency: 346.6687197772567 },
      { fret: 10, string: 'G', frequency: 347.0596704692706 },
      { fret: 15, string: 'D', frequency: 346.4961248291254 },
      { fret: 20, string: 'A', frequency: 345.8586463505898 },
    ],
    F5: [
      { fret: 13, string: 'High E', frequency: 696.5723178749519 },
      { fret: 18, string: 'B', frequency: 696.9863924686366 },
      { fret: 22, string: 'G', frequency: 698.0024119952526 },
    ],
    G2: [{ fret: 3, string: 'High E', frequency: 97.49112902410535 }],
    G3: [
      { fret: 0, string: 'G', frequency: 195.9196739679139 },
      { fret: 5, string: 'D', frequency: 194.5421507380666 },
      { fret: 10, string: 'A', frequency: 192.35515510071093 },
      { fret: 15, string: 'Low E', frequency: 193.17538893150746 },
    ],
    G4: [
      { fret: 3, string: 'High E', frequency: 391.7012819950789 },
      { fret: 8, string: 'B', frequency: 389.19086552647906 },
      { fret: 12, string: 'G', frequency: 388.8940670802998 },
      { fret: 17, string: 'D', frequency: 390.73125201393236 },
      { fret: 23, string: 'A', frequency: 388.1723952766766 },
    ],
    'G#2': [{ fret: 4, string: 'Low E', frequency: 102.27311570671681 }],
    'G#3': [
      { fret: 1, string: 'G', frequency: 206.63716306554286 },
      { fret: 6, string: 'D', frequency: 205.65056419297755 },
      { fret: 11, string: 'A', frequency: 204.75997999500223 },
      { fret: 16, string: 'Low E', frequency: 204.44316852359728 },
    ],
    'G#4': [
      { fret: 4, string: 'High E', frequency: 414.69849227363454 },
      { fret: 9, string: 'B', frequency: 412.16907273592756 },
      { fret: 13, string: 'G', frequency: 413.1133475481831 },
      { fret: 18, string: 'D', frequency: 409.8044774910727 },
    ],
    'G#5': [
      { fret: 16, string: 'High E', frequency: 829.486425128739 },
      { fret: 21, string: 'B', frequency: 827.9916733204687 },
    ],
    'A#2': [
      { fret: 1, string: 'A', frequency: 115.76045116875001 },
      { fret: 6, string: 'Low E', frequency: 115.17034349208221 },
    ],
    'A#3': [
      { fret: 3, string: 'G', frequency: 232.6725123809698 },
      { fret: 8, string: 'D', frequency: 232.22834420729404 },
      { fret: 13, string: 'A', frequency: 230.85631327082476 },
      { fret: 17, string: 'Low E', frequency: 231.24378127267332 },
    ],
    'A#4': [
      { fret: 6, string: 'High E', frequency: 466.9370136408506 },
      { fret: 15, string: 'G', frequency: 463.57510556396056 },
      { fret: 20, string: 'D', frequency: 465.97676463464103 },
    ],
    'A#5': [
      // Check this one?? Frequencies don't look right
      { fret: 11, string: 'B', frequency: 463.3555869198884 },
      { fret: 18, string: 'G', frequency: 935.0524747725533 },
      // Fret 23 B String (Need 24 String Guitar)
    ],
    'C#3': [
      { fret: 4, string: 'A', frequency: 137.3060035300108 },
      { fret: 9, string: 'Low E', frequency: 137.57611688735184 },
    ],
    'C#4': [
      { fret: 2, string: 'B', frequency: 276.4548279827278 },
      { fret: 6, string: 'G', frequency: 276.3431476551369 },
      { fret: 11, string: 'D', frequency: 277.0804571796065 },
      { fret: 16, string: 'A', frequency: 275.51491141296145 },
      { fret: 21, string: 'Low E', frequency: 274.1799027405144 },
    ],
    'C#5': [
      { fret: 9, string: 'High E', frequency: 554.3378899912931 },
      { fret: 14, string: 'B', frequency: 552.3843511551877 },
      { fret: 18, string: 'G', frequency: 550.6292136626357 },
    ],
    'D#3': [
      { fret: 1, string: 'D', frequency: 155.00598143427626 },
      { fret: 6, string: 'A', frequency: 154.6937274018171 },
      { fret: 11, string: 'Low E', frequency: 154.10326236136592 },
    ],
    'D#4': [
      { fret: 4, string: 'B', frequency: 310.6030421607162 },
      { fret: 8, string: 'G', frequency: 309.71054249383354 },
      { fret: 13, string: 'D', frequency: 311.21308962663016 },
      { fret: 18, string: 'A', frequency: 307.9303528790945 },
    ],
    'D#5': [
      { fret: 11, string: 'High E', frequency: 623.5858489677444 },
      { fret: 16, string: 'B', frequency: 620.1057776434794 },
      { fret: 20, string: 'G', frequency: 616.7783042458899 },
    ],
    'F#2': [{ fret: 2, string: 'Low E', frequency: 92.21923914996015 }],
    'F#3': [
      { fret: 4, string: 'D', frequency: 184.15549965848183 },
      { fret: 9, string: 'A', frequency: 183.37831402967487 },
      { fret: 14, string: 'Low E', frequency: 182.96804710568318 },
    ],
    'F#4': [
      { fret: 2, string: 'High E', frequency: 370.85724983135117 },
      { fret: 7, string: 'B', frequency: 368.0932885008454 },
      { fret: 11, string: 'G', frequency: 367.50167011768934 },
      { fret: 16, string: 'D', frequency: 369.7987106702406 },
      { fret: 21, string: 'A', frequency: 365.01149744523906 },
    ],
    'F#5': [
      { fret: 14, string: 'Low E', frequency: 741.3249897841494 },
      { fret: 19, string: 'B', frequency: 737.4017382139465 },
      //   { fret: 23, string: 'G', frequency: 182.96804710568318 } (need 24)
    ],
  };

  referenceFrequencies = {
    E2: 82.41,
    A2: 110.0,
    D3: 146.83,
    G3: 196.0,
    B3: 246.94,
    E4: 329.63,
  };

  getNoteFromFrequency = (
    frequency: number
  ): { note: string; fret: number } => {
    const freq =
      typeof frequency === 'string' ? parseFloat(frequency) : frequency;
    let closestNote = '';
    let closestFret = 0; // Initialize with a default value
    let closestDifference = Number.POSITIVE_INFINITY;

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

    return { note: closestNote, fret: closestFret };
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

        // MFCC Setup
        function vectorFloatToArray(vector) {
          let arr = [];
          for (let i = 0; i < vector.size(); i++) {
            arr.push(vector.get(i));
          }
          return arr;
        }

        const mfccResult = essentia.MFCC(essentiaInputVector);
        const bandsArray = vectorFloatToArray(mfccResult.bands);
        this.mfccValues.push(bandsArray);

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
        const contrastArray = vectorFloatToArray(
          spectralContrastResult.contrast
        );
        this.spectralContrastValues.push(contrastArray);

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
          const avgSpectralContrast = sums.map(
            (sum, idx) =>
              sum /
              this.spectralContrastValues.filter((val) => idx < val.length)
                .length
          );

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
      }, 1000);
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
