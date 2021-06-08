const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["./src/main.tsx"],
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      constants: path.resolve(__dirname, "src/constants/"),
      utils: path.resolve(__dirname, "src/utils/"),
      layouts: path.resolve(__dirname, "src/layouts/"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./public", "index.html"),
    }),
  ],
};
