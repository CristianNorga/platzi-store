import { resolve as _resolve } from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin, { loader as _loader } from 'mini-css-extract-plugin';

export const entry = './src/index.js';
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: 'bundle.js',
};
export const resolve = {
  extensions: ['.js', '.jsx'],
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
        },
      ],
    },
    {
      test: /\.css|.styl$/,
      use: [
        {
          loader: _loader,
        },
        'css-loader',
        'stylus-loader',
      ],
    },
  ],
};
export const devServer = {
  historyApiFallback: true,
};
export const plugins = [
  new HtmlWebPackPlugin({
    template: './public/index.html',
    filename: './index.html',
  }),
  new MiniCssExtractPlugin({
    filename: 'assets/[name].css',
  }),
];
