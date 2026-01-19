import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const blobRef1 = useRef(null);
  const blobRef2 = useRef(null);
  const blobRef3 = useRef(null);
  const [showScroll, setShowScroll] = React.useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      
      const offsetX = (clientX - centerX) / 50;
      const offsetY = (clientY - centerY) / 50;

      if (blobRef1.current) {
        blobRef1.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
      if (blobRef2.current) {
        blobRef2.current.style.transform = `translate(${-offsetX * 0.5}px, ${-offsetY * 0.5}px)`;
      }
      if (blobRef3.current) {
        blobRef3.current.style.transform = `translate(${offsetX * 0.8}px, ${-offsetY * 0.8}px)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = React.useMemo(() => [
    'Full-Stack Developer', 
    'AI Researcher', 
    'Quant Finance Enthusiast',
  ], []);
  
  const [currentRole, setCurrentRole] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  useEffect(() => {
    const currentFullText = roles[currentRole];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < currentFullText.length) {
          setDisplayedText(currentFullText.slice(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(displayedText.slice(0, -1));
        } else {
          // Move to next role
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setTimeout(() => {}, pauseBeforeType);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRole, roles]);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-8 md:px-12 lg:px-8">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={blobRef1}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"
          style={{ transition: 'transform 0.3s ease-out' }}
        />
        <div
          ref={blobRef2}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float-slow"
          style={{ transition: 'transform 0.3s ease-out' }}
        />
        <div
          ref={blobRef3}
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float"
          style={{ transition: 'transform 0.3s ease-out', animationDelay: '1s' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image - Shows first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative order-1 md:order-2 mt-5 md:mt-0"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              
              {/* Image container */}
              <div className="relative rounded-full overflow-hidden border-4 border-cyan-500/50 shadow-2xl shadow-cyan-500/20">
                <img
                  src="images/Adi_Headshot.jpg"
                  alt="Aditya Koul"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-4 border-cyan-500/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-blue-500/30 rounded-full" />
            </div>
          </motion.div>

          {/* Text Content - Shows second on mobile */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 md:order-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-7xl font-display font-bold"
            >
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Aditya Koul
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="h-12 flex items-center"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-300">
                <span className="text-cyan-400">{'> '}</span>
                <span>{displayedText}</span>
                <span className="animate-pulse text-cyan-400">_</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl"
            >
              Hi there! I'm a Computer Science student at{' '}
              <span className="text-cyan-400 font-semibold">The University of Maryland, College Park</span>,
              specializing in machine learning, robotics, and autonomous systems. I'm passionate about
              adapting ML principles to all aspects of full-stack engineering, quantitative finance, and robotics.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <button
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                Learn More
              </button>
              <a
                href="https://github.com/adikoul04"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
              >
                View Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showScroll ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        style={{ pointerEvents: showScroll ? 'auto' : 'none' }}
      >
        <div className="flex flex-col items-center gap-2 text-gray-500">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;