const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin"); //<==== For can use with the html plugin
module.exports = {
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"},
  plugins: [
    new HtmlWebpackPlugin({
      //<==== For can use with the html plugin
      template: "./src/template.html", //
    }),
  ],
  module: {
    rules: [
     
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
  
    ],
  },
};
