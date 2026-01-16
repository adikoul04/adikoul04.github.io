import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineering Intern',
      company: 'Accenture',
      period: 'May 2025 - August 2025',
      logo: '/images/Accenture_Logo.png',
      website: 'https://www.accenture.com/us-en',
      achievements: [
        'Delivered global Salesforce Service Cloud implementation, collaborating and leading with cross-functional teams of engineers, SMEs, and stakeholders. Integrated modern software architecture, and automated DevOps and testing pipelines',
        'Developed multi-agent conversational analytics API, enabling natural language queries, dynamic agent orchestration, and visual data insights via SQL and Python workflows',
        'Built a $250k Country-Site Intelligence solution proposal integrating AI into clinical-trial site selection processes, directly contributing to revenue generation',
        'Designed scalable technology platforms with automated processes, presenting solutions to executive leadership'
      ],
      roundLogo: false
    },
    {
      title: 'AI Researcher',
      company: 'Boston University',
      period: 'August 2024 - December 2024',
      logo: '/images/BU_Logo.png',
      website: 'https://www.bu.edu/eng/academics/departments-and-divisions/electrical-and-computer-engineering/',
      achievements: [
        'Tested new autonomous driving models in the CARLA simulator',
        'Added custom signs and other obstacles into a CARLA instance for model training',
        'Added descriptions to corresponding videos to be used for LLM training and testing',
        'Parsed through and annotated training data to mark for retraining or discarding'
      ],
      roundLogo: true
    },
    {
      title: 'AI/Data Science Intern',
      company: 'SES AI',
      period: 'June 2024 - August 2024',
      logo: '/images/SES_Logo.png',
      website: 'https://ses.ai/',
      achievements: [
        'Used LLMs to extract solvent and electrolyte data from 7500+ battery papers and constructed a database containing relevant information',
        'Created a random forest classification model to analyze and predict correlation between factors related to issues in the battery production process',
        'Developed tools that calculated Tanimoto similarity scores and used K-means clustering to aid scientists in finding desirable chemical compounds',
        'Built a web app used company-wide to search a database of academic articles and retrieve data generated during the battery manufacturing process'
      ],
      roundLogo: false
    },
    {
      title: 'Swim Instructor',
      company: 'RecWell',
      period: 'January 2024 - May 2024',
      logo: '/images/RecWell_Logo.png',
      website: 'https://recwell.umd.edu/',
      achievements: [
        'Developing and refining competitive swimming techniques',
        'Taught ages ranging from 6 months to adult according to American Red Cross curriculum',
        'Promoting aquatic safety and fostering an encouraging learning environment',
        'Writing individualized reports upon the completion of each semester'
      ],
      roundLogo: true
    },
    {
      title: 'Youth Swim Instructor/Lifeguard',
      company: 'Lifetime',
      period: 'August 2022 - Present',
      logo: '/images/Lifetime_Logo.png',
      website: 'https://www.lifetime.life/',
      achievements: [
        'Managing groups of up to seven children in the water',
        'Monitoring a complex of indoor and outdoor pools and seating areas',
        'Promoting safety and high levels of hospitality'
      ],
      roundLogo: false
    },
    {
      title: 'Founder - Math with Adi',
      company: 'Lexington Public Schools',
      period: 'December 2020 - June 2023',
      logo: '/images/LPS_Logo.png',
      website: 'https://www.lexingtonma.org/',
      achievements: [
        'Secured support of the Head of Mathematics and Superintendent of Lexington Public Schools',
        'Created new and interesting problems which would be accessible yet challenging to children of all levels',
        'Recruited several other LHS students to teach additional classes and be able to admit more students',
        'Worked with the Lexington Public Schools IT department to build a website to supplement the classes and increase outreach to other towns'
      ],
      roundLogo: false
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
              Experience
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
            >
              <div className="grid md:grid-cols-[1fr_200px] gap-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-cyan-400 mb-2">
                      {exp.title}
                    </h2>
                    <h3 className="text-xl text-gray-300 mb-1">{exp.company}</h3>
                    <p className="text-gray-500">{exp.period}</p>
                  </div>
                  
                  <ul className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-gray-300">
                        <span className="text-cyan-400 flex-shrink-0">▹</span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.logo && (
                  <div className="flex items-center justify-center">
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group/logo"
                    >
                      <div className={`p-6 ${exp.roundLogo ? 'rounded-full' : 'rounded-xl'} hover:scale-110 transition-transform duration-300`}>
                        <img
                          src={exp.logo}
                          alt={`${exp.company} Logo`}
                          className="w-40 h-40 object-contain"
                        />
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;