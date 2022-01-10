/* eslint-disable no-undef */

const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /\/workspace\/node_modules/,
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.s?css$/,
      },
    ],
  },
  devtool: "eval-cheap-module-source-map", // not production safe, shows correct source files when observing the page in the browser
  devServer: {
    contentBase: path.join(__dirname, "public"),
  },
};
