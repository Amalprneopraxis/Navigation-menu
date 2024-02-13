// webpack.config.js
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/Headernav.js', // Path to your component entry file
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'Headernav.bundle.js', // Output filename
    library: 'Headernav', // Name of the library
    libraryTarget: 'umd', // Output module format
    umdNamedDefine: true, // Define the module's name for AMD
    globalObject: 'this' // Define the global object used,
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
