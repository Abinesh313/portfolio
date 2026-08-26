import React from 'react';
import { personalInfo } from '../data/portfolioData';
import {
  ArrowRight,
  FileText,
  Mail,
  Sparkles,
  Award,
  Layers,
  Server,
  Zap,
  Download,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetCodeIcon } from './Icons';
import InteractiveTerminal from './InteractiveTerminal';
import GenerativeHeadline from './GenerativeHeadline';

export default function Hero({ onOpenResume }) {
  return (
    <section id="hero" className="section" style={{ paddingTop: '6.5rem', paddingBottom: '3.5rem' }}>
      <div className="container">

        {/* Hero Split Grid (Intro + Interactive Terminal) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '3rem',
            alignItems: 'center',
            marginBottom: '3rem'
          }}
          className="hero-split"
        >
          {/* Left Column: Headline & Intro */}
          <div>
            <p className="section-label">Backend-Leaning Full-Stack Engineer</p>
            <div style={{ marginBottom: '1.25rem' }}>
              <GenerativeHeadline />
            </div>

            {/* Subtitle Bio */}
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: '2rem'
              }}
            >
              Hi, I’m <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.name}</strong>. A Computer Science undergraduate and backend-focused full-stack developer with hands-on experience in <span style={{ color: 'var(--text-accent)', fontWeight: 600 }}>Java, Spring Boot, ReactJS, and PostgreSQL/SQL</span>, comfortable owning services end-to-end and shipping practical, production-ready software.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Explore Projects</span>
                <ArrowRight size={16} />
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary">
                <FileText size={16} />
                <span>Interactive Resume</span>
              </button>

              <a 
                href={personalInfo.resumeDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}
                title="Open Official PDF Resume in Google Drive"
              >
                <Download size={15} />
                <span>Resume (Drive PDF)</span>
                <ExternalLink size={12} style={{ opacity: 0.7 }} />
              </a>

              <a href="#contact" className="btn btn-outline">
                <Mail size={15} />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
                title="GitHub Profile"
              >
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
                title="LinkedIn Profile"
              >
                <LinkedinIcon size={15} color="#0A66C2" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalInfo.socials.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ padding: '0.45rem 0.85rem', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}
                title="LeetCode Profile (1030+ Solved)"
              >
                <LeetCodeIcon size={15} color="#FFA116" />
                <span>LeetCode (1030+)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Title & Live Interactive CLI Terminal */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img
                  src="/profile.png"
                  alt={personalInfo.name}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '1.5px solid var(--accent-primary)'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.01em', lineHeight: 1.2 }}>
                    {personalInfo.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', fontFamily: 'var(--font-mono)' }}>
                    SDE Intern @ Cognizant & Nissan Digital
                  </div>
                </div>
              </div>
            </div>

            <InteractiveTerminal />
          </div>
        </div>

        {/* Quick Metrics Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginTop: '1.5rem'
          }}
        >
          {personalInfo.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card stat-card"
              style={{
                padding: '1.5rem',
                border: '1px solid var(--border-card)',
                background: 'var(--bg-card)',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.65rem' }}>
                <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  {stat.label}
                </span>
                {idx === 0 && <LeetCodeIcon size={17} color="#FFA116" />}
                {idx === 1 && <Award size={17} color="var(--accent-teal)" />}
                {idx === 2 && <Sparkles size={17} color="var(--accent-secondary)" />}
                {idx === 3 && <Layers size={17} color="var(--accent-primary)" />}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.4rem',
                  fontWeight: 600,
                  color: stat.highlight ? 'var(--text-accent)' : 'var(--text-primary)',
                  lineHeight: 1.1,
                  marginBottom: '0.25rem'
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
