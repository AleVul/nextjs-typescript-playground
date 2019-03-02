const withTypescript = require("@zeit/next-typescript");
const withLess = require("@zeit/next-less");
const path = require("path");

module.exports = withLess(
  withTypescript({
    lessLoaderOptions: {
      javascriptEnabled: true
    },
    pageExtensions: ["tsx"]
  })
);
