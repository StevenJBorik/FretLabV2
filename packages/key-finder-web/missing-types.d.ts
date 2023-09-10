import AudioFileKeyDetection from './src/AudioFileKeyDetection/AudioFileKeyDetection';

declare module 'omt:*' {
  const value: string;
  export default value;
}

// declare module 'opencv-ts' {
//   const cv: any;
//   export default cv;
// }

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
