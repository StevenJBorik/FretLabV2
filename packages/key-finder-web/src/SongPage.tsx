import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { route } from 'preact-router';
import Fretboard from './Fretboard';
import { PitchDetector } from 'pitchy';

declare global {
  interface Window {
    YT: any; // Declaring YT as any
    onYouTubeIframeAPIReady: () => void;
  }
}

const fetchSongData = async (songId) => {
  // Replace with actual API call
  return {
    videoId: 'dQw4w9WgXcQ',
    displayedScale: 'E major',
    sections: ['0:00', '0:15', '0:30'],
  };
};

const SongPage = ({ songId }) => {
  const [videoId, setVideoId] = useState(null);
  const [sections, setSections] = useState([]);
  const [displayedScale, setDisplayedScale] = useState(null);
  const [userBoundaries, setUserBoundaries] = useState([]);
  const [detectedNote, setDetectedNote] = useState(null);
  const [tempBoundary, setTempBoundary] = useState(''); // Temporary boundary input by user
  const [currentFretboardSettings, setCurrentFretboardSettings] = useState({
    startFret: 0,
    frets: 24,
    order: 'ascending' as 'ascending' | 'descending' | 'random', // Explicitly declare the type
    incrementFactor: 0,
  });

  const playerRef = useRef(null); // Reference for the YouTube player

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
                previousPitches.reduce((a, b) => a + b) /
                previousPitches.length;

              const currentTime = Date.now();
              if (
                currentTime - lastDetectedPitchTime > HOLD_TIME ||
                !lastDetectedPitch
              ) {
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
  };

  useEffect(() => {
    // Call startListeningForNotes when component mounts
    startListeningForNotes();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const songData = await fetchSongData(songId);
      if (songData) {
        setVideoId(songData.videoId);
        setDisplayedScale(songData.displayedScale);
        setSections(songData.sections);
      } else {
        route('/');
      }
    };

    fetchData();
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
  const onYouTubeIframeAPIReady = () => {
    playerRef.current = new window.YT.Player('youtube-player', {
      height: '390',
      width: '640',
      videoId: videoId,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
      },
    });
  };

  useEffect(() => {
    window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    loadYouTubeIframeAPI();
  }, []);

  const onPlayerReady = (event) => {
    // Player is ready to use
  };

  // Function to handle player state changes
  const onPlayerStateChange = (event) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      // The player is playing, get the current time
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
        displayedScale={displayedScale}
        sections={sections}
        startFret={currentFretboardSettings.startFret}
        frets={currentFretboardSettings.frets}
        order={currentFretboardSettings.order}
        incrementFactor={currentFretboardSettings.incrementFactor}
        highlightedNote={detectedNote} // Passing the detected note to the Fretboard component
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
      {/* Additional UI components */}
    </div>
  );
};

export default SongPage;
