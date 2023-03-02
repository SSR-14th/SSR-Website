import React from "react";
import "./Header.css";

const MenuItem = (props: any) => {
  const { children } = props;
  return (
    <div className="menu-item">{children}</div>
  );
};

const Header = () => {
  return (
    <div>
      <img src={require('../img/SSR-logo.png')} />
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
