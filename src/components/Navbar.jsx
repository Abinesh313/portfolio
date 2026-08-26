import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  FileText,
  Menu,
  X,
  Sun,
  Moon,
  Download
} from 'lucide-react';
import { LeetCodeIcon } from './Icons';

export default function Navbar({ onOpenResume, theme, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'experience', 'projects', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills & LeetCode', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        backgroundColor: 'var(--bg-glass)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: isScrolled ? '0.65rem 0' : '0.85rem 0'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Brand Monogram */}
        <a
          href="#hero"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none',
            color: 'var(--text-primary)',
            flexShrink: 0
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '38px',
              height: '38px',
              flexShrink: 0
            }}
          >
            <img
              src="/profile.png"
              alt="Abinesh G"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '1.5px solid var(--accent-primary)',
                boxShadow: '0 4px 15px var(--accent-glow)'
              }}
            />
          </div>
          <div style={{ minWidth: 'max-content' }}>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.05rem', letterSpacing: '-0.01em', whiteSpace: 'nowrap' }}>
              Abinesh G
            </div>
            <div className="brand-subtitle" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-accent)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
              SDE & Full-Stack
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: activeSection === link.href.replace('#', '') ? 'var(--text-accent)' : 'var(--text-secondary)',
                transition: 'color 0.2s ease',
                position: 'relative',
                padding: '0.3rem 0'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={(e) => {
                if (activeSection !== link.href.replace('#', '')) {
                  e.currentTarget.style.color = 'var(--text-secondary)';
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>

          {/* LeetCode link */}
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode (1030+ Solved)"
            className="btn-outline"
            style={{
              padding: '0.45rem 0.85rem',
              fontSize: '0.82rem',
              borderRadius: 'var(--radius-full)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              textDecoration: 'none'
            }}
          >
            <LeetCodeIcon size={15} color="#FFA116" />
            <span className="font-mono" style={{ fontWeight: 600 }}>1030+</span>
          </a>

          {/* Resume View Button */}
          <button
            onClick={onOpenResume}
            className="btn btn-primary"
            style={{
              padding: '0.5rem 1.1rem',
              fontSize: '0.85rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}
          >
            <FileText size={15} />
            <span>Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="btn-secondary"
            style={{
              width: '38px',
              height: '38px',
              padding: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {theme === 'dark' ? <Sun size={17} color="#F4A261" /> : <Moon size={17} color="#64748B" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              display: 'none',
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              padding: '0.4rem'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--bg-secondary)',
            borderBottom: '1px solid var(--border-card)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-luxe)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                fontSize: '1.1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                padding: '0.5rem 0',
                borderBottom: '1px solid var(--border-subtle)'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary"
              style={{ flex: 1, padding: '0.7rem' }}
            >
              <FileText size={16} />
              <span>Interactive Resume</span>
            </button>
            <a
              href={personalInfo.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.7rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
              title="Open Official Resume PDF on Google Drive"
            >
              <Download size={16} />
              <span>Drive PDF</span>
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 840px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 839px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
