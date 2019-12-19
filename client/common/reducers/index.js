// Root reducer for redux, you should combine your sepreate reducer into this one.

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import test from '../../todo_list/reducers';// TODO this should be deleted, since it is for test

const rootReducer = combineReducers({
  routing: routerReducer,
  test   // TODO this should be deleted, since it is for test
});

export default rootReducer;
