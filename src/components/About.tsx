import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaRocket, FaBolt, FaCogs, FaBullseye } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const pets = [
    {
      name: 'Mello',
      image: `${process.env.PUBLIC_URL}/images/mello.JPG`,
      alt: 'Mello the cat'
    },
    {
      name: 'Lucy',
      image: `${process.env.PUBLIC_URL}/images/lucy.JPG`,
      alt: 'Lucy the cat'
    },
    {
      name: 'Mimi',
      image: `${process.env.PUBLIC_URL}/images/mimi.jpg`,
      alt: 'Mimi the dog'
    }
  ];

  return (
    <section id="about" className="about section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="about__content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="about__header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">About Me</h2>
            <div className="section-subtitle">
              Software Engineer with extensive experience in developing innovative solutions
            </div>
          </motion.div>

          <div className="about__grid">
            <motion.div
              className="about__text"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p>
                I am a dedicated Software Engineer with extensive experience in developing and enhancing 
                software solutions across various industries. My journey began with a strong educational 
                foundation in engineering, providing me with both technical depth and analytical thinking skills.
              </p>
              
              <p>
                I specialize in leading full-stack development projects, overseeing all aspects from initial 
                design through to final deployment. I have experience with modern cloud architectures, 
                automation systems, and have contributed to multiple successful product launches throughout 
                my career.
              </p>
              
              <p>
                My approach combines technical expertise with strong problem-solving skills and effective 
                communication. I thrive in both independent and team environments, consistently delivering 
                high-quality solutions that drive business value and operational efficiency.
              </p>
            </motion.div>

            <motion.div
              className="about__highlights"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="highlight-card hover-lift">
                <div className="highlight-icon">
                  <FaRocket />
                </div>
                <h3>Innovation</h3>
                <p>Led development of cutting-edge solutions, saving companies time and money</p>
              </div>
              
              <div className="highlight-card hover-lift">
                <div className="highlight-icon">
                  <FaBolt />
                </div>
                <h3>Performance</h3>
                <p>Improved application efficiency and reduced manufacturing defects</p>
              </div>
              
              <div className="highlight-card hover-lift">
                <div className="highlight-icon">
                  <FaCogs />
                </div>
                <h3>Versatility</h3>
                <p>Full-stack expertise from embedded systems to cloud architecture</p>
              </div>
              
              <div className="highlight-card hover-lift">
                <div className="highlight-icon">
                  <FaBullseye />
                </div>
                <h3>Results</h3>
                <p>Completed projects on time and within budget</p>
              </div>
            </motion.div>
          </div>

          {/* Personal Section */}
          <motion.div
            className="about__personal"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="personal__title">More About Me</h3>
            <div className="personal__text">
              <p>
                I live in Durham, NC with my two cats Mello and Lucy, my sister and her dog Mimi. 
                I enjoy playing videogames, tennis, and working on projects around the house.
              </p>
            </div>

            <div className="pet-gallery">
              {pets.map((pet, index) => (
                <motion.div
                  key={pet.name}
                  className="pet-card hover-lift"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.2 }}
                >
                  <div className="pet-image-container">
                    <img 
                      src={pet.image} 
                      alt={pet.alt}
                      className="pet-image"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #f1f5f9; color: #64748b; font-size: 1rem;">${pet.name}</div>`;
                      }}
                    />
                  </div>
                  <div className="pet-info">
                    <h3 className="pet-name">{pet.name}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 