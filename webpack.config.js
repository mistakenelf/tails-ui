const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './docs/entry.js',
  output: {
    path: path.join(__dirname, 'docs'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'stylized': path.join(__dirname, 'src/index.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ],
  devServer: {
    contentBase: 'docs/',
    historyApiFallback: true
  }
}