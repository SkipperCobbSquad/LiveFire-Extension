const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    background:  './src/background.js',
    foreground: './src/foreground.js',
    styler: './src/styler.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
