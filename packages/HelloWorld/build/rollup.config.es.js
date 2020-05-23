import base from './rollup.config.base'

const config = Object.assign({}, base, {
  output: {
    name: 'helloworld',
    file: 'dist/helloworld.esm.js',
    format: 'es'
  },
})

export default config