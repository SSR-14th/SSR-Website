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
      <div className="logo">
        <img alt="SSR" src={require('../img/SSR-logo.png')} />
      </div>
      <div className="menu">
        <MenuItem to="/">main</MenuItem>
        <MenuItem to="/about">about</MenuItem>
        <MenuItem to="/result">result</MenuItem>
        <MenuItem to="/faq">FAQ</MenuItem>
      </div>
      <hr/>
    </div>
  );
};

export default Header;
