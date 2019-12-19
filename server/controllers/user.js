// User need to be deleted, since for test
import { getService, postService, putService, deleteService } from '../services/user';

async function getUser(ctx) {
  console.log('ctx ---->', ctx);
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

async function deleteUser(ctx) {
  const body = await deleteService(ctx.request.body.id);
  ctx.body = body;
}

export default {
  getUser,
  postUser,
  putUser,
  deleteUser
};
