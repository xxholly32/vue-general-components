import commonjs from 'rollup-plugin-commonjs' 
import json from '@rollup/plugin-json';
import VuePlugin from 'rollup-plugin-vue'

export default {
  input: './src/index.js',
  output: {
    format: 'cjs',
    file: 'dist/index.js'
  },
  plugins: [
    commonjs(),
    json(),
    VuePlugin(/* VuePluginOptions */)
  ]
}