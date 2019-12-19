// TODO need to be deleted, since for test
import { getService, postService, putService, deleteService } from '../services/test';

async function getTodo(ctx) {
  const body = await getService();
  ctx.body = body;
}

async function postTodo(ctx, next) {
  const body = await postService(ctx.request.body);
  ctx.body = body;
  return next();
}

async function putTodo(ctx) {
  const body = await putService(ctx.request.body);
  // const body = await putService(ctx.request.body);
  ctx.body = body;
}

async function deleteTodo(ctx) {
  const body = await deleteService(ctx.request.body.id);
  ctx.body = body;
}

export default {
  getTodo,
  postTodo,
  putTodo,
  deleteTodo
};
