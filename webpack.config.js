require('dotenv/config');
const path = require('path');

const clientPath = path.join(__dirname, 'client/');
const publicPath = path.join(__dirname, 'server/public/');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx']
  },
  entry: clientPath,
  output: {
    path: publicPath
  },
  module: {
    rules: [
      {
        test: /\.jsx/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              '@babel/plugin-transform-react-jsx'
            ]
          }
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: publicPath,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: process.env.DEV_SERVER_PORT,
    // suggestion from windowsreport
    // proxy: {
    //   '/api': {
    //     target: `http://localhost:${process.env.PORT}`,
    //     secure: false,
    //     changeOrigin: true
    //   }
    // },

    // original
    proxy: {
      '/api': `http://localhost:${process.env.PORT}`
    },

    // another try
    // proxy: {
    //   '*': 'http://[::1]:3000',
    //   secure: false,
    //   changeOrigin: true
    // },
    stats: 'minimal',
    watchContentBase: true
  }
};
