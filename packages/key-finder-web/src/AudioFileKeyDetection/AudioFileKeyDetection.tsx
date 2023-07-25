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
  sectionBoundaries: number[];
  frets: number; // User input for frets
  startFret: number; // User input for startFret
  order: string; // User input for order
}

class AudioFileKeyDetection extends Component<Props, State> {
  ref = createRef<HTMLInputElement>();

  state: State = {
    files: [],
    sectionBoundaries: [],
    frets: 12, // Default value for frets
    startFret: 0, // Default value for startFret
    order: 'ascending', // Default value for order
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
  }

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    // Check if any changes in state or props that would trigger a re-render
    if (
      this.state.files !== nextState.files ||
      this.state.frets !== nextState.frets ||
      this.state.startFret !== nextState.startFret ||
      this.state.order !== nextState.order
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
      for (let fileIdx = 0; fileIdx < fileList.length; fileIdx += 1) {
        let canProcess = false;
        if (availableThreads > 0) {
          canProcess = true;
          availableThreads -= 1;
        }
        const id = uuidv4();
        newFiles.push({
          id,
          canProcess,
          file: fileList[fileIdx],
          result: null,
          digest: null,
          keySignatureNumericValue: null,
          scale: null,
          frets: null,
          startFret: null,
          order: null,
          getCurrentTimestamp: null,
          normalizedResult: null,
        });

        // Call the API for each selected file
        if (canProcess) {
          (async () => {
            try {
              const formData = new FormData();
              formData.append('file', fileList[fileIdx]);

              const response = await axios.post(
                'http://localhost:5000/api/process-audio',
                formData,
                {
                  headers: {
                    'Content-Type': 'audio/mpeg',
                  },
                }
              );

              // Process the response from the MSAF API and update the state with section boundaries
              const sectionBoundaries = response.data.sections;
              console.log('Section Boundaries', sectionBoundaries);
              this.setState({ sectionBoundaries });
            } catch (error) {
              console.error('Error processing file with MSAF:', error);
            }
          })();
        }
      }
      this.ref.current.value = null;
      return { files: newFiles };
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
    const order = (event.target as HTMLSelectElement).value;
    this.setState({ order });
  };

  render(props) {
    console.log('AudioFileKeyDetection - render');
    const { files, frets, startFret, order } = this.state;

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
              <label for="frets">Number of Frets:</label>
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
            normalizedResult={fileItem.normalizedResult} // Pass the normalizedResult here
            sectionBoundaries={this.state.sectionBoundaries}
            getCurrentTimestamp={this.getCurrentTimestamp} // Pass the prop here
            updateDigest={this.updateDigest}
            updateResult={this.updateResult}
            audioElement={this.audioElement}
          />
        ))}
      </>
    );
  }
}

export default AudioFileKeyDetection;
