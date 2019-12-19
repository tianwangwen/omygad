import { takeLatest, put, call, select } from 'redux-saga/effects';

import { updateTodo } from '../actions';
import { GET_USER } from '../actions/constants';
import { getData } from '../service';


function* onGetUser() {
  try {
    const result = yield call(getData);
    console.log(result);
    // yield put(updateTodo(result));
  } catch (e) {
    console.log(e);
  }
}

export default function* todoListSaga() {
  yield [
    takeLatest(GET_USER, onGetUser)
  ];
}
