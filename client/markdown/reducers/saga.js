import { takeLatest, call } from 'redux-saga/effects';

import { GET_MARKDOWN } from '../actions/constants';
import { getMarkdownApi } from '../service';

function* getMarkdown({ payload }) {
  try {
    const result = yield call(getMarkdownApi, payload.filename);
    payload.callback(result);
  } catch (e) {
    console.log(e);
  }
}

export default function* todoListSaga() {
  yield [
    takeLatest(GET_MARKDOWN, getMarkdown)
  ];
}
