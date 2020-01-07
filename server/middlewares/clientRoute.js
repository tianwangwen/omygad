// web route for server side, since the react will be rendered by server side

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../../client/routes';
import storeCreator from '../../client/common/stores';

const store = storeCreator();

async function clientRoute(ctx, next) {
  let _renderProps;

  match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
    _renderProps = renderProps;
  });
  if (_renderProps) {
    await ctx.render('index', {
      root: renderToString(
        <Provider store={store}>
          <RouterContext {..._renderProps} />
        </Provider>
      ),
      state: store.getState()
    });
  } else {
    await next();
  }
}

export default clientRoute;
