/* eslint-disable @typescript-eslint/no-var-requires */
// next.config.js
const isProd = process.env.NODE_ENV === 'production'
const path = require('path')

module.exports = {
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
  }
}
