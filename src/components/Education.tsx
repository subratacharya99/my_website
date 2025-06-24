import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Education.css';

const Education: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const education = {
    degree: 'Bachelor of Science and Engineering in Biomedical Engineering',
    university: 'University of Iowa',
    location: 'Iowa City, IA',
    period: 'Aug 2018 - May 2022'
  };

  return (
    <section id="education" className="education section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="education__content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="education__header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">Education</h2>
          </motion.div>

          <motion.div
            className="education__card hover-lift"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="education__card-header">
              <div className="education__icon">
                <FaGraduationCap />
              </div>
              <div className="education__meta">
                <h3 className="education__degree">{education.degree}</h3>
                <div className="education__university">{education.university}</div>
                <div className="education__details">
                  <span className="education__location">
                    <FaMapMarkerAlt />
                    {education.location}
                  </span>
                  <span className="education__period">
                    <FaCalendar />
                    {education.period}
                  </span>
                </div>
              </div>
            </div>


          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 