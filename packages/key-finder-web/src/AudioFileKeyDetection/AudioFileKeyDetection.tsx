import { h, Component, createRef, RefObject } from 'preact';
import axios from 'axios';
import { Link } from 'preact-router';
import AudioFileItem from './AudioFileItem';
import { v4 as uuidv4 } from 'uuid';
import { numberOfThreads } from '../defaults';
import { FileItem } from './AudioFileItem'; // Import the FileItem interface
import './AudioFileKeyDetection.css';

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
}

class AudioFileKeyDetection extends Component<Props, State> {
  ref = createRef<HTMLInputElement>();
  childComponentRef: RefObject<AudioFileItem> = createRef();

  state: State = {
    files: [],
    sectionBoundaries: [],
    frets: 12, // Default value for frets
    startFret: 0, // Default value for startFret
    order: 'ascending', // Default value for order
    isReadyToPlay: false,
    incrementFactor: 3,
    detectedNote: '',
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
    this.stopListeningForNotes();
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
      const note = this.getNoteFromFrequency(frequency);
      this.setState({ detectedNote: note }); // Set the detectedNote in the state
    } else {
      this.setState({ detectedNote: '' }); // Clear the detectedNote in the state
    }
    // console.log("this.state.detectedNote: ", this.state.detectedNote);
    this.updateFretboardHighlights(this.state.detectedNote);
  };

  updateFretboardHighlights = (detectedNote) => {
    // Create a map of note frequencies to UI elements
    const noteElementsMap = new Map();
    document
      .querySelectorAll('.fretboard circle title')
      .forEach((titleElement) => {
        const noteText = titleElement.textContent.trim().toLowerCase();
        noteElementsMap.set(noteText, titleElement.parentElement);
      });

    // Unhighlight all notes
    noteElementsMap.forEach((circleElement) => {
      if (circleElement instanceof SVGElement) {
        circleElement.classList.remove('highlight');
        circleElement.style.fill = 'white'; // Reset fill color
      }
    });

    // Highlight the detected note
    if (detectedNote) {
      const matchingElement = noteElementsMap.get(detectedNote.toLowerCase());
      if (matchingElement instanceof SVGElement) {
        matchingElement.style.fill = 'green'; // Set fill color to green
      }
    }
  };

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

            const SILENCE_THRESHOLD = 0.2; // Adjust this threshold value as needed

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
                  console.log('pitch:  ', pitch);
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

  getNoteFromFrequency = (frequency: number): string => {
    const noteFrequencies = {
      C0: 16.35,
      'C#0': 17.32,
      Db0: 17.32,
      D0: 18.35,
      'D#0': 19.45,
      Eb0: 19.45,
      E0: 20.6,
      F0: 21.83,
      'F#0': 23.12,
      Gb0: 23.12,
      G0: 24.5,
      'G#0': 25.96,
      Ab0: 25.96,
      A0: 27.5,
      'A#0': 29.14,
      Bb0: 29.14,
      B0: 30.87,
      C1: 32.7,
      'C#1': 34.65,
      Db1: 34.65,
      D1: 36.71,
      'D#1': 38.89,
      Eb1: 38.89,
      E1: 41.2,
      F1: 43.65,
      'F#1': 46.25,
      Gb1: 46.25,
      G1: 49.0,
      'G#1': 51.91,
      Ab1: 51.91,
      A1: 55.0,
      'A#1': 58.27,
      Bb1: 58.27,
      B1: 61.74,
      C2: 65.41,
      'C#2': 69.3,
      Db2: 69.3,
      D2: 73.42,
      'D#2': 77.78,
      Eb2: 77.78,
      E2: 82.41,
      F2: 87.31,
      'F#2': 92.5,
      Gb2: 92.5,
      G2: 98.0,
      'G#2': 103.83,
      Ab2: 103.83,
      A2: 110.0,
      'A#2': 116.54,
      Bb2: 116.54,
      B2: 123.47,
      C3: 130.81,
      'C#3': 138.59,
      Db3: 138.59,
      D3: 146.83,
      'D#3': 155.56,
      Eb3: 155.56,
      E3: 164.81,
      F3: 174.61,
      'F#3': 185.0,
      Gb3: 185.0,
      G3: 196.0,
      'G#3': 207.65,
      Ab3: 207.65,
      A3: 220.0,
      'A#3': 233.08,
      Bb3: 233.08,
      B3: 246.94,
      C4: 261.63,
      'C#4': 277.18,
      Db4: 277.18,
      D4: 293.66,
      'D#4': 311.13,
      Eb4: 311.13,
      E4: 329.63,
      F4: 349.23,
      'F#4': 369.99,
      Gb4: 369.99,
      G4: 392.0,
      'G#4': 415.3,
      Ab4: 415.3,
      A4: 440.0,
      'A#4': 466.16,
      Bb4: 466.16,
      B4: 493.88,
      C5: 523.25,
      'C#5': 554.37,
      Db5: 554.37,
      D5: 587.33,
      'D#5': 622.25,
      Eb5: 622.25,
      E5: 659.25,
      F5: 698.46,
      'F#5': 739.99,
      Gb5: 739.99,
      G5: 783.99,
      'G#5': 830.61,
      Ab5: 830.61,
      A5: 880.0,
      'A#5': 932.33,
      Bb5: 932.33,
      B5: 987.77,
      C6: 1046.5,
      'C#6': 1108.73,
      Db6: 1108.73,
      D6: 1174.66,
      'D#6': 1244.51,
      Eb6: 1244.51,
      E6: 1318.51,
      F6: 1396.9,
      'F#6': 1479.98,
      Gb6: 1479.98,
      G6: 1567.98,
      'G#6': 1661.22,
      Ab6: 1661.22,
      A6: 1760.0,
      'A#6': 1864.66,
      Bb6: 1864.66,
      B6: 1975.53,
      C7: 2093.0,
      'C#7': 2217.46,
      Db7: 2217.46,
      D7: 2349.32,
      'D#7': 2489.02,
      Eb7: 2489.02,
      E7: 2637.02,
      F7: 2793.83,
      'F#7': 2959.96,
      Gb7: 2959.96,
      G7: 3135.96,
      'G#7': 3322.44,
      Ab7: 3322.44,
      A7: 3520.0,
      'A#7': 3729.31,
      Bb7: 3729.31,
      B7: 3951.07,
      C8: 4186.01,
      'C#8': 4434.92,
      Db8: 4434.92,
      D8: 4698.63,
      'D#8': 4978.03,
      Eb8: 4978.03,
      E8: 5274.04,
      F8: 5587.65,
      'F#8': 5919.91,
      Gb8: 5919.91,
      G8: 6271.93,
      'G#8': 6644.88,
      Ab8: 6644.88,
      A8: 7040.0,
      'A#8': 7458.62,
      Bb8: 7458.62,
      B8: 7902.13,
    };

    const freq =
      typeof frequency === 'string' ? parseFloat(frequency) : frequency;
    let closestNote = '';
    let closestDifference = Number.POSITIVE_INFINITY;

    for (const note in noteFrequencies) {
      const difference = Math.abs(freq - noteFrequencies[note]);
      if (difference < closestDifference) {
        closestNote = note;
        closestDifference = difference;
      }
    }

    const octave = parseInt(closestNote.slice(-1));
    const convertedFrequency = closestNote.slice(0, -1) + octave.toString();
    console.log('convertedFrequency: ', convertedFrequency);

    return convertedFrequency;
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
