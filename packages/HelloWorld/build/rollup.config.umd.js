import base from './rollup.config.base'
import { uglify } from 'rollup-plugin-uglify'

const config = Object.assign({}, base, {
  output: {
    name: 'helloworld',
    file: 'dist/helloworld.umd.js',
    format: 'umd'
  }
})

config.plugins.push(uglify())

export default config