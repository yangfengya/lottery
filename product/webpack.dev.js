const baseConfig = require("./webpack.config");
const merge = require("webpack-merge");
const serve = require("../server/server.js");

module.exports = merge(baseConfig, {
  devtool: "#eval-source-map",
  devServer: {
    hot: true,
    compress: true,
    port: 1234,
    open: true,
    proxy: {
      "*": "http://localhost:1999"
    },
    before() {
      serve.run(1999, "n");
    }
  }
});
