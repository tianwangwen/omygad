import { get } from '../../shared/utils';

const getMarkdownApi = filename => get(`/api/markdown/getMarkdown?filename=${filename}`);

export default {
  getMarkdownApi
};
