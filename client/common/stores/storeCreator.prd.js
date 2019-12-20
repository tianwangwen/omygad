// store creator for production
// it will use redux, redux-saga, react-router, react-router-redux

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';

import { history } from '../services';
import reducers from '../reducers';
import rootSaga from '../sagas';

export default (state) => {
  // use react-router-redux wrap react-router
  const _routerMiddleware = routerMiddleware(history);

  // user redux-saga
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducers,
    state,
    applyMiddleware(sagaMiddleware, _routerMiddleware)
  );
  sagaMiddleware.run(rootSaga);

  return store;
};
