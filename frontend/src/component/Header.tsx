import React from "react";
import "./Header.css";

import { Link } from 'react-router-dom';

const MenuItem = (props: any) => {
  const { children } = props;
  return (
    <div className="menu-item">
      <Link className="menu-item-link" to="/">{children}</Link>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <div className="logo">
        <img alt="SSR" src={require('../img/SSR-logo.png')} />
      </div>
      <div className="menu">
        <MenuItem>main</MenuItem>
        <MenuItem>about</MenuItem>
        <MenuItem>result</MenuItem>
        <MenuItem>FAQ</MenuItem>
      </div>
      <hr/>
    </div>
  );
};

export default Header;
