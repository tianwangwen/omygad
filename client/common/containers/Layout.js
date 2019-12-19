// Real root part for a react app
// the page layout will be defined in this file

import React, { PropTypes } from 'react';
import avatar from '../asset/avatar.png'; // TODO it could be delete, it's for test

// TODO the layout below is for test, it should be redefined according to your real project.
const Layout = props => (
  <div>
    {/* <header>
      header
      <img alt='' src={avatar} />
    </header> */}
    <section>{props.children}</section>
    {/* <footer>footer</footer> */}
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
