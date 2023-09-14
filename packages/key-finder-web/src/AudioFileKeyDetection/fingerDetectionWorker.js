// guitarVisionWorker.js

importScripts(
  'https://cdn.jsdelivr.net/npm/opencv.js',
  'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm',
  'https://docs.opencv.org/4.5.4/opencv.js'
);

let opencvIsReady = false;
let handLandmarker;
let handConnections;
let runningMode = 'IMAGE';
let lastVideoTime;
let results;

cv.onRuntimeInitialized = () => {
  opencvIsReady = true;
};

const preprocessImage = (image) => {
  // ... [Your preprocessImage function code here]
};

const detectStrings = (edgesImage) => {
  // ... [Your detectStrings function code here]
};

const detectFrets = (edgesImage) => {
  // ... [Your detectFrets function code here]
};

const createHandLandmarker = async (mode) => {
  console.log('passed from activateWebcam to createHandLandmarker');

  if (mode) {
    // If the runningMode is sent from the main thread, update it
    runningMode = mode;
  }

  try {
    // Since we can't use dynamic imports, assuming the visionModule.js has been imported using importScripts at the top
    const { HandLandmarker, FilesetResolver } = self; // 'self' refers to the worker's global scope

    const vision = await FilesetResolver.forVisionTasks(
      'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm'
    );

    handLandmarker = await HandLandmarker.createFromOptions(vision, {
      baseOptions: {
        modelAssetPath: `https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task`,
        delegate: 'GPU',
      },
      runningMode: runningMode,
      numHands: 2,
    });

    handConnections = HandLandmarker.HAND_CONNECTIONS;

    postMessage({
      type: 'handLandmarkerCreated',
      message: 'Hand landmarker and connections created successfully!',
    });

    console.log('HandLandmarker and connections initialized');
  } catch (error) {
    postMessage({
      type: 'error',
      message: 'Error in createHandLandmarker',
      error: error.toString(),
    });
  }
};

const predictWebcam = async (videoRef, canvasCtx) => {
  // ... [Your predictWebcam function code here]
};

onmessage = async (e) => {
  switch (e.data.command) {
    case 'initialize':
      await createHandLandmarker();
      break;
    case 'predictWebcam':
      if (opencvIsReady) {
        await predictWebcam(e.data.videoRef, e.data.canvasCtx);
      } else {
        postMessage({ status: 'OpenCV not ready' });
      }
      break;
    default:
      postMessage({ status: 'Unknown command' });
  }
};
