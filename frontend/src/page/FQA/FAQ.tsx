import React from 'react';
import './FAQ.css';
import '../../style/Style.css';

import { Header,Name } from "../../component";

function Main() {
  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <Name>- FAQ -</Name>
        <div className = "faq-list">
          <div>
          <br/>
          <br/>
          <div className="Q">Q1. SSR은 어떤 동아리인가요?</div>
          <div className="A">다양한 보안 취약점을 연구하는 한세고의 교내 동아리입니다.</div>
          <br/>
          <div className="Q">Q2. 모집 인원은 몇 명인가요?</div>
          <div className="A">자율을 포함하면 별도의 인원 제한은 없습니다.</div>
          <br/>
          <div className="Q">Q3. 전공을 잘하지 못해도 괜찮나요?</div>
          <div className="A">해킹을 처음 시작하더라도 함께 공부하면서 성장하실 수 있습니다. 걱정하는 대신 도전하신다면 내년 이맘때에는 몇 배 이상 발전해 있으실 것입니다.</div>
          <br/>
          <div className="Q">Q4. 동아리에서 주로 무슨 활동을 하나요?</div>
          <div className="A">스터디, 멘토링을 통해 함께 공부하고, 비슷한 연구 주제에 관심이 있는 친구, 선후배와 함께 프로젝트를 수행할 수 있습니다.</div>
          <br/>
          <div className="Q">Q5. 추가적인 문의 사항은 어디로 연락하면 되나요?</div>
          <div className="A">SSR 공식 인스타그램 @ssr_20230228 으로 연락해주시면 됩니다. </div>
          <br/>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Main;
