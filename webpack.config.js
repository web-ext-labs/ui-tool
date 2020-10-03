const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const path = require('path');

module.exports = {
  entry: './src/script.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'build.js',
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}
