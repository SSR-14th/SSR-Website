import React from 'react';
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Mome from './page/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mome />} />
    </Routes>
  );
}

export default App;
