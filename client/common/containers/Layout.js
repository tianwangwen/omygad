// Real root part for a react app
// the page layout will be defined in this file

import React from 'react';

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

export default Layout;
