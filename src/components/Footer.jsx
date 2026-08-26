import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" style={{ padding: '3.5rem 0 2.5rem', backgroundColor: 'var(--bg-primary)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2rem' }}>
          
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <img
                src="/profile.png"
                alt={personalInfo.name}
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  border: '1.5px'
                }}
              />
              <span className="font-serif" style={{ fontSize: '1.15rem', fontWeight: 600 }}>
                {personalInfo.name}
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              Backend-Leaning Full-Stack Developer • Building high-integrity systems
            </p>
          </div>

          {/* Social Links & Back to Top */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a
              href={personalInfo.resumeDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{
                padding: '0.4rem 0.85rem',
                fontSize: '0.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none'
              }}
              title="Download Official Resume PDF"
            >
              <Download size={14} />
              <span>Resume PDF</span>
            </a>

            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              title="GitHub"
            >
              <GithubIcon size={16} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              title="LinkedIn"
            >
              <LinkedinIcon size={16} color="#0A66C2" />
            </a>

            <a
              href={personalInfo.socials.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              title="LeetCode"
            >
              <LeetCodeIcon size={16} color="#FFA116" />
            </a>

            <button
              onClick={scrollToTop}
              className="btn btn-primary"
              style={{ width: '38px', height: '38px', padding: 0, borderRadius: '50%' }}
              title="Back to top"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>

        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div style={{ fontFamily: 'var(--font-mono)' }}>
            Engineered with React & Spring Boot Mindset
          </div>
        </div>

      </div>
    </footer>
  );
}
