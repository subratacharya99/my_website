import React, { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import './ScrollProgressBar.css';

const ScrollProgressBar: React.FC = () => {
  const scaleX = useSpring(0, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      
      scaleX.set(progress);
    };

    // Update progress on scroll
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    
    // Update progress on resize (in case content height changes)
    window.addEventListener('resize', updateScrollProgress, { passive: true });
    
    // Initial calculation
    updateScrollProgress();

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
    };
  }, [scaleX]);

  return (
    <div className="scroll-progress-container">
      <motion.div
        className="scroll-progress-bar"
        style={{
          scaleX,
          transformOrigin: '0%'
        }}
        initial={{ scaleX: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      />
      <div className="scroll-progress-background" />
    </div>
  );
};

export default ScrollProgressBar; 