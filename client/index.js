// entry for the react app

import React from 'react';
import { render } from 'react-dom';
import { Router, match } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import storeCreator from './common/stores';
import { history } from './common/services';

/* eslint-disable no-undef*/
// create store with initial state for server rendering
const store = storeCreator(window.REDUX_STATE);
/* eslint-enable no-undef*/

// use react-router-redux wrap react-router
const reduxHistory = syncHistoryWithStore(history, store);

match({ history: reduxHistory, routes }, (error, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>,
    /* eslint-disable no-undef*/
    document.getElementById('root')
    /* eslint-enable no-undef*/
  );
});
