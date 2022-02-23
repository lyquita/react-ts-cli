import path from "path";
// import { Configuration, HotModuleReplacementPlugin } from "webpack";
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
import { Configuration as WebpackConfiguration } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
}

const config: Configuration = {
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
    ],
};

export default config;