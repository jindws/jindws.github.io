import webpackConfig from "./webpack.config.js";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  ...webpackConfig,
  mode: "development",
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.temp.html",
      excludeChunks: ["sw"],
    }),
  ],
};
