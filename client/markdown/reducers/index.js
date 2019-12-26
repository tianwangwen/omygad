import { UPDATE_MARKDOWN } from '../actions/constants';

export default function todos(state = { markdown: [] }, action) {
  switch (action.type) {
    case UPDATE_MARKDOWN:
      return {
        markdown: [
          ...action.payload.data
        ]
      };
    default:
      return state;
  }
}
