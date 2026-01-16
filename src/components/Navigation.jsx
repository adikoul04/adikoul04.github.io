import React, { useState, useEffect, useMemo } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = useMemo(() => [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(section => 
        document.getElementById(section.id)
      );
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Social Links - Top Right */}
      <div className="fixed top-8 right-8 z-50 flex gap-4">
        <a
          href="https://www.linkedin.com/in/aditya-koul/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-cyan-500 transition-all duration-300 group"
        >
          <FaLinkedin className="text-gray-300 group-hover:text-white transition-colors" size={20} />
        </a>
        <a
          href="https://github.com/adikoul04"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center bg-gray-800/50 backdrop-blur-sm rounded-full hover:bg-cyan-500 transition-all duration-300 group"
        >
          <FaGithub className="text-gray-300 group-hover:text-white transition-colors" size={20} />
        </a>
      </div>

      {/* Side Dots Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-6">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center"
          >
            <span className="absolute right-full mr-4 px-3 py-1 bg-gray-800/90 backdrop-blur-sm text-cyan-400 text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {section.name}
            </span>
            <div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === index
                  ? 'border-cyan-400 bg-cyan-400 scale-125'
                  : 'border-gray-500 bg-transparent hover:border-cyan-400 hover:scale-110'
              }`}
            />
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navigation;
