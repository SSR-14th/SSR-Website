import React from 'react';
import './Result.css';
import './Style.css';

import Header from "../component/Header";
import Name from "../component/Name";

function Main() {
  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <Name>- Result -</Name>
        <div className = "list">
          <div>
          <br/>
          <br/>
          <div className="result-type">교외 대회 입상</div>
          <div className="result-list">2022년 국가정보원, 한국전력공사 주최 전력분야 실전형 사이버공격 방어훈련(ELECCON 2022) 고등부 2위</div>
          <div className="result-list">2018년 코드게이트 주니어 국제해킹방어대회 본선 진출</div>
          <div className="result-list">2017년 코드게이트 주니어 국제해킹방어대회 본선 진출</div>
          <div className="result-list">2016년 국가정보원, 국방부 주최 화이트햇 콘테스트 최우수상</div>
          <div className="result-list">2016년 순천향대학교 청소년 정보보호 페스티벌 우수상</div>
          <div className="result-list">2016년 코드게이트 주니어 국제해킹방어대회 본선 진출</div>
          <div className="result-list">2014년 코드게이트 주니어 국제해킹방어대회 본선 진출</div>
          <br/>
          <div className="result-type">교내 대회 입상</div>
          <div className="result-list">2022년 한세사이버보안고등학교 교내해킹방어대회 우승</div>
          <br/>
          <div className="result-type">외부 교육과정</div>
          <div className="result-list">2022년 현대오토에버 주관 화이트해커 양성 교육 과정 1명 합격</div>
          <div className="result-list">2022년 한국정보기술연구원(KITRI) 주관 차세대 보안 리더 양성 프로그램(BoB) 1명 합격</div>
          <div className="result-list">2021년 한국정보기술연구원(KITRI) 주관 차세대 보안 리더 양성 프로그램(BoB) 1명 합격</div>
          <br/>
          <br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
