import { takeLatest, put, call, select } from 'redux-saga/effects';

import { getTodo, updateTodo } from '../actions';
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, GET_TODO } from '../actions/constants';
import { getData, postData, deleteData, putData } from '../service';

function* onAddTodo(action) {
  const todos = yield select(state => state.test.text);
  let id = 0;
  todos.forEach((todo, index) => {
    isNaN(Number(todo.id)) ? '' : id = Math.max(todo.id, id);
  });
  try {
    const result = yield call(postData, {
      id: id + 1,
      text: action.payload.text,
      complete: false
    });
    yield put(getTodo());
  } catch (e) {
    console.log(e);
  }
}

function* onDeleteTodo(action) {
  try {
    const result = yield call(deleteData, {
      id: action.payload.id
    });
    yield put(getTodo());
  } catch (e) {
    console.log(e);
  }
}

function* onToggleTodo(action) {
  try {
    const result = yield call(putData, {
      id: action.payload.id,
      text: action.payload.text,
      complete: !action.payload.complete
    });
    yield put(getTodo());
  } catch (e) {
    console.log(e);
  }
}

function* onGetTodo() {
  try {
    const result = yield call(getData);
    yield put(updateTodo(result));
  } catch (e) {
    console.log(e);
  }
}

export default function* todoListSaga() {
  yield [
    takeLatest(ADD_TODO, onAddTodo),
    takeLatest(DELETE_TODO, onDeleteTodo),
    takeLatest(TOGGLE_TODO, onToggleTodo),
    takeLatest(GET_TODO, onGetTodo)
  ];
}
