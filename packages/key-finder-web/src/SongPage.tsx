import { h, FunctionalComponent } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { route } from 'preact-router';
import Fretboard from './Fretboard';
import { PitchDetector } from 'pitchy';
import './SongPage.css';

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
    console.log('Fetch response:', response);
    if (!response.ok) {
      throw new Error('Song data could not be fetched');
    }
    const songData = await response.json();
    return songData;
  } catch (error) {
    console.error('fetchSongData error:', error);

    route('/'); // Redirect to home if there's an error
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
  const [currentFretboardSettings, setCurrentFretboardSettings] = useState({
    startFret: 0,
    frets: 24,
    order: 'ascending' as 'ascending' | 'descending' | 'random', // Explicitly declare the type
    incrementFactor: 0,
  });

  const playerRef = useRef(null); // Reference for the YouTube player
  const debouncedHandleNoteDetection = useRef<
    ((frequency: number | null) => void) | null
  >(null);

  console.log('Song ID: ', songId);

  useEffect(() => {
    debouncedHandleNoteDetection.current = debounce(handleNoteDetection, 150);
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
    startListeningForNotes();
  }, []);

  const computeThresholds = () => {
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
    setThresholds(newThresholds);
  };

  const startListeningForNotes = () => {
    const SILENCE_THRESHOLD = 0.09;
    let detector;
    let lastProcessedTime = 0;
    const PROCESS_INTERVAL = 50;
    const HOLD_TIME = 150;
    let lastDetectedPitchTime = 0;
    let lastDetectedPitch = null;
    let previousPitches = [];
    const MAX_PITCHES = 2;

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
            previousPitches.push(pitch);
            if (previousPitches.length > MAX_PITCHES) {
              previousPitches.shift();
            }
            const averagePitch =
              previousPitches.reduce((a, b) => a + b) / previousPitches.length;

            const currentTime = Date.now();
            if (
              currentTime - lastDetectedPitchTime > HOLD_TIME ||
              !lastDetectedPitch
            ) {
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
        const audioContext = new AudioContext();
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

  const getNoteFromFrequency = (
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

    for (const note in noteMappings) {
      const noteData = noteMappings[note];
      noteData.forEach((data) => {
        const { min, max } = thresholds[data.frequency];
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

  const handleNoteDetection = (frequency) => {
    if (frequency !== null) {
      let potentialMatches = getNoteFromFrequency(frequency);
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
          match.fret >= currentFretboardSettings.startFret &&
          match.fret <=
            currentFretboardSettings.startFret + currentFretboardSettings.frets
        );
      });

      const distanceToLastFret = (match) => Math.abs(detectedFret - match.fret);
      potentialMatches.sort(
        (a, b) => distanceToLastFret(a) - distanceToLastFret(b)
      );
      let probableMatch = potentialMatches[0];
      if (probableMatch) {
        setDetectedNote({
          note: probableMatch.note,
          fret: probableMatch.fret,
          string: probableMatch.string,
        });
        setLastValidNote(probableMatch.note);
        setLastValidFret(probableMatch.fret);
        setLastValidString(probableMatch.string);
        setDetectedFret(probableMatch.fret); // Update the detected fret
        // updateFretboardHighlights(probableMatch.note, probableMatch.fret);
      } else if (detectedNote) {
        // Use last valid values
        setDetectedNote({
          note: lastValidNote,
          fret: lastValidFret,
          string: lastValidString,
        });
      }
    }
  };

  useEffect(() => {
    // Other code...

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
        console.log('Updating state with new song data', songData);
        setVideoId(songData.videoId);
        setDisplayedScale(songData.key);
        setSections(songData.sections);
        console.log('displayedScale set to:', songData.key); // Log to check
        console.log('sections returned from api', songData.sections);
      } else {
        route('/');
      }
    };

    fetchData();
    return () => {
      console.log('Cleaning up after song ID:', songId);
      isMounted = false; // Set the flag to false when the component unmounts

      // Perform any other cleanup actions, such as invalidating timers, canceling API requests, or removing event listeners
      if (playerRef.current) {
        playerRef.current.destroy(); // This will destroy the YouTube player instance
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

  const loadYouTubeIframeAPI = () => {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
  };

  const onPlayerError = (event) => {
    console.error('Player Error:', event.data);
  };

  const onYouTubeIframeAPIReady = () => {
    console.log('video ID: ', videoId);
    playerRef.current = new window.YT.Player('youtube-player', {
      height: '390',
      width: '640',
      videoId: videoId,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: onPlayerError, // Add this line
      },
    });
  };
  console.log('Youtube Iframe API is ready');

  useEffect(() => {
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    loadYouTubeIframeAPI();
  }, []);

  const onPlayerReady = (event) => {
    console.log('Youtube Player is ready.');
  };

  // Function to handle player state changes
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      console.log('Youtube Player state has changed.');
      const currentTime = playerRef.current.getCurrentTime();
      checkAndUpdateFretboard(currentTime);
    }
  };

  const checkAndUpdateFretboard = (currentTime) => {
    const formattedTime = convertSecondsToMinuteSecond(Math.round(currentTime));

    const matchedBoundary = sections.find((boundary) =>
      boundary.includes(formattedTime)
    );

    if (matchedBoundary) {
      updateFretboardScale();
    }
  };

  const updateFretboardScale = () => {
    let { startFret, frets, order, incrementFactor } = currentFretboardSettings;

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

    setCurrentFretboardSettings((prevSettings) => ({
      ...prevSettings,
      startFret: nextStartFret,
      frets: nextFretSpan,
    }));
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

  return (
    <div>
      {/* YouTube player will be rendered here */}
      <Fretboard
        songId={songId}
        key={songId}
        displayedScale={displayedScale}
        sections={sections}
        startFret={currentFretboardSettings.startFret}
        frets={currentFretboardSettings.frets}
        order={currentFretboardSettings.order}
        incrementFactor={currentFretboardSettings.incrementFactor}
        highlightedNote={detectedNote?.note}
        highlightedFret={detectedNote?.fret} // Passing the detected note to the Fretboard component
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
