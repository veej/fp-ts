const path = require('path')

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [{ test: /\.tsx?$|\.jsx?$/, loader: 'awesome-typescript-loader', exclude: /node_modules/ }]
  }
}
