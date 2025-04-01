import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './pages/Experience';
import ContactSection from './pages/Contact';
import Quantum from './components/Quantum';
import ProjectsSection from './pages/Projects';


function App() {
  return (
    <Router>
      <div className="bg-blue-100">
        <Navbar />
        <Routes>
          {/* Main Portfolio Route */}
          <Route
            path="/"
            element={
              
              <>
                <Hero3D />
                <ProjectsSection />
                <SkillsSection />
                <ExperienceSection />
                <ContactSection />
              </>
            }
          />

          {/* Quantum Computing Page */}
          <Route path="/quantum" element={<Quantum />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
