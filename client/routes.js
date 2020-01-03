// web route for react part

import React from 'react';
// import { Route, IndexRoute } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import Root from './common/containers/Root';
import TodoList from './todo_list/containers/App'; // TODO this should be deleted, since it's for test
import User from './user/containers/App'; // TODO this should be deleted, since it's for test
import Markdown from './markdown/containers/App'; // TODO this should be deleted, since it's for test
import Sitting from './sitting/containers/App';

export default (
  // <Route path='/' component={Root}>
  //   <IndexRoute component={User} />
  //   <Route path='hello' component={Sitting} />
  //   <Route path='todo-list' component={TodoList} />
  //   <Route path='user' component={User} />
  //   <Route path='markdown/:filename' component={Markdown} />
  // </Route>
  <BrowserRouter>
    <Route path='/' exact={true} component={Root} />
    <Route path='/hello' component={Sitting} />
    <Route path='/todo-list' component={TodoList} />
    <Route path='/user' component={User} />
    <Route path='/markdown/:filename' component={Markdown} />
  </BrowserRouter>
);
