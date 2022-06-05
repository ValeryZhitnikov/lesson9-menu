import { Routes, Route } from 'react-router-dom';
import DriftPage from './components/DriftPage';
import ForzaPage from './components/ForzaPage';
import HomePage from './components/HomePage';
import TimeAttackPage from './components/TimeAttackPage';
import Menu from './components/Menu';

import './App.css';

export default function App() {
  return (
    <div>
      <Menu />
      <div className="page">
        <Routes>
          <Route path='/timeattack' element={<TimeAttackPage />} />
          <Route path='/forza' element={<ForzaPage />} />
          <Route path='/drift' element={<DriftPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
    </div>
  );
}