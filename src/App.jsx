import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <div className="relative">
      <ParticleBackground />
      <Navigation />
      <div id="home" className="min-h-screen">
        <Home />
      </div>
      <div id="about" className="min-h-screen">
        <About />
      </div>
      <div id="experience" className="min-h-screen">
        <Experience />
      </div>
      <div id="projects" className="min-h-screen">
        <Projects />
      </div>
      <footer className="py-8 text-center text-gray-500 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Aditya Koul. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;