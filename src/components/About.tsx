import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './About.css';

const About: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentPetIndex, setCurrentPetIndex] = useState(0);

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

  const nextPet = () => {
    setCurrentPetIndex((prev) => (prev + 1) % pets.length);
  };

  const prevPet = () => {
    setCurrentPetIndex((prev) => (prev - 1 + pets.length) % pets.length);
  };

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
          </motion.div>

          <motion.div
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              I'm a Software Engineer with experience in full-stack development and cloud architectures. 
              I specialize in leading projects from design to deployment and have contributed to multiple 
              successful product launches.
            </p>
            
            <p>
              I live in Durham, NC with my two cats Mello and Lucy, my sister and her dog Mimi. 
              I enjoy playing videogames, tennis, and working on projects around the house.
            </p>
          </motion.div>

          <motion.div
            className="pet-carousel"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="carousel-container">
              <button className="carousel-btn carousel-btn--prev" onClick={prevPet} aria-label="Previous pet">
                <FaChevronLeft />
              </button>
              
              <div className="carousel-content">
                {pets.map((pet, index) => {
                  const isActive = index === currentPetIndex;
                  const isPrev = index === (currentPetIndex - 1 + pets.length) % pets.length;
                  const isNext = index === (currentPetIndex + 1) % pets.length;
                  
                  let position = 'hidden';
                  if (isActive) position = 'active';
                  else if (isPrev) position = 'prev';
                  else if (isNext) position = 'next';
                  
                  return (
                    <motion.div
                      key={pet.name}
                      className={`pet-card carousel-item carousel-item--${position} ${isActive ? 'hover-lift' : ''}`}
                      animate={{
                        scale: isActive ? 1 : 0.8,
                        opacity: isActive ? 1 : 0.6,
                        zIndex: isActive ? 10 : 1,
                        x: isPrev ? -120 : isNext ? 120 : 0
                      }}
                      whileHover={!isActive ? {
                        scale: 0.85,
                        opacity: 0.8
                      } : {}}
                      transition={{ 
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                        mass: 0.8
                      }}
                      onClick={() => setCurrentPetIndex(index)}
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
                  );
                })}
              </div>
              
              <button className="carousel-btn carousel-btn--next" onClick={nextPet} aria-label="Next pet">
                <FaChevronRight />
              </button>
            </div>
            

          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default About; 