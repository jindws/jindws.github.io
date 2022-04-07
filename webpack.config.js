const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.[hash].js",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node-modules/,
        loader: "ts-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node-modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.gif$/,
        exclude: /node-modules/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", "json", ".tsx"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template:'./index.temp.html',
      filename: '../index.html',
    })
  ],
  devServer: {

  },
};
