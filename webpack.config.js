
module.exports = {

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/
        ],
        use: {
          loader: "babel-loader"
        }//run babel-loader for any js or jsx files
      }
    ]
  }
};