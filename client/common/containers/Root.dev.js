/* eslint-disable */
// add Devtool into the app layout for dev env.

import React, { Component } from 'react';

import DevTools from './DevTools.dev';
import Layout from './Layout';

class Root extends Component {
  constructor() {
    super();
    this.state = { isMounted: false };
  }

  componentDidMount() {
    /**                                                                                 **/
    /**              if you haven't install redux plugin in chrome                      **/
    /**           you could uncommit above line to active the dev tool                  **/
    /**  you also need to uncommit line 'DevTools.instrument()' in storeCreator.dev.js ***/
    /**                                                                                 **/
    // this.setState({ isMounted: true })
  }

  render() {
    const { isMounted } = this.state;
    return (
      <div>
        <Layout>{this.props.children}</Layout>
        {isMounted && <DevTools />}
      </div>
    );
  }
}

export default Root;
