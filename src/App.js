import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import PrincipalMessage from './pages/PrincipalMessage';
import SchoolGoals from './pages/SchoolGoals';
import Library from './pages/Library';
import Admissions from './pages/Admissions';
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
          <Route path="/admissions" element={<Admissions />} />
          {/* Additional routes can be added here as new pages are created */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
