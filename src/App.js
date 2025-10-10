import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import PrincipalMessage from './pages/PrincipalMessage';
import SchoolGoals from './pages/SchoolGoals';
import Library from './pages/Library';
import LMC from './pages/LMC';
import Admissions from './pages/Admissions';
import SupplyLists from './pages/SupplyLists';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/principal-message" element={<PrincipalMessage />} />
          <Route path="/school-goals" element={<SchoolGoals />} />
          <Route path="/library" element={<Library />} />
          <Route path="/lmc" element={<LMC />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/supply-lists" element={<SupplyLists />} />
          {/* Additional routes can be added here as new pages are created */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
