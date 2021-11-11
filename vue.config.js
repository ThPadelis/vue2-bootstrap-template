module.exports = {
  configureWebpack: {
    plugins: [],
    optimization: {
      splitChunks: {
        name: "manifest",
        minChunks: Infinity,
        cacheGroups: {
          commons: {
            name: "commons",
            chunks: "initial",
            minChunks: 2,
          },
        },
      },
      minimizer: [],
    },
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/_variables.scss";`,
      },
    },
  },
};
