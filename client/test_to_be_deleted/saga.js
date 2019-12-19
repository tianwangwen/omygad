import { takeLatest, put, call } from 'redux-saga/effects';

import { sagaAction } from './action';
import { ACTION_TEST } from './constants';
import { getTestData } from './service';

function* test() {
  try {
    const data = yield call(getTestData);
    yield put(sagaAction(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* testSaga() {
  yield [
    takeLatest(ACTION_TEST, test)
  ];
}
