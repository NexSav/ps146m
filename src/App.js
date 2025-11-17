import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MissionVision from './pages/MissionVision';
import PrincipalMessage from './pages/PrincipalMessage';
import SchoolGoals from './pages/SchoolGoals';
import Library from './pages/Library';
import LMC from './pages/LMC';
import Admissions from './pages/Admissions';
import OurStaff from './pages/OurStaff';
import StaffDirectory from './pages/StaffDirectory';
import SchoolCalendar from './pages/SchoolCalendar';
import SupplyLists from './pages/SupplyLists';
import ComingSoon from './pages/ComingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/principal-message" element={<PrincipalMessage />} />
          <Route path="/staff" element={<OurStaff />} />
          <Route path="/staff-directory" element={<StaffDirectory />} />
          <Route path="/school-goals" element={<SchoolGoals />} />
          <Route path="/partnerships" element={<ComingSoon />} />
          <Route path="/contact" element={<ComingSoon />} />

          {/* Calendar */}
          <Route path="/school-calendar" element={<SchoolCalendar />} />
          <Route path="/book-of-month" element={<ComingSoon />} />

          {/* News */}
          <Route path="/news" element={<ComingSoon />} />
          <Route path="/city-year-events" element={<ComingSoon />} />

          {/* Academics */}
          <Route path="/academics" element={<ComingSoon />} />
          <Route path="/learning-resources" element={<ComingSoon />} />

          {/* Library */}
          <Route path="/lmc" element={<LMC />} />
          <Route path="/library" element={<Library />} />

          {/* Parents */}
          <Route path="/parents" element={<ComingSoon />} />
          <Route path="/remote-learning" element={<ComingSoon />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/parent-association" element={<ComingSoon />} />
          <Route path="/supply-lists" element={<SupplyLists />} />

          {/* Students */}
          <Route path="/students" element={<ComingSoon />} />
          <Route path="/student-resources" element={<ComingSoon />} />

          {/* Faculty/Staff */}
          <Route path="/faculty-staff" element={<StaffDirectory />} />

          {/* Catch-all route for any undefined pages */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
