const path = require('path');

module.exports = {
  mode: 'development', // Set the mode to 'development'
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg|mp4)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // Adjust this limit as per your requirement
              fallback: 'file-loader',
              name: '[name].[ext]',
              outputPath: 'images', // Output path for images
            },
          },
        ],
      },
    ],
  },
};
