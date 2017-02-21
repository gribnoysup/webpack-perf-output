module.exports = {
  performance: {
    hints: 'warning'
  },

  entry: {
    entry0: './src/entry0.js',
    entry1: './src/entry1.js'
  },

  output: {
    filename: './build/[name].js'
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: ['node_modules'],
      use: [{
        loader: 'babel-loader'
      }]
    }]
  }


}
