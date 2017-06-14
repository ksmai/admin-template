switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./webpack.prod');
    break;

  case 'test':
    module.exports = require('./webpack.test');
    break;

  case 'dev':
  case 'development':
    module.exports = require('./webpack.dev');
    break;

  default:
    console.error(`No webpack config for "${process.env.NODE_ENV}"`);
    throw new Error('Unregconized NODE_ENV');
}
