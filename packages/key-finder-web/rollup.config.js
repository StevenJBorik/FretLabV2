import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import OMT from '@surma/rollup-plugin-off-main-thread';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: 'src/index.tsx',
    output: {
      dir: 'dist',
      format: 'esm',
    },
    plugins: [
      OMT(),
      commonjs({ include: 'node_modules/**' }),
      resolve({ browser: true }),
      typescript(),
      css({ output: 'index.css' }),
    ],
  },
  {
    input: 'src/AudioFileKeyDetection/pitchWorker.js',
    output: {
      file: 'dist/pitchWorker.js',
      format: 'esm',
    },
    plugins: [
      commonjs({ include: 'node_modules/**' }),
      resolve({ browser: true }),
      typescript(),
    ],
  },
];
