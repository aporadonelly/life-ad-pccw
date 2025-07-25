const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: {
    alias: {
      "@root": path.resolve(__dirname, "src"),
      "@adapters": path.resolve(__dirname, "src/adapters"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@common": path.resolve(__dirname, "src/common"),
      "@components": path.resolve(__dirname, "src/components"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@hocs": path.resolve(__dirname, "src/hocs"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@mockData": path.resolve(__dirname, "src/mockData"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@styles": path.resolve(__dirname, "src/styles"),
    },
    plugins: {
      add: [
        new webpack.ContextReplacementPlugin(
          /moment[/\\]locale$/,
          /zh-cn|zh-hk/
        ),
      ],
      remove: ["IgnorePlugin"],
    },
  },
};
