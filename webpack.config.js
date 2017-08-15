const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require("path");

module.exports = {
  entry : ["babel-polyfill","./src/index.js"],
  output : {
      path : path.resolve("build"),
      publicPath : "/public/assets/",
      filename : "build.js"
  },
  plugins : [
      new ExtractTextPlugin("styles.css")
  ],
  watch : true,
  module: {
    loaders: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: ExtractTextPlugin.extract("style-loader","css-loader")
        },
        {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: "file-loader"
        },
        {
            test: /\.(png|jpg)$/,
            exclude: /node_modules/,
            loader: "url-loader"
        }
    ]
    },
    devServer: {
        contentBase : "./pages",
        port : 9098,
        inline : false
    }
};
