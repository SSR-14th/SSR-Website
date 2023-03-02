import React from 'react';
import './Main.css';
import './Style.css';

import { useNavigate } from 'react-router-dom';

import Header from "../component/Header";

const Main = () => {
  const navigate = useNavigate();
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
        <br />
        <button className="JoinButton" onClick={ () => {navigate("/join")} }>14기 지원하러 가기</button>
      </div>
    </div>
  );
}

export default Main;
