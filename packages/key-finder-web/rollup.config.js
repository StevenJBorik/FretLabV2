import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import OMT from '@surma/rollup-plugin-off-main-thread';
import css from 'rollup-plugin-css-only';
import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy';

// rollup.config.js
export default [
  {
    // Main bundle configuration
    input: 'src/index.tsx',
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
    },
    plugins: [
      resolve({ browser: true }),
      commonjs({ include: 'node_modules/**' }),
      typescript(),
      css({ output: 'index.css' }),
      OMT(),
      copy({
        targets: [{ src: 'src/images/*', dest: 'dist/images' }],
      }),
    ],
  },
  {
    // Worker bundle configuration
    input: 'src/AudioFileKeyDetection/pitchWorker.js',
    output: {
      file: 'dist/pitchWorker.js',
      format: 'iife', // Use IIFE for web worker
    },
    plugins: [
      resolve({ browser: true }),
      commonjs({ include: 'node_modules/**' }),
      typescript(),
    ],
  },
];
