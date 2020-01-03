import { takeLatest, put, call } from 'redux-saga/effects';

import { updateUser } from '../actions';
import { GET_USER } from '../actions/constants';
import { getData } from '../service';


function* onGetUser({ payload }) {
  try {
    const result = yield call(getData);
    payload(result);
    yield put(updateUser(result));
  } catch (e) {
    console.log(e);
  }
}

export default function* todoListSaga() {
  yield [
    takeLatest(GET_USER, onGetUser)
  ];
}
