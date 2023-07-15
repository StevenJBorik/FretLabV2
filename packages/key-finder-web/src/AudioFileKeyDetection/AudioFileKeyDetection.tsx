import { h, Component, createRef, RefObject } from 'preact';
import { Link } from 'preact-router';
import AudioFileItem from './AudioFileItem';
import { v4 as uuidv4 } from 'uuid';
import { numberOfThreads } from '../defaults';
import { FileItem } from './AudioFileItem'; // Import the FileItem interface

import './AudioFileKeyDetection.css';

interface Props {}

interface State {
  files: Array<FileItem>;
}

class AudioFileKeyDetection extends Component<Props, State> {
  ref = createRef<HTMLInputElement>();

  state: State = {
    files: [],
  };

  componentDidMount() {
    document.title = 'keyfinder | Key Finder for Audio Files';
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        'content',
        'A web application to find the musical key (root note) of an audio file. Song will be analyzed right in your browser. Select the audio file from your computer to find the root note.'
      );
  }

  handleFileInput = ({ target }: Event): void => {
    console.log('AudioFileKeyDetection - handleFileInput');
    const fileList = (target as HTMLInputElement).files;
    this.setState(({ files }) => {
      let availableThreads = files.reduce((acc, cur) => {
        if (cur.canProcess && !cur.result) return acc - 1;
        return acc;
      }, numberOfThreads);
      for (let fileIdx = 0; fileIdx < fileList.length; fileIdx += 1) {
        let canProcess = false;
        if (availableThreads > 0) {
          canProcess = true;
          availableThreads -= 1;
        }
        const id = uuidv4();
        files.push({
          id,
          canProcess,
          file: fileList[fileIdx],
          result: null,
          digest: null,
          keySignatureNumericValue: null,
          scale: null,
        });
      }
      this.ref.current.value = null;
      return { files };
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

  render(props) {
    console.log('AudioFileKeyDetection - render');
    const { files } = this.state;

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
                onChange={this.handleFileInput}
              />
            </div>
          </div>
        </main>
        {files.map((fileItem) => (
          <AudioFileItem
            key={fileItem.id}
            fileItem={fileItem}
            updateDigest={this.updateDigest}
            updateResult={this.updateResult}
          />
        ))}
      </>
    );
  }
}

export default AudioFileKeyDetection;
