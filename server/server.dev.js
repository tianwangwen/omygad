/* eslint-disable */
// node server, for dev env

// for babel compile
require('babel-polyfill');

// for hot module reload, below 3 hooks are necessary when server start
// babel hook
require('babel-register')({
    presets: ['es2015', 'react', 'stage-0'],
    plugins: ['add-module-exports']
});

// scss compiler hook
require('css-modules-require-hook')({
    extensions: ['.scss'],
    preprocessCss: (data, filename) =>
        require('node-sass').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
});

// image compiler hook
require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 8000
});

const config = require('../config');
const app = require('./app.js');
const port = config.Local.port;
const clientRoute = require('./middlewares/clientRoute');
const devMiddleware = require('koa-webpack-dev-middleware');
const hotMiddleware = require('koa-webpack-hot-middleware');
const convert = require('koa-convert');
const webpackCfg = require('../build/webpack.dev.config');
const webpack = require('webpack');
const compiler = webpack(webpackCfg);
const router = require('./routes');
const views = require('koa-views');
const path = require('path');
const fs = require('fs');
// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '12345678',
//     database : 'omygad',
//   });
   
// connection.connect();

// connection.query('SELECT * FROM user',function (err, result) {
//     if(err){
//       console.log('[SELECT ERROR] - ',err.message);
//       return;
//     }

//    console.log('--------------------------SELECT----------------------------');
//    console.log(result);
//    console.log('------------------------------------------------------------\n\n');  
// });

// for hot module reload, we need to generate the html
// according to html template at first of server starting
compiler.plugin('emit', (compilation, callback) => {
    const assets = compilation.assets;
    let file, data;

    Object.keys(assets).forEach(key => {
        if (key.match(/\.html$/)) {
            file = path.resolve(__dirname, key);
            data = assets[key].source();
            fs.writeFileSync(file, data);
        }
    })
    callback();
})

// use html template
app.use(views(path.resolve(__dirname, '../views/dev'), {map: {html: 'ejs'}}));

// client & server routers
app.use(clientRoute);
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`\n==>   Listening on port ${port}. Open up http://localhost:${port}/ in your browser.\n`);

// hot module reload middlewares
app.use(convert(devMiddleware(compiler, {
    // noInfo: true,
    publicPath: webpackCfg.output.publicPath
})));
app.use(convert(hotMiddleware(compiler)));

// start server
app.listen(port);
