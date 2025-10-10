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
import ComingSoon from './pages/ComingSoon';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Existing Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/mission-vision" element={<MissionVision />} />
          <Route path="/principal-message" element={<PrincipalMessage />} />
          <Route path="/school-goals" element={<SchoolGoals />} />
          <Route path="/library" element={<Library />} />
          <Route path="/lmc" element={<LMC />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/supply-lists" element={<SupplyLists />} />

          {/* Coming Soon Pages - About P.S.146 */}
          <Route path="/about" element={<ComingSoon />} />
          <Route path="/staff" element={<ComingSoon />} />

          {/* Coming Soon Pages - Faculty/Staff */}
          <Route path="/faculty-staff" element={<ComingSoon />} />
          <Route path="/staff-login" element={<ComingSoon />} />

          {/* Coming Soon Pages - News */}
          <Route path="/news" element={<ComingSoon />} />
          <Route path="/cell-phone-policy" element={<ComingSoon />} />
          <Route path="/school-calendar" element={<ComingSoon />} />
          <Route path="/announcements" element={<ComingSoon />} />

          {/* Coming Soon Pages - L.M.C. */}
          <Route path="/library-roles" element={<ComingSoon />} />
          <Route path="/library-mission" element={<ComingSoon />} />
          <Route path="/library-schedules" element={<ComingSoon />} />
          <Route path="/library-collections" element={<ComingSoon />} />

          {/* Coming Soon Pages - Parents */}
          <Route path="/parents" element={<ComingSoon />} />
          <Route path="/events-calendar" element={<ComingSoon />} />
          <Route path="/parent-association" element={<ComingSoon />} />
          <Route path="/partnerships" element={<ComingSoon />} />
          <Route path="/parents-corner" element={<ComingSoon />} />
          <Route path="/faqs" element={<ComingSoon />} />
          <Route path="/remote-learning" element={<ComingSoon />} />
          <Route path="/remote-learning-resources" element={<ComingSoon />} />

          {/* Coming Soon Pages - Students */}
          <Route path="/students" element={<ComingSoon />} />
          <Route path="/coding" element={<ComingSoon />} />
          <Route path="/math" element={<ComingSoon />} />
          <Route path="/reading" element={<ComingSoon />} />
          <Route path="/typing" element={<ComingSoon />} />
          <Route path="/safe-search" element={<ComingSoon />} />
          <Route path="/free-time" element={<ComingSoon />} />
          <Route path="/games" element={<ComingSoon />} />

          {/* Coming Soon Pages - QuickLinks */}
          <Route path="/quicklinks" element={<ComingSoon />} />

          {/* Coming Soon Pages - Contact */}
          <Route path="/contact" element={<ComingSoon />} />

          {/* Catch-all route for any undefined pages */}
          <Route path="*" element={<ComingSoon />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
