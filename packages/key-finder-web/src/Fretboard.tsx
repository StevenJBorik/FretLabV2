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
  onOrderUpdate?: (order: 'ascending' | 'descending' | 'random') => void;
  onIncrementUpdate?: (incrementFactor: number) => void;
  userStartFret: number;
  userFrets: number;
  onUserFretInputChange: (newStartFret: number, newFrets: number) => void;
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
  onOrderUpdate,
  onIncrementUpdate,
  highlightedNote,
  highlightedFret,
  songId,
  userStartFret,
  userFrets,
  onUserFretInputChange,
}) => {
  console.log('[Fretboard] Initial props', {
    displayedScale,
    initialStartFret,
    initialFrets,
  });
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
  const [result, setResult] = useState<string | null>(displayedScale);
  const [scaleOptions, setScaleOptions] = useState<string[]>([]);
  const [isLeftHanded, setIsLeftHanded] = useState(false);
  const [userSelectedScale, setUserSelectedScale] = useState<string | null>(
    null
  );

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
    console.log('useEffect triggered in Fretboard');
    console.log('highlightedNote:', highlightedNote);
    console.log('highlightedFret:', highlightedFret);
    // Update rendering logic to include highlighting based on the detected note
    renderFretboardWithHighlight(highlightedNote, highlightedFret);
  }, [highlightedNote, highlightedFret]);

  const renderFretboardWithHighlight = (detectedNote, detectedFret) => {
    console.log('renderFretboardWithHighlight called');
    console.log('detectedNote:', detectedNote);
    console.log('detectedFret:', detectedFret);
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
  // const renderFretboard = (scale) => {
  //   if (fretboardRef.current) {
  //     fretboardRef.current.innerHTML = ''; // Clear existing fretboard
  //   }
  //   const currentTuning =
  //     fretboards.Tunings[selectedGuitarType][selectedTuning];
  //   const stringCountMap = {
  //     bass4: 4,
  //     guitar6: 6,
  //     guitar7: 7,
  //   };
  //   const stringCount = stringCountMap[selectedGuitarType];

  //   // Initialize the fretboard with the selected tuning and string count.
  //   const fretboard = fretboards.Fretboard({
  //     tuning: currentTuning,
  //     strings: stringCount,
  //     frets: initialFrets,
  //     startFret: initialStartFret,
  //     showTitle: true,
  //   });

  //   // Add the scale to the fretboard and render it.
  //   if (displayedScale) {

  //     console.log("displayed scale in renderFretboard method", displayedScale);
  //     fretboard.add(displayedScale).paint();
  //     fretboardRef.current = fretboard; // Store the fretboard instance for later use.
  //   } else {
  //     console.error('displayedScale is null or undefined');
  //   }
  // };

  const toggleLeftHanded = () => {
    // Just toggle the state, don't interact with the fretboard directly
    setIsLeftHanded(!isLeftHanded);
  };

  const renderFretboard = () => {
    const scaleToRender = userSelectedScale || displayedScale;
    // Get all previous fretboard containers
    const previousFretboardContainers =
      document.getElementsByClassName('fretboard');

    // Convert HTMLCollection to Array
    const containersArray = Array.from(previousFretboardContainers);

    // Iterate over each container and remove it from the DOM
    containersArray.forEach((container) => {
      container.parentNode.removeChild(container);
    });
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
      frets: currentFrets,
      startFret: currentStartFret,
      leftHanded: isLeftHanded, // Use the state variable here
      showTitle: true,
    });

    // Add the scale to the fretboard and render it.
    if (scaleToRender) {
      // console.log('[Fretboard] Rendering fretboard with', {
      //   currentStartFret,
      //   currentFrets,
      // });
      fretboard.add(scaleToRender).paint();
      fretboardRef.current = fretboard; // Store the fretboard instance for later use.
    } else {
      console.error('Scale is null or undefined');
    }
  };

  // useeffect #3 - renders 2nd fretboard but rerenders guitar type functionality correctly
  useEffect(() => {
    // Render the new fretboard
    renderFretboard();
    // Cleanup function
    return () => {
      const fretboardContainers = document.getElementsByClassName('fretboard');
      // console.log('fretboard container', fretboardContainers);
      for (let i = 0; i < fretboardContainers.length; i++) {
        fretboardContainers[i].innerHTML = '';
      }
    };
  }, [
    userSelectedScale,
    displayedScale,
    selectedGuitarType,
    selectedTuning,
    currentStartFret, // Changed from initialStartFret to currentStartFret
    currentFrets,
    order,
    incrementFactor,
    songId,
    isLeftHanded,
  ]);

  // useEffect(() => {
  //   console.log('[Fretboard] Props updated', {
  //     currentFrets,
  //     currentStartFret,
  //   });
  //   setCurrentStartFret(currentStartFret);
  //   setCurrentFrets(currentFrets);
  // }, [currentStartFret, currentFrets]); // Update state when initial props change

  useEffect(() => {
    setCurrentStartFret(initialStartFret);
    setCurrentFrets(initialFrets);
  }, [initialStartFret, initialFrets]); // Listen to changes in these props

  const handleGuitarTypeChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;
    const newGuitarType = target.value;
    // console.log('Guitar type changed to:', newGuitarType);

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
    const newFrets = Number((event.target as HTMLInputElement).value);
    // console.log(`[Fretboard] handleFretsChange: New frets value = ${newFrets}`);
    setCurrentFrets(newFrets);
    onFretUpdate?.(currentStartFret, newFrets); // Call handleFretUpdate in SongPage
  };

  const handleStartFretChange = (event: Event) => {
    const newStartFret = Number((event.target as HTMLInputElement).value);
    // console.log(
    //   `[Fretboard] handleStartFretChange: New startFret value = ${newStartFret}`
    // );
    setCurrentStartFret(newStartFret);
    onFretUpdate?.(newStartFret, currentFrets); // Call handleFretUpdate in SongPage
  };

  const handleOrderChange = (event: Event) => {
    const target = event.target as HTMLSelectElement; // Type assertion
    const order = target.value as 'ascending' | 'descending' | 'random';
    setOrder(order);
    onOrderUpdate?.(order);
  };

  const handleIncrementFactorChange = (event: Event) => {
    const incrementFactor = Number((event.target as HTMLInputElement).value);
    setIncrementFactor(incrementFactor);
    onIncrementUpdate?.(incrementFactor);
  };

  const handleUserStartFretChange = (event: Event) => {
    const newStartFret = Number((event.target as HTMLInputElement).value);
    onUserFretInputChange(newStartFret, userFrets); // Update the parent component's state
  };

  // Event handler for user input change on frets
  const handleUserFretsChange = (event: Event) => {
    const newFrets = Number((event.target as HTMLInputElement).value);
    onUserFretInputChange(userStartFret, newFrets); // Update the parent component's state
  };

  const toggleHighlight = () => {
    setHighlightNotes((prevHighlightNotes) => !prevHighlightNotes);
  };
  // Inside Fretboard component

  // useeffect# 4
  useEffect(() => {
    if (displayedScale) {
      setCurrentScale(displayedScale);
    }
  }, [displayedScale]);

  useEffect(() => {
    // Update scale options whenever displayedScale changes
    if (displayedScale) {
      setResult(displayedScale); // Set the current scale to the new displayedScale
      setScaleOptions(getScaleOptions(displayedScale));
    } else {
      setResult(null); // Clear the result if no scale is displayed
      setScaleOptions([]); // Clear the scale options
    }
  }, [displayedScale]);

  // useEffect(() => {
  //   setCurrentScale(displayedScale);
  //   // This effect should only run once on mount, hence the empty dependency array.
  // }, []);

  // useffect comment #1
  // // This effect updates the available scale options based on the currentScale.
  // useEffect(() => {
  //   if (currentScale) {
  //     setScaleOptions(getScaleOptions(currentScale));
  //   }
  // }, [currentScale]);

  // const changeScale = (selectedScaleType: string) => {
  //   // Check if currentScale is a string and not null
  //   if (typeof currentScale === 'string') {
  //     let rootNote = currentScale.split(' ')[0];
  //     rootNote = rootNote.charAt(0) + rootNote.slice(1);
  //     const newScale = `${rootNote} ${selectedScaleType}`;
  //     setCurrentScale(newScale); // Update the current scale
  //     console.log("new scale", newScale);
  //     renderFretboard(newScale); // Call the render function with the new scale
  //   } else {
  //     console.error('currentScale is null or not a string:', currentScale);
  //   }
  // };

  // const changeScale = (selectedScaleType: string) => {
  //   if (typeof currentScale === 'string') {
  //     let rootNote = currentScale.split(' ')[0];
  //     rootNote = rootNote.charAt(0).toUpperCase() + rootNote.slice(1);
  //     const newScale = `${rootNote} ${selectedScaleType}`;
  //     setCurrentScale(newScale); // Update the current scale
  //     console.log("new scale selected by user", newScale);
  //     renderFretboard(newScale); // Call the render function with the new scale
  //   } else {
  //     console.error('currentScale is null or not a string:', currentScale);
  //   }
  // };

  const changeScale = (selectedScaleType: string) => {
    console.log('changeScale:', { currentScale, displayedScale });
    if (typeof currentScale === 'string') {
      let rootNote = currentScale.split(' ')[0];
      rootNote = rootNote.charAt(0).toUpperCase() + rootNote.slice(1);
      const newScale = `${rootNote} ${selectedScaleType}`;
      setCurrentScale(newScale); // Update the current scale
      setUserSelectedScale(newScale); // Set the user-selected scale
      // No need to call renderFretboard here as the useEffect hook will handle it
    } else {
      console.error('currentScale is null or not a string:', currentScale);
    }
  };

  // useeffect comment #2 - this rendered the last of 3 scales
  // useEffect(() => {
  //   renderFretboard(currentScale); // Render the fretboard with the current scale
  // }, [currentScale]); // Depend on 'currentScale'

  const getScaleOptions = (scale: string) => {
    console.log('in getScaleOptions..');
    console.log('resulting scale: ', scale);

    const majorOptions = ['lydian', 'mixolydian'];
    const minorOptions = [
      'dorian',
      'phrygian',
      'harmonic-minor',
      'melodic-minor',
    ];

    if (scale.includes('major')) {
      return majorOptions;
    } else if (scale.includes('minor') || scale.includes('aeolian')) {
      return minorOptions;
    } else {
      return []; // or handle other scales as needed
    }
  };

  return (
    <div className="song-page-container">
      {/* {console.log('[Fretboard] Current state before rendering', {
        currentStartFret,
        currentFrets,
        initialFrets,
        initialStartFret,
      })} */}
      <div className="youtube-container">
        <div id="youtube-player"></div>{' '}
        {/* YouTube player will be rendered here */}
      </div>
      <div className="controls-container">
        <div className="controls-row">
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
        </div>

        <div className="controls-row">
          {result && (
            <div>
              Key Signature: {result}
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
        </div>

        <div className="controls-row">
          <label htmlFor="frets">End Fret:</label>
          <input
            id="frets"
            type="number"
            min="1"
            max="24"
            value={userFrets}
            onChange={handleUserFretsChange}
          />

          <label htmlFor="start-fret">Start Fret:</label>
          <input
            id="start-fret"
            type="number"
            min="0"
            max="24"
            value={userStartFret}
            onChange={handleUserStartFretChange}
          />
        </div>

        <div className="controls-row">
          <label htmlFor="increment-factor">Increment Factor:</label>
          <input
            id="increment-factor"
            type="number"
            min="1"
            max="24"
            value={incrementFactor}
            onChange={handleIncrementFactorChange}
          />

          <label htmlFor="order">Order:</label>
          <select id="order" value={order} onChange={handleOrderChange}>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
            <option value="random">Random</option>
          </select>
          <button onClick={toggleLeftHanded}>Toggle Left-Handed Mode</button>
          <button onClick={toggleHighlight}>Toggle Note Highlighting</button>
        </div>
      </div>
    </div>
  );
};

export default Fretboard;
