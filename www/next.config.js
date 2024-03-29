/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const path = require('path')

const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache")

if(isProd) {console.log("Production Baby!")} else {console.log("Dev Mode")}

module.exports = withPWA({
  assetPrefix: isProd ? '/' : '',
  trailingSlash: true,
  reactStrictMode: false,
  pwa: {
    dest: "/public",
    sw: "/sw.js",
    register: true,
    skipWaiting: true,
    runtimeCaching,
    buildExcludes: [
      /middleware-manifest\.json$/,
      /_middleware\.js$/,
      /_middleware\.js\.map$/,
      /middleware-runtime\.js$/,
      /server\/pages\/_middleware\.js$/,
    ]
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    config.output.publicPath = './_next/'

    return config
  }
});
