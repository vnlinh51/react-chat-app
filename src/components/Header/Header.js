import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './header.css';

const Header = (props) => {
  return (
    <header className="header">
      <div className="nav__menu">
        <div className="nav__menu-item logo">Chat App</div>
        <div className="nav__menu-item">
          <NavLink to={'/login'}>Login</NavLink>
        </div>
        <div className="nav__menu-item">
          <NavLink to={'/signup'}>Sign up</NavLink>
        </div>
      </div>
      <div>Hello Friday</div>
      <ul>
        <Link to={'#'} onClick={props.logout}>
          Logout
        </Link>
      </ul>
    </header>
  );
};

export default Header;
