const withCSS = require("@zeit/next-css");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withSASS = require("@zeit/next-sass");

// module.exports = withPlugins([withCSS, withSASS]);

// const configuration = () => {
//     return webpack(config) {
//             config.module.rules.push({
//               test: /\.svg$/,
//               use: ["@svgr/webpack"]
//             });
//         }
//             return config;
//   }

module.exports = withPlugins([withCSS, withSASS, withImages]);

// module.exports = {

// };
