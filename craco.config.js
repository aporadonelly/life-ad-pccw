const path = require("path");
const webpack = require("webpack");

module.exports = {
  webpack: {
    alias: {
      "@root": path.resolve(__dirname, "src"),
      "@adapters": path.resolve(__dirname, "src/adapters"),
      "@actions": path.resolve(__dirname, "src/actions"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@common": path.resolve(__dirname, "src/common"),
      "@components": path.resolve(__dirname, "src/components"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@hocs": path.resolve(__dirname, "src/hocs"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@menu": path.resolve(__dirname, "src/menu"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@ui": path.resolve(__dirname, "src/ui"),
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
