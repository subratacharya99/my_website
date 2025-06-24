import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Personal.css';

const Personal: React.FC = () => {
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
    <section id="personal" className="personal section-padding">
      <div className="container">
        <motion.div
          ref={ref}
          className="personal__content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="personal__header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">More About Me</h2>
            <div className="section-subtitle">
            </div>
          </motion.div>

          <motion.div
            className="personal__content-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
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
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
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

export default Personal; 