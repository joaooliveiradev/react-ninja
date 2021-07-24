module.exports = {
  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'standard'
    }],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: ['style', 'css?modules']
      }]

  }

}
