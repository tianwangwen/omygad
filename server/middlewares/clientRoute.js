// web route for server side, since the react will be rendered by server side

import React from 'react';
import { renderToNodeStream } from 'react-dom/server';
import { match, StaticRouter } from 'react-router-dom';
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
    console.log('_renderProps--------->', _renderProps);
    await ctx.render('index', {
      root: renderToNodeStream(
        <Provider store={store}>
          <StaticRouter {..._renderProps} />
        </Provider>
      ),
      state: store.getState()
    });
  } else {
    await next();
  }
}

export default clientRoute;
