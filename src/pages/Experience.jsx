import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      title: 'Quantitative Trading Intern',
      company: 'IMC Trading',
      period: 'Summer 2026',
      logo: '/images/IMC_Logo.png',
      website: 'https://www.imc.com/us',
      achievements: [
        'Incoming Summer 2026 Intern'
      ],
      roundLogo: false
    },
    {
      title: 'Machine Learning Engineer',
      company: 'Vex',
      period: 'August 2025 - Present',
      logo: '/images/Vex_Logo.webp',
      website: 'https://vex.social/',
      achievements: [
        'Played a key role in driving 20x user growth by building and deploying machine-learning features from pre-launch prototypes through production, iterating based on real user behavior.',
        'Engineered end-to-end custom voice agents using ElevenLabs, including fine-tuned conversational AI flows optimized for empathy, tone matching, and natural turn-taking, resulting in more engaging and human-like interactions.',
        'Built interactive in-chat engagement features, including a real-time soundboard and image-based reactions, increasing session length, improving user retention, and contributing to organic virality through more expressive conversations',
        'Led the migration of the AI inference pipeline from OpenAI to Google Gemini, redesigning request orchestration and caching layers to reduce inference costs by ~40% while improving median response latency by ~30%.'
      ],
      roundLogo: false
    },
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
        'Designed and executed experiments to evaluate autonomous driving models within the CARLA simulator, benchmarking performance across diverse traffic and environmental scenarios',
        'Engineered and integrated custom traffic signs, dynamic obstacles, and edge-case scenarios into CARLA environments to improve robustness and stress-test perception and planning systems',
        'Built a multimodal dataset pipeline by pairing simulation videos with structured natural-language descriptions, enabling downstream LLM-based evaluation and cross-modal training',
        'Developed data curation and validation workflows to systematically identify corrupted, low-signal, or failure-case frames, streamlining retraining cycles for research collaborators'
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
        'Built an LLM-powered information extraction pipeline to parse solvent and electrolyte properties from 7,500+ battery research papers, producing a structured, queryable database for downstream analysis',
        'Trained and evaluated a random forest classification model to identify and predict correlations between material properties and failure modes in the battery manufacturing process',
        'Developed cheminformatics tools leveraging Tanimoto similarity metrics and K-means clustering to help researchers surface promising chemical compounds and explore the design space efficiently',
        'Designed and deployed a full-stack web application enabling company-wide search across academic literature and internal manufacturing data, unifying experimental results and model outputs in a single interface'
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
        'Developed and refined competitive swimming techniques',
        'Taught ages ranging from 6 months to adult according to American Red Cross curriculum',
        'Promoted aquatic safety and fostered an encouraging learning environment',
        'Wrote individualized reports upon the completion of each semester'
      ],
      roundLogo: true
    },
    {
      title: 'Youth Swim Instructor/Lifeguard',
      company: 'Lifetime',
      period: 'August 2022 - August 2025',
      logo: '/images/Lifetime_Logo.png',
      website: 'https://www.lifetime.life/',
      achievements: [
        'Managed groups of up to seven children in the water',
        'Monitored a complex of indoor and outdoor pools and seating areas',
        'Promoted safety and high levels of hospitality'
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