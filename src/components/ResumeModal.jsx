import React, { useState } from 'react';
import { personalInfo, workExperience, projectsData, skillsData, educationData, leetcodeHighlights } from '../data/portfolioData';
import { X, Printer, Download, Copy, Check, ExternalLink, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
${personalInfo.name}
${personalInfo.email} | Phone: ${personalInfo.phone} | linkedin.com/in/abinesh313 | github.com/Abinesh313 | LeetCode/Abinesh313 (1030+ Problems Solved)

PROFESSIONAL SUMMARY
${personalInfo.summary}

EDUCATION
${educationData.map(e => `${e.degree} - ${e.score}\n${e.institution}, ${e.location} (${e.period})`).join('\n\n')}

WORK EXPERIENCE
${workExperience.map(w => `${w.role} - ${w.company}\n${w.period}\n${w.points.map(p => `• ${p}`).join('\n')}`).join('\n\n')}

TECHNICAL SKILLS
• Programming Languages: Java, C++, Python, SQL
• Backend & APIs: Spring Boot, Spring Security, REST API Development, JWT/OAuth2, PostgreSQL
• Cloud & Tools: AWS, Docker, GitHub, Git, Agile/Scrum, CI/CD
• Core Concepts: Data Structures & Algorithms, Object-Oriented Programming (OOP), SDLC, Relational Database Design

PROJECTS
${projectsData.map(p => `${p.title} (${p.type})\n${p.features.map(f => `• ${f}`).join('\n')}`).join('\n\n')}
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 8, 15, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#FFFFFF',
          color: '#1E293B',
          width: '100%',
          maxWidth: '900px',
          maxHeight: '92vh',
          borderRadius: '16px',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.5)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Control Bar */}
        <div
          className="no-print"
          style={{
            backgroundColor: '#0F172A',
            color: '#FFFFFF',
            padding: '1rem 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 700, fontSize: '1.1rem' }}>
              Official Resume Preview
            </span>
            <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', backgroundColor: 'rgba(224, 122, 95, 0.2)', color: '#E07A5F', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
              Abinesh G
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <button
              onClick={handleCopyText}
              className="btn btn-secondary"
              style={{
                padding: '0.4rem 0.85rem',
                fontSize: '0.8rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#FFFFFF',
                border: 'none'
              }}
            >
              {copied ? <Check size={14} color="#10B981" /> : <Copy size={14} />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="btn btn-primary"
              style={{
                padding: '0.4rem 0.95rem',
                fontSize: '0.8rem'
              }}
            >
              <Printer size={14} />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              style={{
                background: 'transparent',
                border: 'none',
                color: '#94A3B8',
                cursor: 'pointer',
                padding: '0.3rem',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet */}
        <div
          id="printable-resume"
          style={{
            padding: '2.5rem 3rem',
            overflowY: 'auto',
            fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
            fontSize: '13.5px',
            lineHeight: '1.5',
            color: '#1E293B'
          }}
        >
          {/* Header */}
          <div style={{ textAlign: 'center', borderBottom: '2px solid #0F172A', paddingBottom: '1rem', marginBottom: '1.25rem' }}>
            <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '26px', fontWeight: 600, color: '#0F172A', letterSpacing: '-0.01em', marginBottom: '4px' }}>
              {personalInfo.name}
            </h1>
            <div style={{ fontSize: '12px', color: '#475569', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <a href={`mailto:${personalInfo.email}`} style={{ color: '#2563EB', textDecoration: 'none' }}>{personalInfo.email}</a>
              <span>|</span>
              <span>Phone: {personalInfo.phone}</span>
              <span>|</span>
              <a href={personalInfo.socials.linkedin} target="_blank" rel="noreferrer" style={{ color: '#2563EB', textDecoration: 'none' }}>linkedin.com/in/abinesh313</a>
              <span>|</span>
              <a href={personalInfo.socials.github} target="_blank" rel="noreferrer" style={{ color: '#2563EB', textDecoration: 'none' }}>github.com/Abinesh313</a>
              <span>|</span>
              <a href={personalInfo.socials.leetcode} target="_blank" rel="noreferrer" style={{ color: '#2563EB', textDecoration: 'none' }}>LeetCode/Abinesh313 (1030+ Problems Solved)</a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '3px', marginBottom: '6px' }}>
              Professional Summary
            </h2>
            <p style={{ textAlign: 'justify', color: '#334155' }}>
              {personalInfo.summary}
            </p>
          </div>

          {/* Section: Education */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '3px', marginBottom: '6px' }}>
              Education
            </h2>
            {educationData.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                  <span>{edu.degree}</span>
                  <span>{edu.score}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '12px' }}>
                  <span>{edu.institution}, {edu.location}</span>
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Section: Work Experience */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '3px', marginBottom: '6px' }}>
              Work Experience
            </h2>
            {workExperience.map((work, idx) => (
              <div key={idx} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                  <span>{work.role}</span>
                  <span>{work.company}</span>
                </div>
                <div style={{ fontSize: '12px', color: '#64748B', fontStyle: 'italic', marginBottom: '4px' }}>
                  {work.period}
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155' }}>
                  {work.points.map((pt, pIdx) => (
                    <li key={pIdx} style={{ marginBottom: '3px' }}>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Section: Technical Skills */}
          <div style={{ marginBottom: '1.2rem' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '3px', marginBottom: '6px' }}>
              Technical Skills
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', color: '#334155' }}>
              <div><strong>Programming Languages:</strong> Java, C++, Python, SQL</div>
              <div><strong>Backend & APIs:</strong> Spring Boot, Spring Security, REST API Development, JWT/OAuth2, PostgreSQL</div>
              <div><strong>Cloud & Tools:</strong> AWS, Docker, GitHub, Git, Agile/Scrum, CI/CD</div>
              <div><strong>Core Concepts:</strong> Data Structures & Algorithms, Object-Oriented Programming (OOP), SDLC, Relational Database Design</div>
            </div>
          </div>

          {/* Section: Projects */}
          <div style={{ marginBottom: '0.5rem' }}>
            <h2 style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#0F172A', borderBottom: '1px solid #CBD5E1', paddingBottom: '3px', marginBottom: '6px' }}>
              Projects
            </h2>
            {projectsData.map((proj, idx) => (
              <div key={idx} style={{ marginBottom: '10px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 700, color: '#0F172A' }}>
                  <span>{idx + 1}. {proj.title}</span>
                  <span style={{ fontSize: '12px', color: '#64748B', fontWeight: 500 }}>{proj.type}</span>
                </div>
                <div style={{ fontSize: '12px', color: '#475569', fontStyle: 'italic', marginBottom: '4px' }}>
                  {proj.subtitle} {proj.liveUrl ? `[${proj.liveUrl}]` : '[GitHub]'}
                </div>
                <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#334155' }}>
                  {proj.features.map((feat, fIdx) => (
                    <li key={fIdx} style={{ marginBottom: '3px' }}>{feat}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}
