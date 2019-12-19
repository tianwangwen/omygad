module.exports = process.env.NODE_ENV === 'production' ? require('./Layout') : require('./Root.dev');
