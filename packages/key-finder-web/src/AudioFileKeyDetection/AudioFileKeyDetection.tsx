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
    // Unhighlight all notes
    document.querySelectorAll('.fretboard circle').forEach((circle) => {
      if (circle instanceof SVGElement) {
        circle.classList.remove('highlight');
        circle.style.fill = 'white'; // Reset fill color
      }
    });
    // Highlight the detected note
    if (detectedNote) {
      const noteElements = document.querySelectorAll('.fretboard circle title');
      noteElements.forEach((titleElement) => {
        const noteText = titleElement.textContent.trim();
        if (
          noteText.toLowerCase().trim() === detectedNote.toLowerCase().trim()
        ) {
          console.log('Detected Note for match', detectedNote);
          const circleElement = titleElement.parentElement;
          circleElement.style.fill = 'green'; // Set fill color to green
        }
      });
    }
  };

  lastConsoleLogTime = 0; // Initialize the variable to track the last console.log time

  startListeningForNotes() {
    // Set up the event listener or initialize the note detection system
    const audioContext = new AudioContext();
    const analyserNode = audioContext.createAnalyser();

    // Dynamically import the PitchDetector from the pitchyModule.js
    import('./pitchyModule.js')
      .then(({ PitchDetector }) => {
        // Rest of the function remains unchanged

        navigator.mediaDevices
          .getUserMedia({ audio: true })
          .then((stream) => {
            audioContext.createMediaStreamSource(stream).connect(analyserNode);

            // Create the pitch detector
            const detector = PitchDetector.forFloat32Array(
              analyserNode.fftSize
            );

            const input = new Float32Array(detector.inputLength);

            const processAudioData = () => {
              analyserNode.getFloatTimeDomainData(input);

              // Detect pitch and clarity using pitchy
              const [pitch] = detector.findPitch(
                input,
                audioContext.sampleRate
              );

              if (typeof pitch === 'number') {
                const currentTime = Date.now();
                if (currentTime - this.lastConsoleLogTime >= 5000) {
                  // console.log('pitch', pitch);
                  this.lastConsoleLogTime = currentTime; // Update the last console.log time
                }
                // Call the handleNoteDetection function in the parent component with the detected note
                this.handleNoteDetection(pitch);
              } else {
                // If pitch is not a number (could not detect note), you may choose to handle it accordingly
                this.handleNoteDetection(null);
              }

              // Call processAudioData recursively to keep processing the audio data
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

  // Helper function to convert frequency to musical note
  getNoteFromFrequency = (frequency: number): string => {
    // Define the note frequencies for A4=440Hz tuning
    const A4Frequency = 440;
    const semitoneRatio = 2 ** (1 / 12);
    const semitoneDifference = 69; // MIDI note number for A4

    const midiNote = 12 * Math.log2(frequency / A4Frequency) + 69;

    // Define the note names with both sharps and flats
    const notes = [
      'C',
      'C#',
      'Db',
      'D',
      'D#',
      'Eb',
      'E',
      'F',
      'F#',
      'Gb',
      'G',
      'G#',
      'Ab',
      'A',
      'A#',
      'Bb',
      'B',
    ];

    const noteIndex = Math.round(midiNote) % 12;
    const octave = Math.floor(midiNote / 12);

    console.log(
      'note calculation from frequency:',
      `${notes[noteIndex]}${octave}`
    );

    return `${notes[noteIndex]}${octave}`;
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
