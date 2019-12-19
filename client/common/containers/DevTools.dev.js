/* eslint-disable */
// Redux Devtool, will only be used at NODE_ENV NOT equals to "production"
import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export default createDevTools(
  <DockMonitor
    toggleVisibilityKey='ctrl-i'
    changePositionKey='ctrl-m'
    defaultIsVisible={true}
  >
    <LogMonitor theme='tomorrow' />
  </DockMonitor>
);
