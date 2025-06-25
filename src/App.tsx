import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollProgressBar from './components/ScrollProgressBar';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorTrail from './components/CursorTrail';
import CustomCursor from './components/CustomCursor';
import IdleCursorEffect from './components/IdleCursorEffect';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <ScrollProgressBar />
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
        <CursorTrail />
        <IdleCursorEffect />
        <CustomCursor />
      </div>
    </ThemeProvider>
  );
}

export default App; 