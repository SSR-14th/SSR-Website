import React from "react";
import "./Header.css";

import { Link } from 'react-router-dom';

const MenuItem = (props: any) => {
  const { children, to } = props;
  return (
    <Link className="menu-item-link" to={to}>
      <div className="menu-item">
        {children}
      </div>
    </Link>
  );
};

const Header = () => {
  return (
    <div>
      <header>
      <div className="head">
        <div className="logo">
          <Link to="/">
            <img className="logo-img" alt="SSR" src={require('../img/SSR-logo.png')} />
          </Link>
        </div>
        <div className="menu">
          <MenuItem to="/">main</MenuItem>
          <MenuItem to="/join">Join</MenuItem>
          <MenuItem to="/about">about</MenuItem>
          <MenuItem to="/result">result</MenuItem>
          <MenuItem to="/faq">FAQ</MenuItem>
        </div>
      </div>
      <hr />
      </header>
    </div>
  );
};

export default Header;
