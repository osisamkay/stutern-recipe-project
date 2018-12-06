require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
console.log(process.env.NODE_ENV);
const config = {
  mode: 'development',
  entry: ['./src/index.js'],
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/docs`,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(png|gif|jpe?g)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpege: {
                progressive: true,
                quality: 80,
              },
              optipng: {
                optimizationLevel: 7,
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Recipe App',
      template: 'src/template.html',
      favicon: 'assets/favicon.ico',
    })
  ],
};

module.exports = config; 
