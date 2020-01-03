// KOA related middleware.

import Koa from 'koa';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import session from 'koa-session2';
import compress from 'koa-compress';
// import convert from 'koa-convert';
import etag from 'koa-etag';
import conditional from 'koa-conditional-get';

const app = new Koa();

app.use(conditional());
app.use(etag());

app.keys = ['Excellence is a habit'];
app.use(session({
  key: 'SESSIONID'
}));
app.use(compress());
app.use(bodyParser());
app.use(json());
app.use(logger());

export default app;
