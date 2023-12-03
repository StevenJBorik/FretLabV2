import { h, FunctionalComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import * as fretboards from 'fretboards'; // Assume this is a utility for rendering fretboards.
import './Fretboard.css';

interface FretboardProps {
  displayedScale: string;
  songId: string;
  sections: string[];
  startFret: number;
  frets: number;
  order: 'ascending' | 'descending' | 'random';
  incrementFactor: number;
  highlightedNotes?: string[];
  highlightedNote: string;
  highlightedFret: number;
  onFretUpdate?: (startFret: number, frets: number) => void;
}

const Fretboard: FunctionalComponent<FretboardProps> = ({
  displayedScale,
  sections,
  startFret: initialStartFret, // Use a different name for the prop
  frets: initialFrets, // Use a different name for the prop
  order: initialOrder, // Use a different name for the prop
  incrementFactor: initialIncrementFactor, // Use a different name for the prop
  highlightedNotes = [],
  onFretUpdate,
  highlightedNote,
  highlightedFret,
  songId,
}) => {
  const fretboardRef = useRef<HTMLDivElement>(null);
  const [currentScale, setCurrentScale] = useState<string>(displayedScale);
  const [currentStartFret, setCurrentStartFret] =
    useState<number>(initialStartFret);
  const [currentFrets, setCurrentFrets] = useState<number>(initialFrets);
  const [selectedGuitarType, setSelectedGuitarType] =
    useState<string>('guitar6');
  const [selectedTuning, setSelectedTuning] = useState<string>('standard');
  const [order, setOrder] = useState<'ascending' | 'descending' | 'random'>(
    initialOrder
  );
  const [incrementFactor, setIncrementFactor] = useState<number>(
    initialIncrementFactor
  );
  const [highlightNotes, setHighlightNotes] = useState<boolean>(true);
  const [result, setResult] = useState<string | null>(null);
  const [scaleOptions, setScaleOptions] = useState<string[]>([]);

  const tuningsMap = {
    bass4: ['standard'],
    guitar6: ['standard', 'E_4ths', 'Drop_D', 'G_open', 'DADGAD'],
    guitar7: ['standard', 'E_4ths'],
  };

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

  const fretPositions = {
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

  useEffect(() => {
    // Update rendering logic to include highlighting based on the detected note
    renderFretboardWithHighlight(highlightedNote, highlightedFret);
  }, [highlightedNote]);

  const renderFretboardWithHighlight = (detectedNote, detectedFret) => {
    // Assuming you have a state to track if notes should be highlighted
    if (highlightNotes) {
      // Replace `this.state.highlightNotes` with your state variable
      const fretboardContainer = document.querySelector('.fretboard');

      if (!fretboardContainer) {
        console.error('Fretboard container not found');
        return;
      }

      const allCircleElements =
        fretboardContainer.querySelectorAll('circle.note');

      allCircleElements.forEach((circleElement) => {
        if (circleElement instanceof SVGElement) {
          circleElement.classList.remove('highlight');
          circleElement.style.fill = 'white';
        }
      });

      if (detectedNote && detectedFret !== undefined) {
        const noteData = noteMappings[detectedNote]; // Ensure `noteMappings` is accessible here

        if (noteData) {
          noteData.forEach((data) => {
            if (data.fret === detectedFret) {
              const relativeFret = detectedFret - initialStartFret; // Use state
              const fretPosition = fretPositions[relativeFret]; // Ensure `fretPositions` is accessible

              let matchingCircle = Array.from(allCircleElements).find(
                (circleElement) =>
                  circleElement instanceof SVGElement &&
                  parseFloat(circleElement.getAttribute('cx')) ===
                    fretPosition &&
                  circleElement.firstElementChild &&
                  circleElement.firstElementChild.textContent.trim() ===
                    detectedNote
              );

              if (matchingCircle && matchingCircle instanceof SVGElement) {
                matchingCircle.classList.add('highlight');
                matchingCircle.style.fill = 'green';
              }
            }
          });
        }
      }
    } else {
      const fretboardContainer = document.querySelector('.fretboard');
      const allCircleElements =
        fretboardContainer.querySelectorAll('circle.note');

      allCircleElements.forEach((circleElement) => {
        if (circleElement instanceof SVGElement) {
          circleElement.classList.remove('highlight');
          circleElement.style.fill = 'white';
        }
      });
    }
  };

  // Renders the fretboard with the given scale, tuning, and fret range.
  const renderFretboard = () => {
    if (fretboardRef.current) {
      fretboardRef.current.innerHTML = ''; // Clear existing fretboard
    }
    const currentTuning =
      fretboards.Tunings[selectedGuitarType][selectedTuning];
    const stringCountMap = {
      bass4: 4,
      guitar6: 6,
      guitar7: 7,
    };
    const stringCount = stringCountMap[selectedGuitarType];

    // Initialize the fretboard with the selected tuning and string count.
    const fretboard = fretboards.Fretboard({
      tuning: currentTuning,
      strings: stringCount,
      frets: initialFrets,
      startFret: initialStartFret,
      showTitle: true,
    });

    // Add the scale to the fretboard and render it.
    if (displayedScale) {
      fretboard.add(displayedScale).paint();
      fretboardRef.current = fretboard; // Store the fretboard instance for later use.
    } else {
      console.error('displayedScale is null or undefined');
    }
  };

  useEffect(() => {
    // Render the new fretboard
    renderFretboard();

    // Cleanup function
    return () => {
      const fretboardContainers = document.getElementsByClassName('fretboard');
      console.log('fretboard container', fretboardContainers);
      for (let i = 0; i < fretboardContainers.length; i++) {
        fretboardContainers[i].innerHTML = '';
      }
    };
  }, [
    displayedScale,
    selectedGuitarType,
    selectedTuning,
    initialStartFret,
    initialFrets,
    order,
    incrementFactor,
    songId,
  ]);

  const handleGuitarTypeChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const newGuitarType = target.value;
    console.log('Guitar type changed to:', newGuitarType);

    const defaultTuningForType: { [key: string]: string } = {
      bass4: 'standard',
      guitar6: 'standard',
      guitar7: 'standard',
    };

    setSelectedGuitarType(newGuitarType);
    setSelectedTuning(defaultTuningForType[newGuitarType] || 'standard');
  };

  const handleTuningChange = (event) => {
    setSelectedTuning(event.target.value);
  };
  const handleFretsChange = (event: Event) => {
    const frets = Number((event.target as HTMLInputElement).value);
    setCurrentFrets(frets);
  };

  const handleStartFretChange = (event: Event) => {
    const startFret = Number((event.target as HTMLInputElement).value);
    setCurrentStartFret(startFret);
  };

  const handleOrderChange = (event: Event) => {
    const target = event.target as HTMLSelectElement; // Type assertion
    const order = target.value as 'ascending' | 'descending' | 'random';
    setOrder(order);
  };

  const handleIncrementFactorChange = (event: Event) => {
    const incrementFactor = Number((event.target as HTMLInputElement).value);
    setIncrementFactor(incrementFactor);
  };

  const toggleHighlight = () => {
    setHighlightNotes((prevHighlightNotes) => !prevHighlightNotes);
  };

  useEffect(() => {
    // Whenever 'result' changes, update scale options
    if (result) {
      setScaleOptions(getScaleOptions(result));
    } else {
      setScaleOptions([]);
    }
  }, [result]);

  const changeScale = (selectedScaleType: string) => {
    // Implement the logic to change the scale
    let rootNote = currentScale.split(' ')[0];
    rootNote = rootNote.charAt(0).toUpperCase() + rootNote.slice(1);
    const newScale = `${rootNote} ${selectedScaleType}`;
    setCurrentScale(newScale); // Update the current scale
    // Call any additional functions if necessary to reflect the change
  };

  const getScaleOptions = (scale: string) => {
    console.log('in getScaleOptions..');
    console.log('resulting scale: ', scale);

    const majorOptions = ['ionian', 'lydian', 'mixolydian'];
    const minorOptions = [
      'aeolian',
      'dorian',
      'phrygian',
      'harmonic-minor',
      'melodic-minor',
    ];

    if (scale.includes('Major')) {
      return majorOptions;
    } else if (scale.includes('Minor') || scale.includes('aeolian')) {
      return minorOptions;
    } else {
      return []; // or handle other scales as needed
    }
  };

  return (
    <div className="song-page-container">
      <div className="youtube-container">
        <div id="youtube-player"></div>{' '}
        {/* YouTube player will be rendered here */}
      </div>
      <div id="fretboard-container" ref={fretboardRef}>
        <label htmlFor="guitar-type-select">Select Guitar Type:</label>
        <select
          id="guitar-type-select"
          value={selectedGuitarType}
          onChange={handleGuitarTypeChange}
        >
          <option value="bass4">Bass (4-string)</option>
          <option value="guitar6">Guitar (6-string)</option>
          <option value="guitar7">Guitar (7-string)</option>
        </select>

        <label htmlFor="tuning-select">Select Tuning:</label>
        <select
          id="tuning-select"
          value={selectedTuning}
          onChange={handleTuningChange}
        >
          {tuningsMap[selectedGuitarType].map((tuning) => (
            <option key={tuning} value={tuning}>
              {tuning.replace(/_/g, ' ')}
            </option>
          ))}
        </select>
        <br />
        {result && (
          <div>
            Result: {result}
            <div>
              {scaleOptions.length > 0 &&
                scaleOptions.map((scale) => (
                  <button key={scale} onClick={() => changeScale(scale)}>
                    {scale}
                  </button>
                ))}
            </div>
          </div>
        )}
        <br />
        <label htmlFor="frets">End Fret:</label>
        <input
          id="frets"
          type="number"
          min="1"
          max="24"
          value={initialFrets}
          onChange={handleFretsChange}
        />
        <br />
        <label htmlFor="start-fret">Start Fret:</label>
        <input
          id="start-fret"
          type="number"
          min="0"
          max="24"
          value={initialStartFret}
          onChange={handleStartFretChange}
        />
        <br />
        <label htmlFor="increment-factor">Increment Factor:</label>
        <input
          id="increment-factor"
          type="number"
          min="1"
          max="24"
          value={incrementFactor}
          onChange={handleIncrementFactorChange}
        />
        <br />
        <label htmlFor="order">Order:</label>
        <select id="order" value={order} onChange={handleOrderChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
          <option value="random">Random</option>
        </select>
        <button onClick={toggleHighlight}>Toggle Note Highlighting</button>
      </div>
    </div>
  );
};

export default Fretboard;
