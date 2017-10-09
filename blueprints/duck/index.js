module.exports = {
  fileMapTokens: options =>
    // Return custom tokens to be replaced in your files
     ({
       __path__: () => options.settings.settings.duckPath,
     }),
};
