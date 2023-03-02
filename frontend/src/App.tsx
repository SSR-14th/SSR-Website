import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Main from './page/Main';
import Join from './page/Join';
import About from './page/About';
import Result from './page/Result';
import FAQ from './page/FAQ';

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
