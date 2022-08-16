/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const path = require('path')

const withPWA = require('next-pwa')
const runtimeCaching = require("next-pwa/cache")


module.exports = withPWA({
  //  basePath: '/discord.sh',
  assetPrefix: isProd ? '/' : '',
  trailingSlash: true,
  reactStrictMode: false,
  pwa: {
    dest: "/public",
    register: true,
    skipWaiting: true,
    runtimeCaching
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  }
});
