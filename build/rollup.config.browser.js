import base from "./rollup.config.base";
import { uglify } from "rollup-plugin-uglify";

const config = Object.assign({}, base, {
  output: {
    exports: "named",
    name: "index",
    file: "lib/index.min.js",
    format: "iife",
  },
});

config.plugins.push(uglify());

export default config;
