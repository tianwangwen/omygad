// User need to be deleted due to test.

import Router from 'koa-router';

import { getUser, postUser, putUser } from '../controllers/user';

const router = new Router({ prefix: '/user' });

router.get('/hello', (ctx) => {
  ctx.body = 'Hello Robin';
});

router.get('/getUser', getUser);
router.post('/postUser', postUser);
router.post('/putUser', putUser);

export default router;
