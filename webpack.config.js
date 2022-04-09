const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.tsx",
    sw: "./sw"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
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
        test: /\.(gif|png)$/,
        exclude: /node-modules/,
        use: ["file-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", "json", ".tsx", ".ts", ".png"],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.temp.html",
      filename: "../index.html",
      excludeChunks:['sw']
    }),
  ],
  devServer: {},
};
