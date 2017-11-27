import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import filesize from 'rollup-plugin-filesize'
import { minify } from 'uglify-es'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import uglify from 'rollup-plugin-uglify'

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
    'react-dom',
    'prop-types'
  ],
  plugins: [
    postcss({}),
    babel({
      presets: [
        [
          "env",
          {
            modules: false
          }
        ]
      ],
      exclude: 'node_modules/**',
      plugins: ["external-helpers"],
      babelrc: false
    }),
    resolve(),
    commonjs(),
    process.env.NODE_ENV === 'production' && filesize(),
    process.env.NODE_ENV === 'production' && uglify({}, minify),
  ]
}