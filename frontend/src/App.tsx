import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Main from './page/Main/Main';
import Join from './page/Join/Join';
import About from './page/About/About';
import Result from './page/Result/Result';
import FAQ from './page/FAQ/FAQ';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/join" element={<Join />} />
      <Route path="/about" element={<About />} />
      <Route path="/result" element={<Result />} />
      <Route path="/faq" element={<FAQ />} />
    </Routes>
  );
}

export default App;
