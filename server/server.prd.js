// node server for production

import 'babel-polyfill';
import serve from 'koa-static';
import path from 'path';
import views from 'koa-views';
import app from './app';
import router from './routes';
import clientRoute from './middlewares/clientRoute';
import config from '../config';

const port = config.Local.port;

app.use(views(path.resolve(__dirname, '../views/prd'), { map: { html: 'ejs' } }));
app.use(clientRoute);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(path.resolve(__dirname, '../dist/client')));
app.listen(port);
