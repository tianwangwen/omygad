// determine which global config should be use due to NODE_ENV
module.exports = process.env.NODE_ENV === 'production' ? require('./config.prd') : require('./config.dev');
