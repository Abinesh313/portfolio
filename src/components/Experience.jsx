import React from 'react';
import { workExperience } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ backgroundColor: 'transparent', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="section-label">Career Trajectory</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Engineering scalable backend architectures, optimizing internal tools, and delivering high-performance enterprise applications in Agile/Scrum teams.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem', position: 'relative' }}>
          
          {workExperience.map((exp, index) => (
            <div 
              key={exp.id} 
              className="glass-card"
              style={{
                padding: '2.5rem',
                border: '1px solid var(--border-card)',
                background: 'var(--bg-card)',
                position: 'relative'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '0.4rem' }}>
                    <h3 style={{ fontSize: '1.6rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                      {exp.role}
                    </h3>
                    <span 
                      style={{
                        padding: '0.2rem 0.75rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.75rem',
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

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', color: 'var(--text-accent-glow)', fontWeight: 600, fontSize: '1.05rem', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                      <Briefcase size={16} color="var(--accent-primary)" />
                      {exp.company}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      <MapPin size={15} />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--text-secondary)',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    padding: '0.45rem 1rem',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <Calendar size={14} color="var(--accent-primary)" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Description */}
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {exp.description}
              </p>

              {/* Bullet Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '1.75rem' }}>
                {exp.points.map((point, pIdx) => (
                  <div key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <div style={{ minWidth: '20px', marginTop: '4px' }}>
                      <CheckCircle2 size={16} color="var(--accent-primary)" />
                    </div>
                    <span style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', flexWrap: 'wrap', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', marginRight: '0.5rem' }}>
                  CORE STACK:
                </span>
                {exp.tech.map((t, tIdx) => (
                  <React.Fragment key={tIdx}>
                    <span className="tag-pill">
                      {t}
                    </span>
                    {tIdx < exp.tech.length - 1 && (
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
