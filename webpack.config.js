// webpack.config.js
const path = require('path');

module.exports = {
mode: 'production',
  entry: './src/Headernav.js', // Path to your component entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'Headernav.bundle.js', // Output filename
    library: 'Headernav', // Name of the library
    libraryTarget: 'umd', // Universal Module Definition
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
};
