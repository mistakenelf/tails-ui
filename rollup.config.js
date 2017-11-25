import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ],
  external: [
    'react',
    'react-dom'
  ],
  plugins: [
    postcss({}),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}