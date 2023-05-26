import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from '../Menu/Menu';
import HomePage from '../../pages/HomePage/HomePage';
import DriftPage from '../../pages/DriftPage/DriftPage';
import TimeAttackPage from '../../pages/TimeAttackPage/TimeAttackPage';
import ForzaPage from '../../pages/ForzaPage/ForzaPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Menu />
      <div className="page">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;