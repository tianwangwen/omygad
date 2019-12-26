import { GET_MARKDOWN, UPDATE_MARKDOWN } from './constants';

export const getMarkdown = data => ({
  type: GET_MARKDOWN,
  payload: data
});

export const updateMarkdown = data => ({
  type: UPDATE_MARKDOWN,
  payload: data
});
