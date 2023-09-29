declare module 'omt:*' {
  const value: string;
  export default value;
}

interface Window {
  initializeOpenCV?: () => void;
}

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

declare var MyWorker: {
  prototype: Worker;
  new (stringUrl: string, options?: WorkerOptions): Worker;
};

interface ImportMeta {
  url: string;
}
