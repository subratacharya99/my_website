import React from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';
import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'light' as const, icon: FaSun, label: 'Light' },
    { value: 'dark' as const, icon: FaMoon, label: 'Dark' },
    { value: 'system' as const, icon: FaDesktop, label: 'System' },
  ];

  const currentIndex = themes.findIndex(t => t.value === theme);

  const handleToggle = () => {
    const nextIndex = (currentIndex + 1) % themes.length;
    setTheme(themes[nextIndex].value);
  };

  const currentTheme = themes[currentIndex];
  const IconComponent = currentTheme.icon;

  return (
    <motion.button
      className="theme-toggle"
      onClick={handleToggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch theme (current: ${currentTheme.label})`}
      title={`Current: ${currentTheme.label} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -180, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="theme-toggle__icon"
      >
        <IconComponent />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle; 