import React from 'react';
import Header from '../Header/Header';

import './layout.css';

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
