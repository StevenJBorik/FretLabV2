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
import scalePositions from '../scaleFingerMappings';

declare var cv: any;

interface Props {
  frets?: number; // Add frets property to store user-defined frets value
  startFret?: number; // Add startFret property to store user-defined startFret value
}
interface NoteHistoryItem {
  note: string;
  fret: number;
  string: number;
  distance?: number; // Optional if you only use it in certain contexts
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
  selectedTuning: string;
  selectedGuitarType: string;
  highlightNotes: boolean | true;
  noteHistory: NoteHistoryItem[];
  noteHistorySize: number;
  currentKey: string;
  currentMode: string;
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
  debouncedHandleNoteDetection = this.debounce(this.handleNoteDetection, 75);
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
    selectedGuitarType: 'guitar6',
    selectedTuning: 'standard',
    highlightNotes: true,
    noteHistory: [],
    noteHistorySize: 10,
    currentKey: '',
    currentMode: '',
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

  componentWillUnmount() {
    this.stopListeningForNotes();
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    console.log('AudioFileKeyDetection - shouldComponentUpdate');

    const filesChanged = this.state.files !== nextState.files;
    const orderChanged = this.state.order !== nextState.order;
    const incrementFactorChanged =
      this.state.incrementFactor !== nextState.incrementFactor;
    const sectionBoundariesChanged =
      JSON.stringify(this.state.sectionBoundaries) !==
      JSON.stringify(nextState.sectionBoundaries);
    const guitarTypeChanged =
      this.state.selectedGuitarType !== nextState.selectedGuitarType;
    const tuningChanged =
      this.state.selectedTuning !== nextState.selectedTuning;
    const fretsChanged = this.state.frets !== nextState.frets;
    const startFretChanged = this.state.startFret !== nextState.startFret;

    if (
      filesChanged ||
      orderChanged ||
      incrementFactorChanged ||
      sectionBoundariesChanged ||
      guitarTypeChanged ||
      tuningChanged ||
      fretsChanged ||
      startFretChanged // Include these checks
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

  secondsToTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0'
    )}`;
  };

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
    console.log('setting state in fretschange..');
    this.setState({ frets });
  };

  // Event handler for updating the startFret value
  handleStartFretChange = (event: Event): void => {
    const startFret = Number((event.target as HTMLInputElement).value);
    console.log('setting state in startfretchange.. ');
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

  //     const distanceToLastFret = (match) =>
  //       Math.abs(this.state.detectedFret - match.fret);
  //     potentialMatches.sort(
  //       (a, b) => distanceToLastFret(a) - distanceToLastFret(b)
  //     );

  //     let probableMatch = potentialMatches[0];

  //     console.log('Probable Match:', probableMatch);

  //     if (probableMatch) {
  //       this.setState({
  //         detectedNote: probableMatch.note,
  //         detectedFret: probableMatch.fret,
  //         detectedString: probableMatch.string,
  //         lastValidNote: probableMatch.note, // Update the last valid values here
  //         lastValidFret: probableMatch.fret,
  //         lastValidString: probableMatch.string,
  //       });
  //       this.updateFretboardHighlights(probableMatch.note, probableMatch.fret);
  //     } else if (this.state.detectedNote) {
  //       this.setState({
  //         detectedNote: this.state.lastValidNote,
  //         detectedFret: this.state.lastValidFret,
  //         detectedString: this.state.lastValidString,
  //       });
  //     }
  //   }
  // }

  updateKeyAndMode = (newKey, newMode) => {
    this.setState({ currentKey: newKey, currentMode: newMode });
  };

  normalizeKey(key) {
    const flatSharpMap = {
      'a#': 'aSharpBFlat',
      bb: 'aSharpBFlat',
      'c#': 'cSharpDFlat',
      db: 'cSharpDFlat',
      'd#': 'dSharpEFlat',
      eb: 'dSharpEFlat',
      'e#': 'eSharpFFlat', // This is a theoretical key, rarely used
      fb: 'eSharpFFlat',
      'f#': 'fSharpGFlat',
      gb: 'fSharpGFlat',
      'g#': 'gSharpAFlat',
      ab: 'gSharpAFlat',
    };
    return flatSharpMap[key.toLowerCase()] || key;
  }

  convertMode(mode) {
    const modeMap = {
      aeolian: 'minor',
      'harmonic-minor': 'HarmonicMinor',
      'melodic-minor': 'MelodicMinor',
      // Other modes are used as-is
    };
    return modeMap[mode.toLowerCase()] || mode;
  }
  getScalePositions(key, mode) {
    const normalizedKey = this.normalizeKey(key);
    const convertedMode = this.convertMode(mode);

    // Format the key for access in the mappings
    const scaleKey = `${normalizedKey}${
      convertedMode.charAt(0).toUpperCase() + convertedMode.slice(1)
    }`;

    return scalePositions[scaleKey] || {}; // Assuming scalePositions is passed as a prop
  }

  getPlayingDirection(noteHistory) {
    // Check the direction of the last few played notes
    if (noteHistory.length < 3) return null; // Not enough data to determine direction

    const direction =
      noteHistory[noteHistory.length - 1].fret -
      noteHistory[noteHistory.length - 4].fret;
    if (direction > 0) return 'ascending';
    if (direction < 0) return 'descending';
    return 'stationary'; // or 'repeated' if the same fret is being played
  }

  NOTE_HISTORY_SIZE = 10; // Size of the note history
  noteHistory = []; // Array to store history of played notes

  handleNoteDetection(frequency: number | null) {
    const key = this.state.currentKey;
    const mode = this.state.currentMode;
    console.log(`handleNoteDetection called with frequency: ${frequency}`);
    if (frequency !== null) {
      let potentialMatches = this.getNoteFromFrequency(frequency);
      console.log('Potential matches:', potentialMatches);

      const startFret = this.state.startFret;
      const frets = this.state.frets;
      console.log('startfret/frets in handleNoteDetection:', startFret, frets);

      potentialMatches = potentialMatches.filter((match) => {
        return match.fret >= startFret && match.fret <= startFret + frets;
      });

      console.log('Potential matches after filtering:', potentialMatches);

      let ambiguousMatches = [];
      // ... logic to determine if there is ambiguity ...
      if (potentialMatches.length > 1) {
        const distanceMap = new Map();

        potentialMatches.forEach((match) => {
          const distance = Math.abs(this.state.lastValidFret - match.fret);
          if (!distanceMap.has(match.note)) {
            distanceMap.set(match.note, []);
          }
          distanceMap.get(match.note).push({ ...match, distance });
        });

        // Iterate over the entries of the Map
        distanceMap.forEach((matches, note) => {
          if (matches.length > 1) {
            const distances = matches.map((match) => match.distance);
            const uniqueDistances = new Set(distances);
            if (uniqueDistances.size === 1 && [...uniqueDistances][0] !== 0) {
              ambiguousMatches.push(...matches);
            }
          }
        });
      }
      if (ambiguousMatches.length > 0) {
        const scalePositions = this.getScalePositions(key, mode);
        const playingDirection = this.getPlayingDirection(
          this.state.noteHistory
        );

        let bestMatch = null;
        let bestMatchScore = -Infinity;

        ambiguousMatches.forEach((match) => {
          const matchPosition = scalePositions[match.string]?.find(
            (p) => p.fret === match.fret
          );

          if (matchPosition) {
            let matchScore = 0;

            if (
              playingDirection === 'ascending' &&
              match.fret > this.state.lastValidFret
            ) {
              matchScore += 10;
            }
            if (
              playingDirection === 'descending' &&
              match.fret < this.state.lastValidFret
            ) {
              matchScore += 10;
            }

            if (matchScore > bestMatchScore) {
              bestMatch = match;
              bestMatchScore = matchScore;
            }

            const fretDistancePenalty =
              Math.abs(this.state.lastValidFret - match.fret) * 5;
            matchScore -= fretDistancePenalty;

            if (matchScore > bestMatchScore) {
              bestMatch = match;
              bestMatchScore = matchScore;
            }
          }
        });

        if (bestMatch) {
          this.setState({
            detectedNote: bestMatch.note,
            detectedFret: bestMatch.fret,
            detectedString: bestMatch.string,
            lastValidNote: bestMatch.note,
            lastValidFret: bestMatch.fret,
            lastValidString: bestMatch.string,
          });
          this.updateNoteHistory(bestMatch);
        }
      } else {
        const calculateMatchScore = (match) => {
          let score = 0;
          const detectedFret = this.state.detectedFret;

          score -= Math.abs(detectedFret - match.fret) * 10;

          if (match.fret !== 0 && potentialMatches.some((m) => m.fret === 0)) {
            score += 5;
          }

          return score;
        };

        potentialMatches.sort((a, b) => {
          const scoreA = calculateMatchScore(a);
          const scoreB = calculateMatchScore(b);
          return scoreB - scoreA;
        });

        let probableMatch = potentialMatches[0];
        console.log('probable match..', probableMatch);
        if (probableMatch) {
          this.setState({
            detectedNote: probableMatch.note,
            detectedFret: probableMatch.fret,
            detectedString: probableMatch.string,
            lastValidNote: probableMatch.note,
            lastValidFret: probableMatch.fret,
            lastValidString: probableMatch.string,
          });
          this.updateNoteHistory(probableMatch);
          this.updateFretboardHighlights(
            probableMatch.note,
            probableMatch.fret
          );
        } else if (this.state.detectedNote) {
          this.setState({
            detectedNote: this.state.lastValidNote,
            detectedFret: this.state.lastValidFret,
            detectedString: this.state.lastValidString,
          });
        }
      }
    }
  }

  updateNoteHistory(newNote: NoteHistoryItem) {
    this.setState((prevState) => {
      const updatedHistory = [...prevState.noteHistory, newNote];
      while (updatedHistory.length > prevState.noteHistorySize) {
        updatedHistory.shift(); // Remove the oldest note to maintain the history size
      }
      return { noteHistory: updatedHistory };
    });
  }

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
    console.log('updating fretboard highlights..', detectedFret, detectedNote);
    if (this.state.highlightNotes) {
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

      console.log(
        'Detected Note:',
        detectedNote,
        'Detected Fret:',
        detectedFret
      );

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
    }
    // think of a better solution later since this is getting called to lagging green notes if this is not there after toggle button.
    else {
      const fretboardContainer = document.querySelector('.fretboard');
      const allCircleElements =
        fretboardContainer.querySelectorAll('circle.note'); // targeting circles with class 'note'

      // console.log('Total circles:', allCircleElements.length);

      allCircleElements.forEach((circleElement) => {
        if (circleElement instanceof SVGElement) {
          circleElement.classList.remove('highlight');
          circleElement.style.fill = 'white';
        }
      });
    }
  };

  startListeningForNotes = () => {
    const SILENCE_THRESHOLD = 0.0759;
    let detector;
    let lastProcessedTime = 0;
    const PROCESS_INTERVAL = 10;
    const HOLD_TIME = 150;
    let lastDetectedPitchTime = 0;
    let lastDetectedPitch = null;
    const windowSize = 2; // Moving Average window size
    let pitchWindow = []; // Window for Moving Average

    // Moving Average Filter Function
    const movingAverageFilter = (data) => {
      const total = data.reduce((sum, value) => sum + value, 0);
      return total / data.length;
    };

    const processAudioData = (input, sampleRate) => {
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
            pitchWindow.push(pitch);
            if (pitchWindow.length > windowSize) {
              pitchWindow.shift();
            }

            const currentTime = Date.now();
            if (
              currentTime - lastDetectedPitchTime > HOLD_TIME ||
              !lastDetectedPitch
            ) {
              const averagePitch = movingAverageFilter(pitchWindow);
              this.handleNoteDetection(averagePitch);
              lastDetectedPitch = averagePitch;
              lastDetectedPitchTime = currentTime;
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
    };

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const audioContext = new AudioContext({ sampleRate: 24000 });
        const analyserNode = audioContext.createAnalyser();
        analyserNode.fftSize = 1024;

        audioContext.createMediaStreamSource(stream).connect(analyserNode);
        detector = PitchDetector.forFloat32Array(analyserNode.fftSize);

        const fetchAndSendAudioData = () => {
          const currentTime = Date.now();
          if (currentTime - lastProcessedTime > PROCESS_INTERVAL) {
            const fftSize = analyserNode.fftSize;
            const audioData = new Float32Array(fftSize);
            analyserNode.getFloatTimeDomainData(audioData);
            processAudioData(audioData, audioContext.sampleRate);

            lastProcessedTime = currentTime;
          }

          requestAnimationFrame(fetchAndSendAudioData);
        };

        fetchAndSendAudioData();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };

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

  handleTuningChange = (event) => {
    this.setState({ selectedTuning: event.target.value });
  };

  handleGuitarTypeChange = (event) => {
    const newGuitarType = event.target.value;
    console.log('Guitar type changed to:', newGuitarType);

    // Set a default tuning based on the guitar type
    const defaultTuningForType = {
      bass4: 'standard',
      guitar6: 'standard',
      guitar7: 'standard',
    };

    this.setState(
      {
        selectedGuitarType: newGuitarType,
        selectedTuning: defaultTuningForType[newGuitarType] || 'standard',
      },
      () => {
        console.log('State updated to:', this.state);
      }
    );
  };

  toggleHighlight = () => {
    this.setState((prevState) => ({
      highlightNotes: !prevState.highlightNotes,
    }));
  };

  render(props) {
    const tuningsMap = {
      bass4: ['standard'],
      guitar6: ['standard', 'E_4ths', 'Drop_D', 'G_open', 'DADGAD'],
      guitar7: ['standard', 'E_4ths'],
    };

    console.log('Rendering tunings for:', this.state.selectedGuitarType);

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
              <br />
              <label htmlFor="guitar-type-select">Select Guitar Type:</label>
              <select
                id="guitar-type-select"
                value={this.state.selectedGuitarType}
                onChange={this.handleGuitarTypeChange}
              >
                <option value="bass4">Bass (4-string)</option>
                <option value="guitar6">Guitar (6-string)</option>
                <option value="guitar7">Guitar (7-string)</option>
              </select>

              <label htmlFor="tuning-select">Select Tuning:</label>
              <select
                id="tuning-select"
                value={this.state.selectedTuning}
                onChange={this.handleTuningChange}
              >
                {tuningsMap[this.state.selectedGuitarType].map((tuning) => (
                  <option key={tuning} value={tuning}>
                    {tuning.replace(/_/g, ' ')}
                  </option>
                ))}
              </select>
              <br />
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
              <button onClick={this.toggleHighlight}>
                Toggle Note Highlighting
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
            selectedGuitarType={this.state.selectedGuitarType}
            selectedTuning={this.state.selectedTuning}
            updateKeyAndMode={this.updateKeyAndMode}
          />
        ))}
      </>
    );
  }
}

export default AudioFileKeyDetection;
