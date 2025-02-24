const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@containers": path.resolve(__dirname, "src/containers"),
      "@locales": path.resolve(__dirname, "src/locales"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@types": path.resolve(__dirname, "src/types"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.json$/,
        type: "json",
      });
      return webpackConfig;
    },
  },
};
