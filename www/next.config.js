/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const path = require('path')
const withPWA = require('next-pwa')

module.exports = withPWA({
  //  basePath: '/discord.sh',
  assetPrefix: isProd ? '/' : '',
  trailingSlash: true,
  reactStrictMode: false,
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      apexcharts: path.resolve(__dirname, './node_modules/apexcharts-clevision')
    }

    return config
  },
  pwa: {
    dest: "out",
    register: true,
    skipWaiting: true,
  }
});
