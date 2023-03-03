import React, { useState } from 'react';
import './Join.css';
import '../../style/Style.css';

import axios from 'axios';

import { Header,Name } from "../../component";

function isNumeric(data : string) : boolean {
  return !isNaN(Number(data));
}

function Main() {
  const SSR_API: string = "https://ssr2023api.run.goorm.site";
  const [disabled, setDisabled]: any = useState(false);
  
  const [num, setNum]: any = useState("");
  const handleChangeNum = (input: any) => setNum(input.target.value);
 
  const [name, setName]: any = useState("");
  const handleChangeName = (input: any) => setName(input.target.value);

  const [phone, setPhone]: any = useState("");
  const handleChangePhone = (input: any) => setPhone(input.target.value);

  const [mail, setMail]: any = useState("");
  const handleChangeMail = (input: any) => setMail(input.target.value);

  const [q0, setQ0]: any = useState("");
  const handleChangeQ0 = (input: any) => setQ0(input.target.value);

  const [q1, setQ1]: any = useState("");
  const handleChangeQ1 = (input: any) => setQ1(input.target.value);

  const [q2, setQ2]: any = useState("");
  const handleChangeQ2 = (input: any) => setQ2(input.target.value);

  const handleSubmit = async (event: any) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 400));
    axios.post( SSR_API + "/api/form",
    {
      num: num,
      name: name,
      phone: phone,
      mail: mail,
      q0: q0,
      q1: q1,
      q2: q2
    },
    {
      headers:{
        'Content-type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then((response) => { alert("제출이 완료되었습니다."); })
    .catch((response) => { alert("서버 오류") });
    //alert("제출이 완료되었습니다.");
    setDisabled(false);
    return;
  };

  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <br/>
        <br/>
        <div>
          <div className="Text">학번 ex) C1101홍길동</div>
          <br/>
          <input
          className="small-input"
          type="text"
          name="num"
          value={num}
          onChange={handleChangeNum}
          maxLength={20}
          />
          <br/><br/><br/>
          <div className="Text">이메일 주소</div>
          <br/>
          <input
          className="small-input"
          type="email"
          name="mail"
          value={mail}
          onChange={handleChangeMail}
          maxLength={50}
          />
          <br/><br/><br/>

          <div className="Text">관심분야</div>
          <br/>
          <input
          className="small-input"
          type="text"
          name="q0"
          value={q0}
          onChange={handleChangeQ0}
          />
          <br/><br/><br/>

          <div className="Text">자기소개서(700자 이내)</div>
          <br/>
          <textarea
          className="big-input"
          name="q1"
          value={q1}
          onChange={handleChangeQ1}
          maxLength={700}
          />
          <br/><br/><br/>
          <div className="Text">합격 후 포부(500자 이내)</div>
          <br/>
          <textarea
          className="big-input"
          name="q2"
          value={q2}
          onChange={handleChangeQ2}
          maxLength={500}
          />
          <br/><br/><br/>
          <div className="submitButton-space">
            <button className="submitButton" type="submit" disabled={disabled} onClick={handleSubmit}>제출</button>
          </div>
          <br/><br/><br/>
        </div>
      </div>
    </div>
  );
}

export default Main;
