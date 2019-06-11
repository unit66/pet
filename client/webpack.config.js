const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return{
    mode: 'development',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'js/bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'public')
    },
    plugins: [
      new webpack.DefinePlugin({ 'process.env.API_URL': JSON.stringify(env.API_URL) })
    ]
  }
};
