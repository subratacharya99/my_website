import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBuilding, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Avantor',
      location: 'Remote',
      period: 'Aug 2022 - Present',
      summary: 'Lead full-stack development for touchscreen pump systems and AWS serverless applications. Successfully launched 6 new product models and transitioned critical projects in-house, delivering significant cost savings.',
      keyTechnologies: ['Python', 'Go', 'Vue.js', 'TypeScript', 'AWS', 'DynamoDB', 'Lambda', 'API Gateway', 'Docker']
    },
    {
      title: 'Software Engineering Intern',
      company: 'iotaMotion',
      location: 'Iowa City, IA',
      period: 'Jun 2020 - Feb 2021',
      summary: 'Developed web and mobile applications for auditory health data analysis. Created signal processing algorithms and computer vision solutions for audiogram scanning and clinical data visualization.',
      keyTechnologies: ['Django', 'PostgreSQL', 'React Native', 'OpenCV']
    }
  ];

  return (
    <section id="experience" className="experience section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="experience__content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="experience__header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">Professional Experience</h2>
          </motion.div>

          <div className="experience__timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
              >
                <div className="timeline-content hover-lift">
                  <div className="timeline-header">
                    <div className="timeline-icon">
                      <FaBuilding />
                    </div>
                    <div className="timeline-meta">
                      <h3 className="timeline-title">{exp.title}</h3>
                      <div className="timeline-company">{exp.company}</div>
                      <div className="timeline-details">
                        <span className="timeline-location">
                          <FaMapMarkerAlt />
                          {exp.location}
                        </span>
                        <span className="timeline-period">
                          <FaCalendar />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                                     <div className="timeline-summary">
                     <p className="experience-summary">{exp.summary}</p>
                     <div className="key-technologies">
                       <h4>Key Technologies:</h4>
                       <div className="tech-tags">
                         {exp.keyTechnologies.map((tech, techIndex) => (
                           <span key={techIndex} className="tech-tag">{tech}</span>
                         ))}
                       </div>
                     </div>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 