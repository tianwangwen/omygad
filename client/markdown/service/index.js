import ajax from '../../shared/utils';

export const getMarkdownApi = filename => ajax.get(`/api/markdown/getMarkdown?filename=${filename}`);

export default {
  getMarkdownApi
};
