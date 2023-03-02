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
        <Name>-Result-</Name>
        <br/>
        <br/>
        <div className="Text">System Security Research</div>
      </div>
    </div>
  );
}

export default Main;
