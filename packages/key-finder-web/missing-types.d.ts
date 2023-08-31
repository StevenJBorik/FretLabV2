declare module 'omt:*' {
  const value: string;
  export default value;
}

declare module 'https://cdn.jsdelivr.net/npm/essentia.js@0.1.3/dist/essentia.js-core.es.js';
declare module 'https://cdn.jsdelivr.net/npm/essentia.js@0.1.3/dist/essentia-wasm.es.js';

declare module 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0';
declare module 'https://cdn.jsdelivr.net/npm/@mediapipe/drawing_utils/drawing_utils.js';

declare interface AudioAnalyzerNode extends AudioNode {
  getByteTimeDomainData: (array: Uint8Array) => void;
  frequencyBinCount: number;
}

declare interface RecorderWorkletAudioParamMap extends AudioParamMap {
  get: (parameter: string) => AudioParam;
}

declare interface RecorderWorkletNode
  extends Omit<AudioWorkletNode, 'parameters'> {
  parameters: RecorderWorkletAudioParamMap;
}
