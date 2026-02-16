import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = {
    'Programming Languages': [
      'Python', 'Java', 'C/C++', 'JavaScript', 'SQL/PostgreSQL', 
      'HTML/CSS', 'Rust', 'MATLAB', 'R', 'OCaml', 'x86 Assembly'
    ],
    'Frameworks & Libraries': [
      'PyTorch', 'TensorFlow', 'OpenCV', 'React', 'Node.js', 
      'Tailwind CSS', 'Flask', 'ROS', 'Git'
    ],
    'Technologies & Tools': [
      'AWS', 'Docker', 'Supabase', 'MongoDB', 'Netlify', 'Railway',
      'Streamlit', 'Salesforce', 'Selenium', 'CARLA', 'ArduPilot'
    ],
    'AI/ML Concepts': [
      'Neural Networks', 'Deep Learning', 'Reinforcement Learning', 
      'Computer Vision', 'CNNs', 'LLMs', 'Agentic AI'
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-24 px-6 sm:px-8 md:px-12 lg:px-8 flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {Object.entries(skills).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-display font-semibold text-cyan-400 mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-4">
                {items.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    className="px-4 py-2 bg-gray-700/50 rounded-lg text-gray-300 hover:bg-cyan-500/20 hover:text-cyan-400 hover:scale-105 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
        >
          <h3 className="text-2xl font-display font-semibold text-cyan-400 mb-4">
            More About Me
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm passionate about leveraging cutting-edge technology to solve real-world problems. 
            My experience spans from building AI-powered applications to developing full-stack solutions 
            for enterprise clients. I thrive in environments that challenge me to learn new technologies 
            and apply innovative approaches to complex problems.
            <br /><br />
            When I'm not coding, you can find me exploring the latest developments in AI and fintech, 
            playing sports with friends, or teaching swimming lessons to share my love for the water.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;