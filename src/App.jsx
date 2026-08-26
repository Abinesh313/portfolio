import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsAndLeetcode from './components/SkillsAndLeetcode';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TechMarquee from './components/TechMarquee';
import ResumeModal from './components/ResumeModal';
import InteractiveBackground from './components/InteractiveBackground';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Global Interactive Spotlight Tracker for all cards
  useEffect(() => {
    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const cards = document.querySelectorAll('.glass-card');

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // If cursor/touch is near or over the card
        if (
          clientX >= rect.left - 60 &&
          clientX <= rect.right + 60 &&
          clientY >= rect.top - 60 &&
          clientY <= rect.bottom + 60
        ) {
          const x = clientX - rect.left;
          const y = clientY - rect.top;
          card.style.setProperty('--card-mouse-x', `${x}px`);
          card.style.setProperty('--card-mouse-y', `${y}px`);
          card.style.setProperty('--card-spotlight-opacity', '1');
        } else {
          card.style.setProperty('--card-spotlight-opacity', '0');
        }
      });
    };

    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
    };
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="portfolio-app" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* Interactive Reactive Canvas Background (Touches & Scroll) */}
      <InteractiveBackground theme={theme} />

      {/* Noise Texture */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navbar 
        onOpenResume={() => setResumeOpen(true)} 
        theme={theme} 
        onToggleTheme={toggleTheme} 
      />

      {/* Main Sections */}
      <main style={{ flex: 1 }}>
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <TechMarquee />
        <Experience />
        <Projects />
        <SkillsAndLeetcode />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top Action */}
      <ScrollToTop />

      {/* Resume Viewer / Print Modal */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />
    </div>
  );
}
