import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__text">
            <span>Created by Subrat Acharya</span>
          </div>
          
          <div className="footer__social">
            <a 
              href="https://github.com/subratacharya99" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a 
              href="https://www.linkedin.com/in/subrat-acharya/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Subrat Acharya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 