// next.config.js
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  //  basePath: '/discord.sh',
  assetPrefix: isProd ? '/' : ''
}