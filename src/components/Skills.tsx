import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Skills.css';

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'Golang', 'C++', 'Java', 'MATLAB'],
      icon: '💻'
    },
    {
      title: 'Web Technologies',
      skills: ['React.js', 'Vue.js', 'Node.js', 'HTML', 'CSS', 'Django', 'Flask'],
      icon: '🌐'
    },
    {
      title: 'Cloud & Serverless',
      skills: ['AWS', 'Serverless Architecture', 'Lambda', 'API Gateway', 'S3', 'CloudFormation', 'Cognito'],
      icon: '☁️'
    },
    {
      title: 'Databases',
      skills: ['PostgreSQL', 'DynamoDB', 'NoSQL'],
      icon: '🗄️'
    },
    {
      title: 'Testing & Automation',
      skills: ['Unit Testing', 'Integration Testing', 'Automation Testing', 'ROBOT Framework', 'Hardware Testing'],
      icon: '🧪'
    },

    {
      title: 'Methodologies',
      skills: ['Agile', 'OOP', 'Full-stack Web Development'],
      icon: '⚙️'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="skills" className="skills section-padding bg-pattern">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills__content"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="skills__header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="section-title">Technical Skills</h2>
          </motion.div>

          <motion.div
            className="skills__grid"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="skill-category hover-lift"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="skill-category__header">
                  <div className="skill-category__icon">{category.icon}</div>
                  <h3 className="skill-category__title">{category.title}</h3>
                </div>
                
                <div className="skill-category__skills">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.6 + index * 0.1 + skillIndex * 0.05 
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 