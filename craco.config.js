const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@actions": path.resolve(__dirname, "src/actions"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@common": path.resolve(__dirname, "src/common"),
      "@components": path.resolve(__dirname, "src/components"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@menu": path.resolve(__dirname, "src/menu"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@ui": path.resolve(__dirname, "src/ui"),
    },
  },
};
