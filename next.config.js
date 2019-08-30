const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withSASS = require("@zeit/next-sass");

module.exports = withPlugins([withCSS, withSASS]);
