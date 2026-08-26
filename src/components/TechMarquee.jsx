import React from 'react';

export default function TechMarquee() {
  const items = [
    { label: 'Java 17/21', category: 'Language' },
    { label: 'Spring Boot', category: 'Backend' },
    { label: 'Spring Security', category: 'Auth & RBAC' },
    { label: 'PostgreSQL', category: 'Database' },
    { label: '1030+ LeetCode Solved', category: 'Problem Solving' },
    { label: 'Antigravity Agents', category: 'AI Engineering' },
    { label: 'Gemini (Google AI)', category: 'Reasoning & LLMs' },
    { label: 'Claude (Anthropic)', category: 'Architecture & Prompts' },
    { label: 'ChatGPT (OpenAI)', category: 'Debugging & Analysis' },
    { label: 'Docker Compose', category: 'DevOps' },
    { label: 'ReactJS', category: 'Frontend' },
    { label: 'RSA-2048 Cryptography', category: 'Security' },
    { label: 'Razorpay Webhooks', category: 'Payments' },
    { label: 'Python & NLP Scripting', category: 'Data & NLP' },
    { label: 'AWS Cloud', category: 'Infrastructure' },
    { label: 'CI/CD Pipelines', category: 'Automation' },
    { label: 'Glidez Platform (glidez.org)', category: 'Production' },
    { label: 'IPEB Engine (ipeb.org)', category: 'Production' },
    { label: 'B.E. CSE (CGPA 8.23)', category: 'Education' }
  ];

  return (
    <div
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: '1.25rem 0',
        backgroundColor: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        position: 'relative',
        userSelect: 'none'
      }}
    >
      {/* Gradient edge masks */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to right, var(--bg-secondary), transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100px',
          height: '100%',
          background: 'linear-gradient(to left, var(--bg-secondary), transparent)',
          zIndex: 2,
          pointerEvents: 'none'
        }}
      />

      <div className="marquee-track">
        {[...items, ...items].map((item, idx) => (
          <div
            key={idx}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.45rem 1.1rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid var(--border-card)',
              margin: '0 0.6rem',
              whiteSpace: 'nowrap',
              transition: 'all 0.2s ease'
            }}
            className="marquee-pill"
          >
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)' }} />
            <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              {item.label}
            </span>
            <span style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              [{item.category}]
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 45s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-pill:hover {
          border-color: var(--accent-primary);
          background-color: rgba(224, 122, 95, 0.12);
        }
      `}</style>
    </div>
  );
}
