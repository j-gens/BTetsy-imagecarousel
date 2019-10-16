
module.exports = {
  entry: './client/components/app.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/
        ],
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
};