// npx webpack --config webpack.config.js -w
const path = require('node:path')
module.exports = {
  entry: {
    content: './crx/src/content/content.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'crx/dist'),
  },
  mode: 'production',
}
