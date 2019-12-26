import { getMarkDmService } from '../services/markdown';

async function getMarkDm(ctx) {
  const body = await getMarkDmService(ctx.query.filename);
  ctx.body = body;
}

export default {
  getMarkDm
};
