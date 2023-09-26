// Since 'import' syntax doesn't work in a worker context directly (as of my last training data),
// we will use importScripts to import the pitchyModule.
// importScripts('./pitchyModule.js');

let audioContext = null;
let analyserNode = null;
let detector = null;

const SILENCE_THRESHOLD = 0.2;

self.onmessage = function (event) {
  switch (event.data.command) {
    case 'initialize':
      audioContext = new AudioContext();
      analyserNode = audioContext.createAnalyser();
      detector = PitchDetector.forFloat32Array(analyserNode.fftSize);
      break;
    case 'start':
      processAudioData();
      break;
    default:
      console.error('Unknown command:', event.data.command);
  }
};

function processAudioData() {
  try {
    const input = new Float32Array(detector.inputLength);
    analyserNode.getFloatTimeDomainData(input);

    let maxAmplitude = -Infinity;
    for (let i = 0; i < input.length; i++) {
      if (input[i] > maxAmplitude) {
        maxAmplitude = input[i];
      }
    }
    if (maxAmplitude > SILENCE_THRESHOLD) {
      const [pitch] = detector.findPitch(input, audioContext.sampleRate);
      if (typeof pitch === 'number') {
        self.postMessage({ pitch: pitch });
      } else {
        self.postMessage({ pitch: null });
      }
    } else {
      self.postMessage({ pitch: null });
    }
  } catch (error) {
    self.postMessage({ error: 'Error in processAudioData: ' + error.message });
  } finally {
    requestAnimationFrame(processAudioData);
  }
}
