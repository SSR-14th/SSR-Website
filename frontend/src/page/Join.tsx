import React, { useState } from 'react';
import './Join.css';
import './Style.css';

import Header from "../component/Header";
import Name from "../component/Name";

function Main() {
  const [disabled, setDisabled]: any = useState(false);
  
  const [password, setPassword]: any = useState("");

  const handleChange = (input: any) => setPassword(input.target.value);
  
  const handleSubmit = async (event: any) => {
    setDisabled(true);
    event.preventDefault();
    await new Promise((r) => setTimeout(r, 1000));
    alert("제출이 완료되었습니다.");
    setDisabled(false);
  };

  return (
    <div className="App">
      <Header/>
      <div className="Main">
        <Name>-About-</Name>
        <br/>
        <br/>
        <form onSubmit={handleSubmit}>
          <div className="Text">자기소개서</div>
          <br/>
          <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          />
          <br/><br/>

          <div className="Text">합격 후 포부</div>
          <br/>
          <input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          />
          <br/><br/>

          <button type="submit" disabled={disabled}>제출</button>
        </form>
      </div>
    </div>
  );
}

export default Main;
