import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'subratacharya99@gmail.com',
      href: 'mailto:subratacharya99@gmail.com'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'linkedin.com/in/subrat-acharya',
      href: 'https://www.linkedin.com/in/subrat-acharya/'
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'github.com/subratacharya99',
      href: 'https://github.com/subratacharya99'
    },
    {
      icon: <FaMapMarkerAlt />,
      label: 'Location',
      value: 'Research Triangle Park, NC',
      href: null
    }
  ];

  return (
    <section id="contact" className="contact section-padding bg-pattern">
      <div className="container">
        <motion.div
          ref={ref}
          className="contact__content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="contact__centered">
            <motion.div
              className="contact__info"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="section-title">Get In Touch</h2>
              <p>
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you're looking for a software engineer, want to collaborate, or just want to say hello, 
                I'd love to hear from you!
              </p>
              
              <div className="contact__list">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="contact__item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  >
                    <div className="contact__item-icon">
                      {item.icon}
                    </div>
                    <div className="contact__item-content">
                      <div className="contact__item-label">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="contact__item-value">
                          {item.value}
                        </a>
                      ) : (
                        <div className="contact__item-value">{item.value}</div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 