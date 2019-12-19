// TODO need to be deleted due to test.

import Router from 'koa-router';

import {  getTodo, postTodo, putTodo, deleteTodo } from '../controllers/test';

const router = new Router({ prefix: '/test' });

router.get('/hello', (ctx) => {
  ctx.body = 'Hello Robin';
});

router.get('/getTodo', getTodo);
router.post('/postTodo', postTodo);
router.post('/putTodo', putTodo);
router.post('/deleteTodo', deleteTodo);

export default router;
