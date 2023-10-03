// Since 'import' syntax doesn't work in a worker context directly (as of my last training data),
// we will use importScripts to import the pitchyModule.
import { PitchDetector } from 'pitchy';

let detector = null;
const SILENCE_THRESHOLD = 0.06;

self.onmessage = function (event) {
  switch (event.data.command) {
    case 'initialize':
      if (!detector) {
        detector = PitchDetector.forFloat32Array(event.data.fftSize);
      }
      break;
    case 'process':
      processAudioData(event.data.audioData, event.data.sampleRate);
      break;
    default:
      console.error('Unknown command:', event.data.command);
  }
};

function processAudioData(input, sampleRate) {
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
        console.log('Sending pitch: ', pitch); // Add this line
        self.postMessage({ pitch: pitch });
      } else {
        self.postMessage({ pitch: null });
      }
    } else {
      self.postMessage({ pitch: null });
    }
  } catch (error) {
    self.postMessage({ error: 'Error in processAudioData: ' + error.message });
  }
}

// {
//   targetPlatform: 'browser',
//   pattern: /pitchWorker\.js$/,
// }
