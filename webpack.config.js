const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const fs = require("fs");

fs.readFile(`manifest.json`, (err, buf) => {
  if(err) { return }
  const dir = './dist/manifest.json'
  fs.writeFile(dir, buf,err => {console.log(err)})
})

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
