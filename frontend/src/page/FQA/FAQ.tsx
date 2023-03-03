import React from 'react';
import './FAQ.css';
import '../../style/Style.css';

import { Header } from "../../component";

function Main() {
  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <div className = "faq-list">
          <div>
          <br/>
          <br/>
          <div className="Q">Q1. SSR은 어떤 동아리인가요?</div>
          <div className="A">자유로운 분위기에서 개발을 하거나 보안 취약점을 연구하는 교내 동아리입니다.</div>
          <br/>
          <div className="Q">Q2. 지원은 보안과만 가능한가요?</div>
          <div className="A">아니요! 한세사이버보안고등학교에 재학 중이라면 누구든 지원 가능합니다.</div>
          <br/>
          <div className="Q">Q3. 전공을 못해도 지원가능한가요?</div>
          <div className="A">전공지식이 부족하더라도 배우려는 의지가 있다면 누구나 지원 가능합니다.</div>
          <br/>
          <div className="Q">Q4. 모집기간은 언제인가요?</div>
          <div className="A">3월 6일부터 3월 12일 자정까지 1주간 진행됩니다.</div>
          <br/>
          <div className="Q">Q5. 포트폴리오 제출은 필수인가요?</div>
          <div className="A">필수는 아니지만 여러분의 실력을 알 수 있는 자료이기 때문에 제출하는 것은 추천드려요.</div>
          <br/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Main;
