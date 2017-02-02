// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

var path = require('path');

module.exports = {
  eslint: {
    configFile: '.storybook/.eslintrc'
  },
  plugins: [
    // your custom plugins
  ],
  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif)$/,
        loader: "url-loader?mimetype=image/png"
      },
      {
        test: /\.stories.js$/,
        loaders: [ 'eslint-loader' ],
        include: path.resolve(__dirname, '../src/'),
        exclude: /node_modules/
      },
    ],
  },
};
