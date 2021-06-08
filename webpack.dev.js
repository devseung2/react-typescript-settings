const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require("webpack");
const miniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "./dist"),
    filename: `[name].js`,
  },
  devServer: {
    contentBase: path.join(__dirname, "./public"),
    historyApiFallback: true,
    port: 4000,
    open: true,
    overlay: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg|jpeg)$/,
        loader: "url-loader",
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new miniCssExtractPlugin(),
  ],
});
