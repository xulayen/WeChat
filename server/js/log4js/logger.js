const log4js = require('log4js');
const config = require('../config/config');

log4js.configure({
  appenders: { 
  	cheese: config.log4js
  },
  categories: { default: { appenders: ['cheese'], level: 'trace' } }
});
 
const logger = log4js.getLogger('cheese');


module.exports =logger;


// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');