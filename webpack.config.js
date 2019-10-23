
module.exports = {
  entry: './client/components/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [
          /node_modules/,
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
        resolve: { extensions: ['.js', '.jsx'] },
      },
      {
        test: [/\.css$/],
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          },
        }],
      },
    ],
  },
};
