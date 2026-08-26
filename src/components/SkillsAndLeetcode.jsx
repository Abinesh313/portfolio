import React, { useState } from 'react';
import { skillsData, leetcodeHighlights, personalInfo } from '../data/portfolioData';
import {
  Terminal,
  ExternalLink,
  Flame,
  Trophy,
  CheckCircle,
  Server,
  Cloud,
  BookOpen,
  Sparkles,
  Bot
} from 'lucide-react';
import { LeetCodeIcon } from './Icons';
import confetti from 'canvas-confetti';

export default function SkillsAndLeetcode() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All Disciplines', icon: Sparkles },
    { key: 'programmingLanguages', label: 'Languages', icon: Terminal },
    { key: 'backendAndApis', label: 'Backend & APIs', icon: Server },
    { key: 'cloudAndDevops', label: 'Cloud & DevOps', icon: Cloud },
    { key: 'aiAndAgentTools', label: 'AI & Agent Tools', icon: Bot },
    { key: 'coreCs', label: 'Core CS', icon: BookOpen }
  ];

  const handleConfetti = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  const getSkillsToDisplay = () => {
    if (activeCategory === 'all') {
      return [
        ...skillsData.programmingLanguages.map(s => ({ ...s, group: 'Languages' })),
        ...skillsData.backendAndApis.map(s => ({ ...s, group: 'Backend & APIs' })),
        ...skillsData.cloudAndDevops.map(s => ({ ...s, group: 'Cloud & DevOps' })),
        ...skillsData.aiAndAgentTools.map(s => ({ ...s, group: 'AI & Agent Tools' })),
        ...skillsData.coreCs.map(s => ({ ...s, group: 'Core CS' }))
      ];
    }
    return (skillsData[activeCategory] || []).map(s => ({
      ...s,
      group: categories.find(c => c.key === activeCategory)?.label || ''
    }));
  };

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'transparent', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">

        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <p className="section-label">Technical Competencies & DSA</p>
          <h2 className="section-title">Skills & Problem Solving</h2>
          <p className="section-subtitle">
            Strong mathematical and algorithmic foundation combined with production experience in enterprise frameworks, distributed databases, and containerization.
          </p>
        </div>

        {/* LeetCode Spotlight Banner Card */}
        <div
          className="glass-card"
          style={{
            padding: '2.5rem',
            marginBottom: '3rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-card)',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ maxWidth: '680px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(255, 161, 22, 0.15)',
                    color: '#FFA116',
                    padding: '0.3rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    border: '1px solid rgba(255, 161, 22, 0.4)'
                  }}
                >
                  <Flame size={14} /> LEETCODE PROFILE
                </span>
                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>
                  @{leetcodeHighlights.username}
                </span>
              </div>

              <h3 style={{ fontSize: '2.2rem', fontWeight: 600, fontFamily: 'var(--font-display)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
                <span style={{ color: '#FFA116' }}>{leetcodeHighlights.problemsSolved}</span> Problems Solved
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.98rem', lineHeight: 1.6 }}>
                {leetcodeHighlights.tagline}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.65rem', flexWrap: 'wrap' }}>
              <a
                href={leetcodeHighlights.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary leetcode-verify-btn"
                style={{
                  background: 'linear-gradient(135deg, #FFA116 0%, #E76F51 100%)',
                  boxShadow: '0 4px 20px rgba(255, 161, 22, 0.3)',
                  color: '#FFFFFF'
                }}
              >
                <LeetCodeIcon size={16} color="#FFFFFF" />
                <span>Verify Profile on LeetCode</span>
                <ExternalLink size={14} />
              </a>

              <button
                onClick={handleConfetti}
                className="btn btn-secondary leetcode-celebrate-btn"
                title="Celebrate milestone"
              >
                <Trophy size={16} color="#FFA116" />
                <span>Celebrate 1030+</span>
              </button>
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap', marginBottom: '2.5rem', justifyContent: 'flex-start' }}>
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={isActive ? 'btn btn-primary' : 'btn btn-secondary'}
                style={{
                  padding: '0.5rem 1.1rem',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-full)'
                }}
              >
                <Icon size={15} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {getSkillsToDisplay().map((skill, sIdx) => (
            <div
              key={sIdx}
              className="glass-card"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'var(--transition)'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    {skill.name}
                  </h4>
                  <span
                    style={{
                      fontSize: '0.7rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(224, 122, 95, 0.12)',
                      color: 'var(--text-accent)',
                      border: '1px solid var(--border-accent)'
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {skill.desc}
                </p>
              </div>

              <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  {skill.group}
                </span>
                <CheckCircle size={14} color="var(--accent-teal)" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
