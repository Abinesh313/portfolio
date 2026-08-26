import React, { useState } from 'react';
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export default function Experience() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'transparent', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '2.5rem' }}>
          <p className="section-label">Career Trajectory</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Engineering scalable backend architectures, optimizing internal tools, and delivering high-performance enterprise applications in Agile/Scrum teams.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
          
          {workExperience.map((exp) => {
            const isExpanded = !!expandedCards[exp.id];

            return (
              <div 
                key={exp.id} 
                className="glass-card"
                style={{
                  padding: '1.75rem',
                  border: '1px solid var(--border-card)',
                  background: 'var(--bg-card)',
                  position: 'relative',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Header Row (Clickable) */}
                <div 
                  onClick={() => toggleCard(exp.id)}
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'flex-start', 
                    flexWrap: 'wrap', 
                    gap: '1rem',
                    cursor: 'pointer',
                    userSelect: 'none'
                  }}
                >
                  <div style={{ flex: 1, minWidth: '260px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                      <h3 style={{ fontSize: '1.45rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                        {exp.role}
                      </h3>
                      <span 
                        style={{
                          padding: '0.2rem 0.75rem',
                          borderRadius: 'var(--radius-full)',
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          fontWeight: 600,
                          backgroundColor: exp.current ? 'rgba(224, 122, 95, 0.15)' : 'rgba(42, 157, 143, 0.15)',
                          color: exp.current ? 'var(--text-accent)' : 'var(--accent-teal)',
                          border: `1px solid ${exp.current ? 'var(--border-accent)' : 'rgba(42, 157, 143, 0.3)'}`
                        }}
                      >
                        {exp.badge}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', color: 'var(--text-accent-glow)', fontWeight: 600, fontSize: '0.98rem', flexWrap: 'wrap' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                        <Briefcase size={15} color="var(--accent-primary)" />
                        {exp.company}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
                    <div 
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--text-secondary)',
                        backgroundColor: 'rgba(255, 255, 255, 0.04)',
                        padding: '0.35rem 0.85rem',
                        borderRadius: 'var(--radius-full)',
                        border: '1px solid var(--border-subtle)'
                      }}
                    >
                      <Calendar size={13} color="var(--accent-primary)" />
                      <span>{exp.period}</span>
                    </div>

                    {/* Bold Chevron Toggle Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleCard(exp.id);
                      }}
                      className="btn-secondary"
                      aria-label={isExpanded ? 'Collapse' : 'Expand'}
                      style={{
                        width: '34px',
                        height: '34px',
                        padding: 0,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isExpanded ? 'var(--text-accent)' : 'var(--text-secondary)',
                        border: '1px solid var(--border-subtle)',
                        cursor: 'pointer',
                        flexShrink: 0
                      }}
                      title={isExpanded ? 'Collapse' : 'Expand'}
                    >
                      {isExpanded ? (
                        <ChevronUp size={18} strokeWidth={2.8} />
                      ) : (
                        <ChevronDown size={18} strokeWidth={2.8} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Always-visible brief summary */}
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.6, margin: '1rem 0 0' }}>
                  {exp.description}
                </p>

                {/* Collapsible Expanded Details */}
                {isExpanded && (
                  <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', animation: 'fadeIn 0.3s ease' }}>
                    {/* Bullet Points */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                      {exp.points.map((point, pIdx) => (
                        <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <div style={{ minWidth: '18px', marginTop: '3px' }}>
                            <CheckCircle2 size={15} color="var(--accent-primary)" />
                          </div>
                          <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem 0.5rem', flexWrap: 'wrap', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                      <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginRight: '0.2rem' }}>
                        TECH STACK:
                      </span>
                      {exp.tech.map((t, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="tag-pill"
                          style={{ whiteSpace: 'nowrap', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                        >
                          <span>{t}</span>
                          {tIdx < exp.tech.length - 1 && (
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>•</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
