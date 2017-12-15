import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import { minify } from 'uglify-es'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

export default {
  input: 'src/index.js',
  sourcemap: 'true',
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
  external: ['react', 'react-dom', 'prop-types'],
  plugins: [
    postcss({
      extract: true
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs(),
    replace({
      exclude: 'node_modules/**',
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      )
    }),
    process.env.NODE_ENV === 'production' && filesize(),
    process.env.NODE_ENV === 'production' && uglify({}, minify)
  ]
}
