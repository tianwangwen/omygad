import { UPDATE_USER } from '../actions/constants';

export default function todos(state = { userList: [] }, action) {
  switch (action.type) {
    case UPDATE_USER:
      return {
        userList: [
          ...action.payload.data
        ]
      };
    default:
      return state;
  }
}
