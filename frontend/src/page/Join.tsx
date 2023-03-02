import React from 'react';
import './Join.css';
import './Style.css';

import Header from "../component/Header";

function Main() {
  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <div className="SSRImage">
          <img alt="SSR" src={require('../img/SSR-background.png')} />
        </div>
        <div className="SSRText">
          한세사이버보안고등학교 시스템보안연구동아리 (SSR)
        </div>
      </div>
    </div>
  );
}

export default Main;
