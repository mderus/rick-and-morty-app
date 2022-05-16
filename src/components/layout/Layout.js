import React from 'react';
import MainNav from './MainNav';

function Layout(props) {
  return (
    <div>
      <MainNav />
      <main>{props.children}</main>
    </div>
  );
}

export default Layout;
