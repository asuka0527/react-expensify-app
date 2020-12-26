// 1. entry point
// 2. output file
// source =https://webpack.js.org/concepts/#entry
// https://nodejs.org/api/path.html#path_path_join_paths

const path = require("path");
console.log();

module.exports = {
  entry: "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
  },
};

// loader - converting files through webpack (babel,scss)

// aCtion generators - functions that return action object
