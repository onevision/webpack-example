const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.mts",
  module: {
    rules: [
      {
        test: /\.m?ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".mts", ".ts", ".js", ".mjs"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
