// web route for react part

import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Root from './common/containers/Root';
import Test from './test_to_be_deleted'; // TODO this should be deleted, since it's for test
import Test1 from './test_to_be_deleted/Test1'; // TODO this should be deleted, since it's for test
import TodoList from './todo_list/containers/App'; // TODO this should be deleted, since it's for test
import User from './user/containers/App'; // TODO this should be deleted, since it's for test
import Sitting from './sitting/containers/App';

export default (
  <Route path='/' component={Root}>
    <IndexRoute component={Test} />
    <Route path='test' component={Test} />
    <Route path='test2' component={Test} />
    <Route path='test1' component={Test1} />
    <Route path='todo-list' component={TodoList} />
    <Route path='user' component={User} />
    <Route path='sitting' component={Sitting} />
  </Route>
);
