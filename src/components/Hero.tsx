import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaDownload, FaComments } from 'react-icons/fa';
import './Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [shouldJiggle, setShouldJiggle] = useState(false);
  const jiggleTimeoutRef = useRef<NodeJS.Timeout>();
  
  // Typewriter animation states
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hi, I'm Subrat Acharya";

  const resetJiggleTimer = () => {
    // Clear existing timer
    if (jiggleTimeoutRef.current) {
      clearTimeout(jiggleTimeoutRef.current);
    }
    
    // Stop current jiggle
    setShouldJiggle(false);
    
    // Start new timer for 5 seconds
    jiggleTimeoutRef.current = setTimeout(() => {
      setShouldJiggle(true);
    }, 5000);
  };

  // Start initial timer
  useEffect(() => {
    resetJiggleTimer();
    
    return () => {
      if (jiggleTimeoutRef.current) {
        clearTimeout(jiggleTimeoutRef.current);
      }
    };
  }, []);

  // Typewriter animation effect - runs once on load
  useEffect(() => {
    let typingTimer: NodeJS.Timeout;
    let currentIndex = 0;

    const type = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        typingTimer = setTimeout(type, 100); // 100ms between each character
      } else {
        setIsTyping(false);
        // Typing complete, cursor will remain and keep blinking
      }
    };
    
    // Start typing immediately
    type();

    return () => {
      clearTimeout(typingTimer);
    };
  }, [fullText]);

  const handleDragStart = () => {
    setIsDragging(true);
    resetJiggleTimer();
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    resetJiggleTimer();
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      // Custom smooth scrolling animation
      const startPosition = window.pageYOffset;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 80; // Account for fixed header height
      const distance = offsetPosition - startPosition;
      const duration = 800; // Animation duration in milliseconds
      let start: number | null = null;
      
      // Easing function for smooth animation
      const ease = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };
      
      const animation = (currentTime: number) => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      
      requestAnimationFrame(animation);
    }
  };

  return (
    <section id="hero" className="hero bg-pattern" ref={heroRef}>
      <div className="container">
        <div className="hero__content">
          <motion.div
            className="hero__text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
                         <motion.h1
               className="hero__title"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
             >
               <span className="typewriter-text">
                 {displayedText.includes('Subrat Acharya') ? (
                   <>
                     {displayedText.split('Subrat Acharya')[0]}
                     <span className="gradient-text">Subrat Acharya</span>
                   </>
                 ) : (
                   displayedText
                 )}
                 <span className="typewriter-cursor blinking">|</span>
               </span>
             </motion.h1>
            
            <motion.h2
              className="hero__subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Software Engineer
            </motion.h2>
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <button className="btn btn--primary" onClick={scrollToContact}>
                <FaComments />
                Get In Touch
              </button>
              <a 
                href={`${process.env.PUBLIC_URL}/resume/Subrat_Acharya_Resume.pdf`}
                download="Subrat_Acharya_Resume.pdf"
                className="btn btn--secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDownload />
                Download Resume
              </a>
            </motion.div>
            
            <motion.div
              className="hero__social"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a href="https://github.com/subratacharya99" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/subrat-acharya/" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="hero__visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="hero__avatar">
              <motion.div 
                className={`avatar-image ${shouldJiggle ? 'jiggling' : ''}`}
                drag
                dragMomentum={false}
                dragElastic={0}
                dragConstraints={heroRef}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onHoverStart={() => resetJiggleTimer()}
                whileDrag={{ 
                  scale: 1.1, 
                  zIndex: 9999,
                  cursor: 'grabbing'
                }}
                whileHover={{ 
                  scale: 1.05,
                  cursor: 'grab'
                }}
              >
                <img 
                  src={`${process.env.PUBLIC_URL}/images/profile.jpg`}
                  alt="Subrat Acharya" 
                  className="profile-photo"
                  draggable={false}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 