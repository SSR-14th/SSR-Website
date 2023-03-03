import React from 'react';
import './About.css';
import '../../style/Style.css';

import { Header,Name } from "../../component";

function Main() {
  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <br/>
        <br/>
        <br/>
        
        <div className="about-list">
          <div className="about-text">
            <img className="about-img" alt="Research" src={require('../../img/research.png')} />
            <h1>교내 유일 보안 연구 동아리</h1>
            <p>대회 운영이나 친목 위주의 타 전공 동아리와 달리,</p>
            <p>SSR에서는 자유롭게 보안 연구와 개발에만 집중할 수 있습니다.</p>
          </div>
          <div className="about-text">
            <img className="about-img" alt="Hacker" src={require('../../img/hacker.png')} />
            <h1>초보부터 고수까지 누구나</h1>
            <p>SSR에서는 기초부터 심화까지 함께 공부할 수 있습니다.</p>
            <p>또한, 비슷한 분야에 관심이 있는 친구, 선후배와 함께 프로젝트를 수행할 수 있습니다.</p>
          </div>s
          <div className="about-text">
            <img className="about-img" alt="Bug" src={require('../../img/bug.png')} />
            <h1>취약점 연구 및 대회 출전</h1>
            <p>SSR에서는 각종 S/W, H/W의 0-day 연구를 수행합니다.</p>
            <p>또한, 외부 해킹 대회에 함께 출전하기도 합니다.</p>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  );
}

export default Main;
