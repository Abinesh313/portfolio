import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  FileText,
  Menu,
  X,
  Sun,
  Moon,
  Download,
  ChevronRight
} from 'lucide-react';
import { LeetCodeIcon, GithubIcon, LinkedinIcon } from './Icons';

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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>

          {/* LeetCode link (hidden on small mobile to avoid navbar clipping) */}
          <a
            href={personalInfo.socials.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            title="LeetCode (1030+ Solved)"
            className="nav-leetcode-pill btn-outline"
            style={{
              padding: '0.4rem 0.75rem',
              fontSize: '0.8rem',
              borderRadius: 'var(--radius-full)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              textDecoration: 'none',
              flexShrink: 0
            }}
          >
            <LeetCodeIcon size={14} color="#FFA116" />
            <span className="font-mono" style={{ fontWeight: 600 }}>1030+</span>
          </a>

          {/* Resume View Button */}
          <button
            onClick={onOpenResume}
            className="nav-resume-btn btn btn-primary"
            style={{
              padding: '0.45rem 0.95rem',
              fontSize: '0.82rem',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              flexShrink: 0
            }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle theme"
            className="btn-secondary"
            style={{
              width: '36px',
              height: '36px',
              padding: 0,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0
            }}
          >
            {theme === 'dark' ? <Sun size={16} color="#F4A261" /> : <Moon size={16} color="#64748B" />}
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

      {/* Mobile Drawer (100% Solid Opaque Full-Screen Background) */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '56px',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'calc(100vh - 56px)',
            backgroundColor: 'var(--bg-drawer)',
            padding: '1.25rem 1.25rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            zIndex: 99999,
            overflowY: 'auto'
          }}
        >
          {/* Navigation Link Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: activeSection === link.href.replace('#', '') ? 'var(--text-accent)' : 'var(--text-primary)',
                  padding: '0.85rem 1.15rem',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--bg-card)',
                  border: activeSection === link.href.replace('#', '') ? '1px solid var(--border-accent)' : '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'var(--transition)'
                }}
              >
                <span>{link.label}</span>
                <ChevronRight size={16} style={{ color: 'var(--text-muted)' }} />
              </a>
            ))}
          </div>

          {/* Bottom Actions & Socials */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <div style={{ display: 'flex', gap: '0.65rem' }}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn btn-primary"
                style={{ flex: 1, padding: '0.75rem', fontSize: '0.88rem', justifyContent: 'center' }}
              >
                <FileText size={16} />
                <span>Interactive Resume</span>
              </button>
              <a
                href={personalInfo.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none', justifyContent: 'center' }}
                title="Open Official Resume PDF on Google Drive"
              >
                <Download size={16} />
                <span>Drive PDF</span>
              </a>
            </div>

            {/* Quick Socials */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', paddingTop: '0.5rem' }}>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                title="GitHub"
              >
                <GithubIcon size={16} />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                title="LinkedIn"
              >
                <LinkedinIcon size={16} color="#0A66C2" />
              </a>
              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ width: '38px', height: '38px', borderRadius: '50%', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                title="LeetCode (1030+ Solved)"
              >
                <LeetCodeIcon size={16} color="#FFA116" />
              </a>
            </div>
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
