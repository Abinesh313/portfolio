import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import { 
  ExternalLink, 
  ShieldCheck, 
  FileCheck, 
  Layers, 
  Bot, 
  Cpu, 
  CheckCircle2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { GithubIcon } from './Icons';
import ArchitectureFlow from './ArchitectureFlow';

export default function Projects() {
  const [expandedProjects, setExpandedProjects] = useState({
    ipeb: true,
    'glidez-solutions': true,
    'ai-career-assistant': false,
    'supermarket-system': false
  });

  const toggleProject = (id) => {
    setExpandedProjects(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-label">Featured Work & Systems</p>
          <h2 className="section-title">Production & Personal Projects</h2>
          <p className="section-subtitle">
            Independently engineered, full-stack applications with an emphasis on normalized schema design, high-security authentication, cryptographic signing, and NLP algorithms.
          </p>
        </div>

        {/* Projects List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Project Cards */}
          {projectsData.map((project, idx) => {
            const isExpanded = !!expandedProjects[project.id];

            return (
              <div 
                key={project.id} 
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  border: '1px solid var(--border-card)',
                  background: 'var(--bg-card)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Project Header Bar (Clickable) */}
                <div 
                  onClick={() => toggleProject(project.id)}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap', 
                    gap: '1.25rem', 
                    marginBottom: '1rem',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <div style={{ flex: 1, minWidth: '260px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                      <span 
                        style={{
                          padding: '0.2rem 0.65rem',
                          borderRadius: '6px',
                          fontSize: '0.72rem',
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
                          padding: '0.2rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.7rem',
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
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                        {project.type}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '1.75rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', marginBottom: '0.25rem' }}>
                      <span style={{ color: 'var(--text-accent)', marginRight: '0.35rem', fontFamily: 'var(--font-mono)', fontSize: '1.3rem', fontWeight: 600 }}>0{idx + 1}.</span>
                      {project.title}
                    </h3>
                    <div style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', fontWeight: 500 }}>
                      {project.subtitle}
                    </div>
                  </div>

                  {/* Action Links & Toggle Button */}
                  <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', alignItems: 'center' }}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn btn-primary"
                        style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
                      >
                        <ExternalLink size={14} />
                        <span>Live Site</span>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn btn-secondary"
                        style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
                      >
                        <GithubIcon size={14} />
                        <span>Code</span>
                      </a>
                    )}

                    {/* Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleProject(project.id);
                      }}
                      className="btn-secondary"
                      style={{
                        padding: '0.45rem 0.85rem',
                        fontSize: '0.8rem',
                        borderRadius: 'var(--radius-full)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem',
                        color: 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)'
                      }}
                      title={isExpanded ? 'Collapse' : 'Expand Details'}
                    >
                      <span>{isExpanded ? 'Less' : 'Architecture'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>
                </div>

                {/* Always-visible Summary */}
                <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: '0.75rem 0 1.25rem' }}>
                  {project.summary}
                </p>

                {/* Collapsible Architecture & Key Features */}
                {isExpanded && (
                  <div style={{ animation: 'fadeIn 0.3s ease' }}>
                    {/* Project Deep-Dive Content (2 Column Layout) */}
                    <div 
                      style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
                        gap: '1.5rem',
                        marginBottom: '1.5rem' 
                      }}
                    >
                      {/* Column 1: Core Key Features */}
                      <div 
                        style={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.2)', 
                          padding: '1.5rem', 
                          borderRadius: 'var(--radius-md)', 
                          border: '1px solid var(--border-subtle)' 
                        }}
                      >
                        <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.98rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                          <Layers size={16} color="var(--accent-primary)" />
                          Key Architectural Pillars
                        </h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                          {project.features.map((feat, fIdx) => (
                            <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                              <div style={{ minWidth: '16px', marginTop: '3px' }}>
                                <CheckCircle2 size={14} color="var(--accent-primary)" />
                              </div>
                              <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
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
                          padding: '1.5rem', 
                          borderRadius: 'var(--radius-md)', 
                          border: '1px solid var(--border-subtle)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between'
                        }}
                      >
                        <div>
                          <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.98rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                            {project.id === 'ipeb' ? (
                              <>
                                <ShieldCheck size={16} color="var(--accent-teal)" />
                                Security & System Specifications
                              </>
                            ) : (
                              <>
                                <Bot size={16} color="var(--accent-teal)" />
                                AI & Systems Specifications
                              </>
                            )}
                          </h4>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {project.architecture.map((arch, aIdx) => (
                              <div key={aIdx} style={{ padding: '0.55rem 0.75rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                  {arch.label}
                                </div>
                                <div style={{ fontSize: '0.84rem', color: 'var(--text-primary)', marginTop: '2px' }}>
                                  {arch.detail}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-teal)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>
                          <FileCheck size={15} />
                          <span>
                            {project.id === 'ipeb' 
                              ? 'RSA-2048 Public Verification Endpoint Verified' 
                              : 'System Workflows & Endpoints Verified'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Architecture Flow Topology specifically for IPEB */}
                    {project.id === 'ipeb' && (
                      <ArchitectureFlow />
                    )}
                  </div>
                )}

                {/* Technologies Used Footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', marginTop: '1.25rem' }}>
                  <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginRight: '0.4rem' }}>
                    TECH:
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
            );
          })}

        </div>

      </div>
    </section>
  );
}
