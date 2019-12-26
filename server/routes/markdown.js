import Router from 'koa-router';

import { getMarkDm } from '../controllers/markdown';

const router = new Router({ prefix: '/markdown' });

router.get('/getMarkdown', getMarkDm);

export default router;
