import { h, FunctionalComponent } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';

import * as fretboards from 'fretboards'; // Assume this is a utility for rendering fretboards.

interface FretboardProps {
  displayedScale: string;
  sections: string[];
  startFret: number;
  frets: number;
  order: 'ascending' | 'descending' | 'random';
  incrementFactor: number;
  highlightedNotes?: string[];
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

  // Renders the fretboard with the given scale, tuning, and fret range.
  const renderFretboard = () => {
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
    fretboard.add(displayedScale).paint();
    fretboardRef.current = fretboard; // Store the fretboard instance for later use.
  };

  // useEffect to render fretboard when props changes
  useEffect(() => {
    // Effect for handling prop changes.
    renderFretboard();
  }, [
    displayedScale,
    selectedGuitarType,
    selectedTuning,
    initialStartFret,
    initialFrets,
    order,
    incrementFactor,
  ]);

  // Highlight the notes on the fretboard.
  const updateHighlights = () => {
    //   const fretboard = fretboardRef.current;
    //   if (fretboard && highlightedNotes) {
    //     // Highlight notes on the fretboard.
    //     // Assuming 'highlightNotes' is a method provided by the fretboard library.
    //     fretboard.highlightNotes(highlightedNotes);
    //   }
  };

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
  );
};

export default Fretboard;
