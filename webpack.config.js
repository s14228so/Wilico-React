const path = require("path");
const Dotenv = require("dotenv-webpack");

const rules = [
  {
    test: /\.tsx?/,
    exclude: /node_modules/,
    loader: "babel-loader"
  },
  {
    test: /\.scss/, // 対象となるファイルの拡張子
    use: [
      // linkタグに出力する機能
      "style-loader",
      // CSSをバンドルするための機能
      {
        loader: "css-loader",
        options: {
          // オプションでCSS内のurl()メソッドの取り込みを禁止する
          url: false,
          // ソースマップの利用有無
          sourceMap: enabledSourceMap,

          // 0 => no loaders (default);
          // 1 => postcss-loader;
          // 2 => postcss-loader, sass-loader
          importLoaders: 2
        }
      },
      {
        loader: "sass-loader",
        options: {
          // ソースマップの利用有無
          sourceMap: enabledSourceMap
        }
      }
    ]
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
  target: "node",
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
