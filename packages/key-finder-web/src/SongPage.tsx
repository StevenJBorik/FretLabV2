import { h, FunctionalComponent } from 'preact';
import { useState, useEffect, useRef, useContext } from 'preact/hooks';
import { route } from 'preact-router';
import Fretboard from './Fretboard';
import { PitchDetector } from 'pitchy';
import './SongPage.css';
import { UserContext } from './context';
import { SetlistContext } from './setListContext'; // Import the context
import scalePositions from './scaleFingerMappings';

const API_URL = 'http://localhost:8080'; // Define API_URL

declare global {
  interface Window {
    YT: any; // Declaring YT as any
    onYouTubeIframeAPIReady: () => void;
  }
}

const fetchSongData = async (songId) => {
  try {
    const response = await fetch(`${API_URL}/song/${songId}`);
    // console.log('Fetch response:', response);
    if (!response.ok) {
      throw new Error('Song data could not be fetched');
    }
    const songData = await response.json();
    // console.log('Fetched Song Data:', songData);
    return songData;
  } catch (error) {
    console.error('fetchSongData error:', error);

    route('/'); // Redirect to home if there's an error
  }
};

const fetchUserId = async (username) => {
  try {
    const response = await fetch(`${API_URL}/get-user-id`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ username }),
    });
    const data = await response.json();
    if (response.ok) {
      return data.userId;
    } else {
      throw new Error('Failed to fetch user ID');
    }
  } catch (error) {
    console.error('fetchUserId error:', error);
    return null;
  }
};

const addSongToSetlist = async (songId, setlistId) => {
  try {
    const response = await fetch(`${API_URL}/add-song-to-setlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ songId, setlistId }),
    });

    const result = await response.json();
    if (response.ok) {
      // console.log('Song added to setlist:', result);
    } else {
      throw new Error(result.message);
    }
  } catch (error) {
    console.error('Error adding song to setlist:', error);
  }
};

const recordUserHistory = async (songId) => {
  // Accept songId as a parameter
  try {
    await fetch(`${API_URL}/user-history`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        song_id: songId,
        played_at: new Date().toISOString(),
      }),
    });
    // Handle response and potential errors...
  } catch (error) {
    console.error('recordUserHistory error:', error);
  }
};

const debounce = (func, delay) => {
  let debounceTimer;
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(this, args), delay);
  };
};

interface SongPageProps {
  matches?: {
    songId: string; // This is the correct usage for preact-router
  };
}

const SongPage: FunctionalComponent<SongPageProps> = ({ matches }) => {
  const songId = matches!.songId; // Using the non-null assertion here
  const [videoId, setVideoId] = useState(null);
  const [sections, setSections] = useState([]);
  const [displayedScale, setDisplayedScale] = useState(null);
  const [userBoundaries, setUserBoundaries] = useState([]);
  const [detectedNote, setDetectedNote] = useState(null);
  const [tempBoundary, setTempBoundary] = useState('');
  const [thresholds, setThresholds] = useState({});
  const [lastValidNote, setLastValidNote] = useState(null);
  const [lastValidFret, setLastValidFret] = useState(null);
  const [lastValidString, setLastValidString] = useState(null);
  const [detectedFret, setDetectedFret] = useState(null);
  const [detectedString, setDetectedString] = useState(null);
  const [isThresholdsSet, setIsThresholdsSet] = useState(false);
  const [isYouTubeApiLoaded, setIsYouTubeApiLoaded] = useState(false);
  const sectionsRef = useRef(sections);
  const thresholdsRef = useRef(thresholds);
  const prevThresholdsRef = useRef<typeof thresholds>({}); // initial value as an empty object
  const loggedInUser = useContext(UserContext); // use the context
  const [userFretInputs, setUserFretInputs] = useState({
    startFret: 0,
    frets: 24,
  });
  const [fretboardUpdateInterval, setFretboardUpdateInterval] = useState(null);
  const [currentFretboardSettings, setCurrentFretboardSettings] = useState({
    startFret: 0,
    frets: 24,
    order: 'ascending' as 'ascending' | 'descending' | 'random', // Explicitly declare the type
    incrementFactor: 0,
  });
  const currentFretboardSettingsRef = useRef(currentFretboardSettings);
  const playerRef = useRef(null); // Reference for the YouTube player
  const detectedFretRef = useRef(null);
  const detectedStringRef = useRef(null);
  const debouncedHandleNoteDetection = useRef<
    ((frequency: number | null) => void) | null
  >(null);
  const audioContextRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const [historyRecorded, setHistoryRecorded] = useState(false);
  const setlistId = useContext(SetlistContext); // Use the context to get the setlistId
  const [currentScaleAndMode, setCurrentScaleAndMode] = useState({
    scale: '',
    mode: '',
  });

  // console.log('Song ID: ', songId);

  useEffect(() => {
    debouncedHandleNoteDetection.current = debounce(handleNoteDetection, 75);
  }, []);

  const noteMappings = {
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

  useEffect(() => {
    computeThresholds();
  }, []);

  useEffect(() => {
    if (isThresholdsSet) {
      startListeningForNotes();
    }

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current
          .close()
          .then(() => {
            console.log('AudioContext closed');
          })
          .catch((error) => {
            console.error('Error closing AudioContext:', error);
          });
      }
      if (mediaStreamRef.current) {
        mediaStreamRef.current.getTracks().forEach((track) => track.stop());
        console.log('MediaStream tracks stopped');
      }
    };
  }, [isThresholdsSet]);

  // useEffect(() => {
  //   const prevThresholds = prevThresholdsRef.current;
  //   prevThresholdsRef.current = thresholds;
  // }, [thresholds]);

  useEffect(() => {
    thresholdsRef.current = thresholds;
  }, [thresholds]);

  const computeThresholds = () => {
    // console.log('beginning computeThresholds..');
    let frequencies = [];
    for (let note in noteMappings) {
      for (let mapping of noteMappings[note]) {
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

    let newThresholds = {};
    for (let i = 0; i < frequencies.length; i++) {
      if (i === 0) {
        newThresholds[frequencies[i]] = { min: 0, max: midpoints[i] };
      } else if (i === frequencies.length - 1) {
        newThresholds[frequencies[i]] = {
          min: midpoints[i - 1],
          max: Infinity,
        };
      } else {
        newThresholds[frequencies[i]] = {
          min: midpoints[i - 1],
          max: midpoints[i],
        };
      }
    }
    // console.log('setting thresholds..');
    setThresholds(newThresholds);
    setIsThresholdsSet(true); // Indicate that thresholds are set
    // console.log('newThresholds after computation:', newThresholds);
  };

  // const startListeningForNotes = () => {
  //   console.log('listening for notes..');
  //   const SILENCE_THRESHOLD = 0.0759; // RD 1 .09
  //   let detector;
  //   let lastProcessedTime = 0;
  //   const PROCESS_INTERVAL = 10; // 50 RD 1 // 25 RD 2 // 5 RD 3
  //   const HOLD_TIME = 150; // 150 RD 1
  //   let lastDetectedPitchTime = 0;
  //   let lastDetectedPitch = null;
  //   let previousPitches = [];
  //   const MAX_PITCHES = 1;

  //   const processAudioData = (input, sampleRate) => {
  //     try {
  //       let maxAmplitude = -Infinity;
  //       for (let i = 0; i < input.length; i++) {
  //         if (input[i] > maxAmplitude) {
  //           maxAmplitude = input[i];
  //         }
  //       }

  //       if (maxAmplitude > SILENCE_THRESHOLD) {
  //         const [pitch] = detector.findPitch(input, sampleRate);

  //         if (typeof pitch === 'number') {
  //           previousPitches.push(pitch);
  //           if (previousPitches.length > MAX_PITCHES) {
  //             previousPitches.shift();
  //           }
  //           const averagePitch =
  //             previousPitches.reduce((a, b) => a + b) / previousPitches.length;

  //           const currentTime = Date.now();
  //           if (
  //             currentTime - lastDetectedPitchTime > HOLD_TIME ||
  //             !lastDetectedPitch
  //           ) {
  //             debouncedHandleNoteDetection.current?.(averagePitch);
  //             lastDetectedPitch = averagePitch;
  //             lastDetectedPitchTime = currentTime;
  //           }
  //         } else {
  //           debouncedHandleNoteDetection.current?.(null);
  //         }
  //       } else {
  //         debouncedHandleNoteDetection.current?.(null);
  //       }
  //     } catch (error) {
  //       console.error('Error in processAudioData: ', error);
  //     }
  //   };

  //   navigator.mediaDevices
  //     .getUserMedia({ audio: true })
  //     .then((stream) => {
  //       // const audioContext = new AudioContext();
  //       audioContextRef.current = new AudioContext({ sampleRate: 24000 });
  //       const analyserNode = audioContextRef.current.createAnalyser();
  //       analyserNode.fftSize = 1024;

  //       audioContextRef.current
  //         .createMediaStreamSource(stream)
  //         .connect(analyserNode);
  //       detector = PitchDetector.forFloat32Array(analyserNode.fftSize);

  //       const fetchAndSendAudioData = () => {
  //         const currentTime = Date.now();
  //         if (currentTime - lastProcessedTime > PROCESS_INTERVAL) {
  //           const fftSize = analyserNode.fftSize;
  //           const audioData = new Float32Array(fftSize);
  //           analyserNode.getFloatTimeDomainData(audioData);
  //           processAudioData(audioData, audioContextRef.current.sampleRate);

  //           lastProcessedTime = currentTime;
  //         }

  //         requestAnimationFrame(fetchAndSendAudioData);
  //       };

  //       fetchAndSendAudioData();
  //     })
  //     .catch((error) => {
  //       console.error('Error accessing microphone:', error);
  //     });
  // };
  const startListeningForNotes = () => {
    console.log('listening for notes..');
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
              debouncedHandleNoteDetection.current?.(averagePitch);
              lastDetectedPitch = averagePitch;
              lastDetectedPitchTime = currentTime;
            }
          } else {
            debouncedHandleNoteDetection.current?.(null);
          }
        } else {
          debouncedHandleNoteDetection.current?.(null);
        }
      } catch (error) {
        console.error('Error in processAudioData: ', error);
      }
    };

    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        audioContextRef.current = new AudioContext({ sampleRate: 24000 });
        const analyserNode = audioContextRef.current.createAnalyser();
        analyserNode.fftSize = 1024;

        audioContextRef.current
          .createMediaStreamSource(stream)
          .connect(analyserNode);
        detector = PitchDetector.forFloat32Array(analyserNode.fftSize);

        const fetchAndSendAudioData = () => {
          const currentTime = Date.now();
          if (currentTime - lastProcessedTime > PROCESS_INTERVAL) {
            const fftSize = analyserNode.fftSize;
            const audioData = new Float32Array(fftSize);
            analyserNode.getFloatTimeDomainData(audioData);
            processAudioData(audioData, audioContextRef.current.sampleRate);

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

  const stopListeningForNotes = () => {};

  // const getNoteFromFrequency = (
  //   frequency: number
  // ): Array<{ note: string; fret: number; string: number }> => {
  //   const MIN_FREQUENCY = 80;
  //   const MAX_FREQUENCY = 850;
  //   const freq =
  //     typeof frequency === 'string' ? parseFloat(frequency) : frequency;

  //   // If the frequency is out of bounds, return an empty array
  //   if (freq < MIN_FREQUENCY || freq > MAX_FREQUENCY) {
  //     return [];
  //   }

  //   const potentialMatches: Array<{
  //     note: string;
  //     fret: number;
  //     string: number;
  //   }> = [];

  //   for (const note in noteMappings) {
  //     const noteData = noteMappings[note];
  //     noteData.forEach((data) => {
  //       const { min, max } = thresholds[data.frequency];
  //       if (freq >= min && freq <= max) {
  //         potentialMatches.push({
  //           note: note,
  //           fret: data.fret,
  //           string: data.string,
  //         });
  //       }
  //     });
  //   }
  //   return potentialMatches;
  // };

  const getNoteFromFrequency = (frequency) => {
    console.log(`getNoteFromFrequency called with: ${frequency}`);

    const MIN_FREQUENCY = 80;
    const MAX_FREQUENCY = 850;
    const freq =
      typeof frequency === 'string' ? parseFloat(frequency) : frequency;

    console.log(`Processed frequency: ${freq}`);

    // If the frequency is out of bounds, return an empty array
    if (freq < MIN_FREQUENCY || freq > MAX_FREQUENCY) {
      console.log(`Frequency out of bounds: ${freq}`);
      return [];
    }

    const roundedFreq = Math.round(freq * 100) / 100; // Adjust rounding as needed
    console.log(`Rounded frequency: ${roundedFreq}`);

    const potentialMatches = [];
    const currentThresholds = thresholdsRef.current; // Using the current value of thresholdsRef

    // console.log(`Thresholds:`, currentThresholds);

    for (const key in currentThresholds) {
      const threshold = currentThresholds[key];
      // console.log(`Checking threshold for ${key}:`, threshold);

      if (roundedFreq >= threshold.min && roundedFreq <= threshold.max) {
        // console.log(
        //   `Found matching threshold for frequency ${roundedFreq}:`,
        //   threshold
        // );

        // Find corresponding notes in noteMappings
        for (const note in noteMappings) {
          noteMappings[note].forEach((data) => {
            if (data.frequency === parseFloat(key)) {
              potentialMatches.push({
                note: note,
                fret: data.fret,
                string: data.string,
              });
              console.log(`Matching note found:`, {
                note,
                fret: data.fret,
                string: data.string,
              });
            }
          });
        }
      }
    }

    console.log(`Potential matches found:`, potentialMatches);
    return potentialMatches;
  };

  // const handleNoteDetection = (frequency, key, mode) => {
  //   console.log(`handleNoteDetection called with frequency: ${frequency}`);
  //   if (frequency !== null) {
  //     let potentialMatches = getNoteFromFrequency(frequency);
  //     console.log('Potential matches:', potentialMatches);

  //     const { startFret, frets } = currentFretboardSettingsRef.current;
  //     console.log(
  //       'currentFretboardSettings in handleNoteDetection:',
  //       startFret,
  //       frets
  //     );

  //     potentialMatches = potentialMatches.filter((match) => {
  //       return match.fret >= startFret && match.fret <= startFret + frets;
  //     });

  //     console.log('Potential matches after filtering:', potentialMatches);

  //     // Function to calculate score based on fret and string proximity
  //     const calculateMatchScore = (match) => {
  //       let score = 0;
  //       const detectedFret = detectedFretRef.current;

  //       // Heavily weight the fret proximity.
  //       score -= Math.abs(detectedFret - match.fret) * 10; // Increased weight for fret proximity

  //       // Additional bonus for non-open string notes if there's a choice.
  //       if (match.fret !== 0 && potentialMatches.some((m) => m.fret === 0)) {
  //         score += 5; // Bonus for non-open string notes
  //       }

  //       // Debugging: Print scoring details
  //       console.log(`Scoring for match: note=${match.note}, fret=${match.fret}, string=${match.string}, score=${score}`);

  //       return score;
  //     };

  //     // Sort potential matches based on score
  //     potentialMatches.sort((a, b) => {
  //       const scoreA = calculateMatchScore(a);
  //       const scoreB = calculateMatchScore(b);
  //       console.log(
  //         `Comparing scores: ${a.note} at fret ${a.fret} = ${scoreA}, ${b.note} at fret ${b.fret} = ${scoreB}`
  //       );
  //       return scoreB - scoreA;
  //     });

  //     let probableMatch = potentialMatches[0];
  //     console.log('Probable match found:', probableMatch);
  //     if (probableMatch) {
  //       setDetectedNote({
  //         note: probableMatch.note,
  //         fret: probableMatch.fret,
  //         string: probableMatch.string,
  //       });
  //       detectedFretRef.current = probableMatch.fret; // Update ref
  //       detectedStringRef.current = probableMatch.string; // Update ref
  //       setDetectedFret(probableMatch.fret); // Correct way to update the detected fret
  //       setDetectedString(probableMatch.string); // Correct way to update the detected strin
  //       setLastValidNote(probableMatch.note);
  //       setLastValidFret(probableMatch.fret);
  //       setLastValidString(probableMatch.string);
  //       setDetectedFret(probableMatch.fret); // Update the detected fret
  //       setDetectedString(probableMatch.string); // Update the detected string

  //       // Add the current match to the note history
  //       noteHistory.push(probableMatch);
  //       if (noteHistory.length > NOTE_HISTORY_SIZE) {
  //         noteHistory.shift();
  //       }
  //     } else if (detectedNote) {
  //       // Use last valid values
  //       setDetectedNote({
  //         note: lastValidNote,
  //         fret: lastValidFret,
  //         string: lastValidString,
  //       });
  //     }
  //   }
  // };

  const normalizeKey = (key) => {
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
  };

  const convertMode = (mode) => {
    const modeMap = {
      aeolian: 'minor',
      'harmonic-minor': 'HarmonicMinor',
      'melodic-minor': 'MelodicMinor',
      // Other modes are used as-is
    };
    return modeMap[mode.toLowerCase()] || mode;
  };

  const getScalePositions = (key, mode) => {
    const normalizedKey = normalizeKey(key);
    const convertedMode = convertMode(mode);

    // Format the key for access in the mappings
    const scaleKey = `${normalizedKey}${
      convertedMode.charAt(0).toUpperCase() + convertedMode.slice(1)
    }`;

    return scalePositions[scaleKey] || {}; // Return the positions or an empty object if not found
  };

  const getPlayingDirection = (noteHistory) => {
    // Check the direction of the last few played notes
    if (noteHistory.length < 3) return null; // Not enough data to determine direction

    const direction =
      noteHistory[noteHistory.length - 1].fret -
      noteHistory[noteHistory.length - 4].fret;
    if (direction > 0) return 'ascending';
    if (direction < 0) return 'descending';
    return 'stationary'; // or 'repeated' if the same fret is being played
  };

  const NOTE_HISTORY_SIZE = 10; // Size of the note history
  let noteHistory = []; // Array to store history of played notes

  const handleNoteDetection = (frequency, key, mode) => {
    console.log(`handleNoteDetection called with frequency: ${frequency}`);
    if (frequency !== null) {
      let potentialMatches = getNoteFromFrequency(frequency);
      console.log('Potential matches:', potentialMatches);

      const { startFret, frets } = currentFretboardSettingsRef.current;
      console.log(
        'currentFretboardSettings in handleNoteDetection:',
        startFret,
        frets
      );

      potentialMatches = potentialMatches.filter((match) => {
        return match.fret >= startFret && match.fret <= startFret + frets;
      });

      console.log('Potential matches after filtering:', potentialMatches);

      let ambiguousMatches = [];
      // ... logic to determine if there is ambiguity ...
      if (potentialMatches.length > 1) {
        const distanceMap = new Map<
          string,
          Array<{
            note: string;
            fret: number;
            string: number;
            distance: number;
          }>
        >();

        potentialMatches.forEach((match) => {
          const distance = Math.abs(lastValidFret - match.fret);
          if (!distanceMap.has(match.note)) {
            distanceMap.set(match.note, []);
          }
          distanceMap.get(match.note)?.push({ ...match, distance });
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
        const scalePositions = getScalePositions(key, mode);
        const playingDirection = getPlayingDirection(noteHistory);

        let bestMatch = null;
        let bestMatchScore = -Infinity;

        ambiguousMatches.forEach((match) => {
          const matchPosition = scalePositions[match.string]?.find(
            (p) => p.fret === match.fret
          );

          if (matchPosition) {
            let matchScore = 0;

            // Example scoring logic - you can tailor this as needed
            if (
              playingDirection === 'ascending' &&
              match.fret > lastValidFret
            ) {
              matchScore += 10;
            }
            if (
              playingDirection === 'descending' &&
              match.fret < lastValidFret
            ) {
              matchScore += 10;
            }

            if (matchScore > bestMatchScore) {
              bestMatch = match;
              bestMatchScore = matchScore;
            }
          }
        });
      } else {
        // Calculate match score for non-ambiguous cases
        const calculateMatchScore = (match) => {
          let score = 0;
          const detectedFret = detectedFretRef.current;

          // Heavily weight the fret proximity.
          score -= Math.abs(detectedFret - match.fret) * 10; // Increased weight for fret proximity

          // Additional bonus for non-open string notes if there's a choice.
          if (match.fret !== 0 && potentialMatches.some((m) => m.fret === 0)) {
            score += 5; // Bonus for non-open string notes
          }

          console.log(
            `Scoring for match: note=${match.note}, fret=${match.fret}, string=${match.string}, score=${score}`
          );

          return score;
        };

        // Sort potential matches based on score
        potentialMatches.sort((a, b) => {
          const scoreA = calculateMatchScore(a);
          const scoreB = calculateMatchScore(b);
          console.log(
            `Comparing scores: ${a.note} at fret ${a.fret} = ${scoreA}, ${b.note} at fret ${b.fret} = ${scoreB}`
          );
          return scoreB - scoreA;
        });

        let probableMatch = potentialMatches[0];
        console.log('Probable match found:', probableMatch);
        if (probableMatch) {
          setDetectedNote({
            note: probableMatch.note,
            fret: probableMatch.fret,
            string: probableMatch.string,
          });
          detectedFretRef.current = probableMatch.fret; // Update ref
          detectedStringRef.current = probableMatch.string; // Update ref
          setDetectedFret(probableMatch.fret); // Correct way to update the detected fret
          setDetectedString(probableMatch.string); // Correct way to update the detected strin
          setLastValidNote(probableMatch.note);
          setLastValidFret(probableMatch.fret);
          setLastValidString(probableMatch.string);
          setDetectedFret(probableMatch.fret); // Update the detected fret
          setDetectedString(probableMatch.string); // Update the detected string

          // Add the current match to the note history
          noteHistory.push(probableMatch);
          if (noteHistory.length > NOTE_HISTORY_SIZE) {
            noteHistory.shift();
          }
        } else if (detectedNote) {
          // Use last valid values
          setDetectedNote({
            note: lastValidNote,
            fret: lastValidFret,
            string: lastValidString,
          });
        }
      }
    }
  };

  useEffect(() => {
    return () => {
      console.log('SongPage is unmounting');
      // Cleanup logic here...
    };
  }, []);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const songData = await fetchSongData(songId);
      if (isMounted && songData) {
        setDisplayedScale(songData.key);
        setSections(songData.sections);
        // console.log('Updating state with new song data', songData.sections);
        const urlParams = new URLSearchParams(
          new URL(songData.youtube_url).search
        );
        const videoIdFromUrl = urlParams.get('v');
        if (videoIdFromUrl) {
          setVideoId(videoIdFromUrl);
        } else {
          console.error('No video ID found in the youtube_url');
        }
        // ... (rest of your code)
      } else {
        route('/');
      }
    };

    fetchData();
    return () => {
      isMounted = false;
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [songId]);

  const handleAddBoundary = () => {
    // Add the new boundary to temporary list
    setUserBoundaries((prevBoundaries) => [...prevBoundaries, tempBoundary]);
    setTempBoundary(''); // Reset the input field
  };

  const handleRemoveBoundary = (boundaryIndex) => {
    setUserBoundaries((prevBoundaries) =>
      prevBoundaries.filter((_, index) => index !== boundaryIndex)
    );
  };

  const handleSaveBoundaries = () => {
    // Here, you might want to merge userBoundaries with sections
    // or replace sections with userBoundaries based on your requirement
    setSections(userBoundaries);
    setUserBoundaries([]); // Clear user boundaries after saving
  };

  useEffect(() => {
    // Check if the YouTube API script is already present
    const isScriptPresent =
      document.getElementById('youtube-api-script') !== null;

    if (!isScriptPresent) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      tag.id = 'youtube-api-script'; // Add an ID to the script for checking later
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Define the callback globally if it's not already defined
    if (typeof window.onYouTubeIframeAPIReady !== 'function') {
      window.onYouTubeIframeAPIReady = () => {
        setIsYouTubeApiLoaded(true); // Set the state when API is ready
      };
    }
  }, []);

  useEffect(() => {
    if (isYouTubeApiLoaded && videoId && window.YT && window.YT.Player) {
      // console.log('Initializing YouTube player with videoId:', videoId);
      initializeYouTubePlayer(videoId);
    }
  }, [isYouTubeApiLoaded, videoId]);

  const onPlayerError = (event) => {
    console.error('Player Error:', event.data);
  };

  useEffect(() => {
    if (videoId) {
      // console.log('Initializing YouTube player with videoId:', videoId);
      initializeYouTubePlayer(videoId);
    }
  }, [videoId]);

  const initializeYouTubePlayer = (videoId) => {
    // Check if the YT.Player constructor is available before trying to create a new player
    if (window.YT && window.YT.Player) {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '50',
        width: '100',
        videoId: videoId,
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onError: onPlayerError,
        },
      });
    } else {
      console.error('YouTube Player library is not yet loaded.');
    }
  };

  // console.log('Youtube Iframe API is ready');

  const onPlayerReady = (event) => {
    console.log('Youtube Player is ready.');
  };

  const manageFretboardUpdateInterval = (start) => {
    if (start) {
      const interval = setInterval(() => {
        const currentTime = playerRef.current.getCurrentTime();
        checkAndUpdateFretboard(currentTime);
      }, 1000);
      setFretboardUpdateInterval(interval);
    } else {
      clearInterval(fretboardUpdateInterval);
      setFretboardUpdateInterval(null);
    }
  };

  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      // console.log('YouTube Player is playing.');
      manageFretboardUpdateInterval(true);
      recordUserHistory(songId); // Adjusted call
      setHistoryRecorded(true); // Set a flag to indicate that the history has been recorded
    } else {
      // console.log('YouTube Player is not playing.');
      manageFretboardUpdateInterval(false);
    }
  };

  useEffect(() => {
    return () => {
      setHistoryRecorded(false); // Reset history recorded state
    };
  }, [songId]);

  useEffect(() => {
    sectionsRef.current = sections;
  }, [sections]);

  const convertTimeToSeconds = (timeString) => {
    const [minutes, seconds] = timeString.split(':').map(Number);
    return minutes * 60 + seconds;
  };

  const checkAndUpdateFretboard = (currentTime) => {
    const formattedTime = convertSecondsToMinuteSecond(Math.round(currentTime));
    // console.log('Formatted Time:', formattedTime, 'Sections:', sectionsRef.current);

    // Convert formattedTime to seconds for comparison
    const currentTimeInSeconds = convertTimeToSeconds(formattedTime);

    const matchedBoundary = sectionsRef.current.find((section) => {
      const sectionTimeInSeconds = convertTimeToSeconds(section);
      return currentTimeInSeconds === sectionTimeInSeconds;
    });

    // console.log('Matched Boundary:', matchedBoundary);

    if (matchedBoundary) {
      console.log(
        '[SongPage] Updating Fretboard based on current time',
        currentTime
      );
      updateFretboardScale();
    }
  };

  const updateFretboardScale = () => {
    let startFret = currentFretboardSettingsRef.current.startFret;
    let frets = currentFretboardSettingsRef.current.frets;
    let order = currentFretboardSettingsRef.current.order;
    let incrementFactor = currentFretboardSettingsRef.current.incrementFactor;

    // console.log('startFret: ', currentFretboardSettingsRef.current.startFret);
    // console.log('frets: ', currentFretboardSettingsRef.current.frets);
    // console.log('order: ', currentFretboardSettingsRef.current.order);
    // console.log(
    //   'increment factor',
    //   currentFretboardSettingsRef.current.incrementFactor
    // );

    let fretDiff = frets - startFret;
    let nextStartFret = startFret;
    let nextFretSpan = frets;

    switch (order) {
      case 'ascending':
        nextStartFret += incrementFactor;
        nextFretSpan += incrementFactor;
        if (nextFretSpan > 24) {
          nextStartFret = 0;
          nextFretSpan = fretDiff;
        }
        break;
      case 'descending':
        nextStartFret -= incrementFactor;
        nextFretSpan -= incrementFactor;
        if (nextStartFret < 0) {
          nextStartFret = fretDiff;
          nextFretSpan = 24;
        }
        break;
      case 'random':
        nextStartFret = Math.floor(Math.random() * 25); // inclusive of 0 and 24
        nextFretSpan = nextStartFret + fretDiff;
        if (nextFretSpan > 24) {
          nextFretSpan = 24;
        }
        break;
    }

    setCurrentFretboardSettings({
      ...currentFretboardSettingsRef.current,
      startFret: nextStartFret,
      frets: nextFretSpan,
    });

    // console.log('Next Fretboard Settings:', { nextStartFret, nextFretSpan });
  };

  const handlePlayPause = () => {
    if (playerRef.current.getPlayerState() === window.YT.PlayerState.PLAYING) {
      playerRef.current.pauseVideo();
    } else {
      playerRef.current.playVideo();
    }
  };

  const handleSeek = (event) => {
    const seekTime = Number(event.target.value); // Get the value from range input
    playerRef.current.seekTo(seekTime, true);
  };

  const convertSecondsToMinuteSecond = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    currentFretboardSettingsRef.current = currentFretboardSettings;
  }, [currentFretboardSettings]);

  const handleFretUpdate = (startFret: number, frets: number) => {
    // console.log(`User updated frets: startFret=${startFret}, frets=${frets}`);
    setCurrentFretboardSettings({
      ...currentFretboardSettings, // current state
      startFret,
      frets,
    });
    // setUserMadeChanges(true);
  };

  const handleOrderUpdate = (order: 'ascending' | 'descending' | 'random') => {
    // console.log(`User updated order: ${order}`);
    setCurrentFretboardSettings((prevSettings) => ({
      ...prevSettings,
      order,
    }));
  };

  const handleIncrementUpdate = (incrementFactor: number) => {
    // console.log(`User updated increment factor: ${incrementFactor}`);
    setCurrentFretboardSettings((prevSettings) => ({
      ...prevSettings,
      incrementFactor,
    }));
  };

  const handleUserFretInputChange = (
    newStartFret: number,
    newFrets: number
  ) => {
    // Update the state that binds to the user inputs
    setUserFretInputs({
      startFret: newStartFret,
      frets: newFrets,
    });

    // Also update the internal state that determines what's rendered
    handleFretUpdate(newStartFret, newFrets);
  };
  console.log('Rendering Fretboard with props:', detectedNote);

  const handleUserSelectedScaleChange = (selectedScale) => {
    // Update both the full scale name for display purposes
    // setDisplayedScale(selectedScale);

    // And the separate scale and mode for logic purposes
    const [scale, mode] = selectedScale.split(' ');
    setCurrentScaleAndMode({ scale, mode }); // Assuming you have a state to keep track of this
  };

  return (
    <div>
      <button
        onClick={() => addSongToSetlist(songId, setlistId)}
        className="add-song-button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-plus"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a.5.5 0 0 1 .5.5v7h7a.5.5 0 0 1 0 1h-7v7a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5v-7H0a.5.5 0 0 1 0-1h7V.5A.5.5 0 0 1 8 0z" />
        </svg>
        Add to Setlist
      </button>

      {/* {console.log(
        '[SongPage] Rendering Fretboard with props',
        currentFretboardSettings
      )} */}
      <Fretboard
        songId={songId}
        key={songId}
        displayedScale={displayedScale}
        sections={sections}
        userStartFret={userFretInputs.startFret}
        userFrets={userFretInputs.frets}
        onUserFretInputChange={handleUserFretInputChange}
        startFret={currentFretboardSettings.startFret}
        frets={currentFretboardSettings.frets}
        order={currentFretboardSettings.order}
        incrementFactor={currentFretboardSettings.incrementFactor}
        highlightedNote={detectedNote?.note}
        highlightedFret={detectedNote?.fret} // Passing the detected note to the Fretboard component
        onFretUpdate={handleFretUpdate}
        onOrderUpdate={handleOrderUpdate}
        onIncrementUpdate={handleIncrementUpdate}
        onUserSelectedScaleChange={handleUserSelectedScaleChange}
      />
      {/* Boundary management UI */}
      <input
        type="text"
        value={tempBoundary}
        onChange={(e) => setTempBoundary((e.target as HTMLInputElement).value)}
        placeholder="Add new boundary (e.g., 1:23)"
      />
      <button onClick={handleAddBoundary}>Add Boundary</button>
      {userBoundaries.map((boundary, index) => (
        <div key={index}>
          {boundary}
          <button onClick={() => handleRemoveBoundary(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleSaveBoundaries}>Save Boundaries</button>
    </div>
  );
};

export default SongPage;
