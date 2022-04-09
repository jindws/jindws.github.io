import webpackConfig from "./webpack.config.js";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  ...webpackConfig,
  mode: "development",
  plugins: [
    ...webpackConfig.plugins,
    new HtmlWebpackPlugin({
      template: "./index.temp.html",
    }),
  ],
};
