const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers:
                      process.env.NODE_ENV === 'development'
                        ? ['last 1 Chrome version']
                        : ['> .5% in FR'],
                  },
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              'babel-plugin-styled-components',
              [
                '@babel/plugin-transform-runtime',
                {
                  absoluteRuntime: false,
                  corejs: false,
                  helpers: true,
                  regenerator: true,
                  useESModules: false,
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
      },
      {
        test: /\.glsl$/i,
        use: [
          {
            loader: 'raw-loader',
            options: {},
          },
        ],
      },
    ].concat(
      process.env.NODE_ENV === 'development'
        ? []
        : [
            {
              test: path.resolve(__dirname, 'src/index.html'),
              loader: 'prerender-loader?string',
            },
          ]
    ),
  },
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Florian Mounier',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 36015,
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    },
  },
}
