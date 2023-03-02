import React from "react";
import "./Header.css";

const MenuItem = (props: any) => {
  const { children } = props;
  return (
    <div className="menu-item">{children}</div>
  );
};

const Header = (props: any) => {
  const { children } = props;
  return (
    <div>
      <img src={require('../img/SSR-logo.png')} />
      <div className="title">{children}</div>
      <div className="menu">
        <MenuItem>홈</MenuItem>
        <MenuItem>소개</MenuItem>
        <MenuItem>포스트</MenuItem>
      </div>
      <hr/>
    </div>
  );
};

export default Header;
