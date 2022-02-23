const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

module.exports = {
  entry: "/src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
  },
  devtool: 'inline-source-map',
  mode:'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
          },
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve:{
    extensions: ['.ts', '.js', '.tsx', '.jsx']
  },
  devServer: {
    static: path.join(__dirname, "build"),
    port:3000,
    compress: true,
    hot: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false
    })
  ],
};