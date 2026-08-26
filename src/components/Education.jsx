import React from 'react';
import { educationData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin, Sparkles, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="section-label">Academic Foundations</p>
          <h2 className="section-title">Education & Credentials</h2>
          <p className="section-subtitle">
            Strong foundational coursework in computer systems, algorithms, distributed systems, and higher secondary mathematics.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="glass-card"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--border-card)',
                background: 'var(--bg-card)'
              }}
            >
              <div>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div 
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(224, 122, 95, 0.12)',
                      border: '1px solid var(--border-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-primary)'
                    }}
                  >
                    <GraduationCap size={22} />
                  </div>

                  <span 
                    style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      backgroundColor: 'rgba(42, 157, 143, 0.12)',
                      color: 'var(--accent-teal)',
                      border: '1px solid rgba(42, 157, 143, 0.3)'
                    }}
                  >
                    {edu.badge}
                  </span>
                </div>

                <h3 className="font-serif" style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '0.4rem', lineHeight: 1.3 }}>
                  {edu.degree}
                </h3>

                <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.4rem' }}>
                  {edu.institution}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <MapPin size={13} /> {edu.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <Calendar size={13} /> {edu.period}
                  </span>
                </div>

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {edu.highlights}
                </p>
              </div>

              {/* Score / Grade Footer */}
              <div 
                style={{
                  padding: '0.85rem 1.1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  ACADEMIC RECORD
                </span>
                <span className="font-mono" style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-accent)' }}>
                  {edu.score}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
