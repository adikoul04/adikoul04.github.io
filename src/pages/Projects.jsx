import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ project, index }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s ease-out'
      }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
    >
      <h2 className="text-2xl md:text-3xl font-display font-bold text-cyan-400 mb-6">
        {project.title}
      </h2>
      
      <div className="space-y-8">
        <p className="text-gray-300 leading-relaxed">
          {project.description}
        </p>

        {project.videos && (
          <div className={`grid ${project.videos.length === 1 ? 'grid-cols-1 md:w-2/3 mx-auto' : 'md:grid-cols-2'} gap-4`}>
            {project.videos.map((video, i) => (
              <div key={i} className="space-y-2">
                <video
                  controls
                  autoPlay
                  loop
                  muted
                  className="w-full rounded-lg border border-gray-700"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-sm text-gray-500 text-center">{video.caption}</p>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap gap-3 pt-4">
          {project.links.map((link, i) => (
            <a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'LexForum',
      description: `As the final project of the CodePath WEB102 Intermediate Web Development course, I created a web application called LexForum using React and Supabase. It is a forum where users can post announcements, ask questions, and comment on other posts regarding everything related to Lexington, Massachusetts. The application allows for user authentication, filtering posts by keywords, and editing and deleting posts that only the user has created.`,
      videos: [
        {
          src: '/videos/LexForum_Recording.mov',
          caption: 'LexForum Demo'
        }
      ],
      links: [
        { label: 'Live Demo', url: 'https://lexforum.netlify.app/' },
        { label: 'GitHub', url: 'https://github.com/adikoul04/lexforum' }
      ]
    },
    {
      title: 'AI Attendance System',
      description: `I participated in the Fall 2024 AI4ALL Ignite Accelerator program. In this program, I learned about numerous AI concepts, best practices, and ethical concerns of developing AI technologies. We were put into groups, and each group created an AI-powered project based on a particular subfield. Our group focused on computer vision, so we developed an automated smart attendance system that uses facial recognition to take attendance and logs each entry's attendance. The user is also able to look at past attendance for any particular day.`,
      videos: [
        {
          src: '/videos/AI_Attendance_Recording.mp4',
          caption: 'AI Attendance Demo'
        }
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/adikoul04/AI-Attendance-System' }
      ]
    },
    {
      title: 'Car Driving Reinforcement Learning Model',
      description: `I created an RL Model that learns to drive a car along a circular track. I created a simple game as the base environment in which the player uses the arrow keys to control the car. The objective is to complete a lap as fast as possible, and if the car goes off the track, it resets at its starting position. I utilized an Epsilon-Greedy Q-Learning algorithm to implement the RL model. After about 60,000 iterations, the car was able to drive a full lap on its own.`,
      videos: [
        {
          src: '/videos/RL_Model_Training.mov',
          caption: 'RL Model Training'
        },
        {
          src: '/videos/RL_Model_Full_Lap.mov',
          caption: 'RL Model Full Lap'
        }
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/adikoul04/Car-Driving-RL-Model' }
      ]
    },
    {
      title: 'Top Drives Rating Predictor',
      description: `For a while, I played a mobile game called Top Drives in which cars are given ratings based on a number of factors including power, weight, drivetrain, tire type, and more. I created a neural network trained on data of 435 cars in the game to predict the rating of new cars given stats entered by the user.`,
      videos: [
        {
          src: '/videos/Top_Drives_Model_Test.mov',
          caption: 'Top Drives Model Test'
        }
      ],
      links: [
        { label: 'GitHub', url: 'https://github.com/adikoul04/Top-Drives-Neural-Network' }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-24 px-6 sm:px-8 md:px-12 lg:px-8 flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Outside of class, I work on various CS projects to sharpen my skills and learn new concepts. 
            For more details and code, check out my{' '}
            <a
              href="https://github.com/adikoul04/Projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline"
            >
              GitHub
            </a>.
          </p>
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;