// determine which store creator will be used according to the NODE_ENV
module.exports = process.env.NODE_ENV === 'production' ? require('./storeCreator.prd') : require('./storeCreator.dev');
