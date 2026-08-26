import React from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  ExternalLink, 
  ShieldCheck, 
  FileCheck, 
  Layers, 
  Bot, 
  Cpu, 
  CheckCircle2 
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ArchitectureFlow from './ArchitectureFlow';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="section-label">Featured Work & Systems</p>
          <h2 className="section-title">Production & Personal Projects</h2>
          <p className="section-subtitle">
            Independently engineered, full-stack applications with an emphasis on normalized schema design, high-security authentication, cryptographic signing, and NLP algorithms.
          </p>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          
          {/* Project Cards */}
          {projectsData.map((project, idx) => (
            <div 
              key={project.id} 
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid var(--border-card)',
                background: 'var(--bg-card)'
              }}
            >
              {/* Project Header Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.25rem', marginBottom: '1.5rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '0.5rem' }}>
                    <span 
                      style={{
                        padding: '0.2rem 0.65rem',
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 700,
                        backgroundColor: 'rgba(224, 122, 95, 0.15)',
                        color: 'var(--text-accent)',
                        border: '1px solid var(--border-accent)'
                      }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span 
                      style={{
                        padding: '0.25rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                        backgroundColor: 'rgba(224, 122, 95, 0.15)',
                        color: 'var(--text-accent)',
                        border: '1px solid var(--border-accent)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {project.badge}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                      {project.type}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '2rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', marginBottom: '0.35rem' }}>
                    <span style={{ color: 'var(--text-accent)', marginRight: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: '1.5rem', fontWeight: 600 }}>0{idx + 1}.</span>
                    {project.title}
                  </h3>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', fontWeight: 500 }}>
                    {project.subtitle}
                  </div>
                </div>

                {/* External Action Links */}
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ padding: '0.5rem 1.1rem', fontSize: '0.88rem' }}
                    >
                      <ExternalLink size={15} />
                      <span>Live Platform (ipeb.org)</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary"
                      style={{ padding: '0.5rem 1.1rem', fontSize: '0.88rem' }}
                    >
                      <GithubIcon size={15} />
                      <span>GitHub Repo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Summary */}
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {project.summary}
              </p>

              {/* Project Deep-Dive Content (2 Column Layout) */}
              <div 
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
                  gap: '2rem',
                  marginBottom: '2rem' 
                }}
              >
                {/* Column 1: Core Key Features */}
                <div 
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                    padding: '1.75rem', 
                    borderRadius: 'var(--radius-md)', 
                    border: '1px solid var(--border-subtle)' 
                  }}
                >
                  <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                    <Layers size={18} color="var(--accent-primary)" />
                    Key Architectural Pillars
                  </h4>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {project.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <div style={{ minWidth: '16px', marginTop: '3px' }}>
                          <CheckCircle2 size={15} color="var(--accent-primary)" />
                        </div>
                        <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Column 2: System Specifications & Architecture */}
                <div 
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                    padding: '1.75rem', 
                    borderRadius: 'var(--radius-md)', 
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem', color: 'var(--text-primary)' }}>
                      {project.id === 'ipeb' ? (
                        <>
                          <ShieldCheck size={18} color="var(--accent-teal)" />
                          Security & System Specifications
                        </>
                      ) : (
                        <>
                          <Bot size={18} color="var(--accent-teal)" />
                          AI & NLP Pipeline Specifications
                        </>
                      )}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {project.architecture.map((arch, aIdx) => (
                        <div key={aIdx} style={{ padding: '0.65rem 0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {arch.label}
                          </div>
                          <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                            {arch.detail}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--accent-teal)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                    <FileCheck size={16} />
                    <span>
                      {project.id === 'ipeb' 
                        ? 'RSA-2048 Public Verification Endpoint Verified' 
                        : 'FastAPI & NLP Semantic Match Engine Verified'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Architecture Flow Topology specifically for IPEB */}
              {project.id === 'ipeb' && (
                <ArchitectureFlow />
              )}

              {/* Technologies Used Footer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', marginTop: '1.5rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginRight: '0.5rem' }}>
                  TECHNOLOGIES:
                </span>
                {project.tech.map((t, tIdx) => (
                  <React.Fragment key={tIdx}>
                    <span className="tag-pill">
                      {t}
                    </span>
                    {tIdx < project.tech.length - 1 && (
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>•</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
