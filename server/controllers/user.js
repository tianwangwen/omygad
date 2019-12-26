// User need to be deleted, since for test
import { getService, postService, putService, getMarkDmService } from '../services/user';

async function getUser(ctx) {
  const body = await getService();
  ctx.body = body;
}

async function postUser(ctx, next) {
  const body = await postService(ctx.request.body);
  ctx.body = body;
  return next();
}

async function putUser(ctx) {
  const body = await putService(ctx.request.body);
  // const body = await putService(ctx.request.body);
  ctx.body = body;
}

async function getMarkDm(ctx) {
  const body = await getMarkDmService();
  ctx.body = body;
}

export default {
  getUser,
  postUser,
  putUser,
  getMarkDm
};
