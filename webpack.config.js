module.exports = {
  entry: './webpack-play/index.js',
  output: { path: __dirname, filename: './webpack-play/bundle.js' },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
