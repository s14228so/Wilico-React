const path = require("path");
const Dotenv = require("dotenv-webpack");

const rules = [
  {
    test: /\.scss/, // 対象となるファイルの拡張子
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: {
          url: false,
          importLoaders: 2
        }
      },
      {
        loader: "sass-loader"
      }
    ]
  },
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
  {
    test: /\.css/,
    use: [
      "style-loader",
      {
        loader: "css-loader",
        options: { url: false }
      }
    ]
  }
];
module.exports = {
  devtool: "#eval-source-map",
  target: "web",
  mode: "development",
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: { rules },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    contentBase: "./",
    port: 3000
  },
  plugins: [new Dotenv()]
};
