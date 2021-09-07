module.exports = {
    plugins: [
      require("postcss-nested"),
      require("autoprefixer"),
      require("postcss-import"),
      require("postcss-custom-media")({
        importFrom: "./src/styles/media-queries.css",
      }),
      require("postcss-simple-vars")({
        variables: require("./src/utilities/variables"),
      })
    ]
  };
  