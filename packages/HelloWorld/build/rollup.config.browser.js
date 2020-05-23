import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    exports: 'named',
    name: 'helloworld',
    file: 'dist/helloworld.min.js',
    format: 'iife'
  },
})

export default config