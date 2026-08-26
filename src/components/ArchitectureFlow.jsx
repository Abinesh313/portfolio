import React, { useState } from 'react';
import { Shield, Key, Database, CreditCard, Award, Cpu, ArrowRight, CheckCircle2, Zap } from 'lucide-react';

export default function ArchitectureFlow() {
  const [selectedNode, setSelectedNode] = useState('auth');

  const nodes = [
    {
      id: 'client',
      label: 'Client / Examination UI',
      icon: Cpu,
      tag: 'ReactJS',
      desc: 'Enforces single-active-session constraints with anti-cheat state and randomized question pool consumption.',
      tech: 'React, Vite, WebSockets / Polling'
    },
    {
      id: 'auth',
      label: 'Sliding JWT & OAuth Security',
      icon: Key,
      tag: 'Spring Security',
      desc: 'httpOnly refresh-token cookies, sliding expiration sessions, rate limiting on auth endpoints, Google OAuth.',
      tech: 'JWT, Spring Security Filters, Redis/In-Memory Bucket4j'
    },
    {
      id: 'backend',
      label: 'Randomized Exam Engine',
      icon: Zap,
      tag: 'Spring Boot (Java)',
      desc: 'High-throughput business logic orchestrating mock tests vs full exams, voucher claiming, and automated evaluation.',
      tech: 'Java 17, Spring Boot, REST APIs'
    },
    {
      id: 'db',
      label: 'Normalized PostgreSQL Core',
      icon: Database,
      tag: 'PostgreSQL ACID',
      desc: 'Normalized schema across users, exams, vouchers, audit logs, and payments with transaction isolation.',
      tech: 'PostgreSQL, Docker Compose, Flyway/JPA'
    },
    {
      id: 'payment',
      label: 'Idempotent Razorpay Webhooks',
      icon: CreditCard,
      tag: 'Payment Gateway',
      desc: 'Webhook signature verification, replay attack prevention, and idempotent database write locks.',
      tech: 'Razorpay API, HMAC-SHA256 Signatures'
    },
    {
      id: 'crypto',
      label: 'RSA-2048 Digital Signer',
      icon: Award,
      tag: 'PKI Cryptography',
      desc: 'Asymmetric RSA-2048 signing for tamper-proof digital certificates verifiable on public verification endpoints.',
      tech: 'Java Crypto Architecture, RSA-2048, SHA-256'
    }
  ];

  const activeData = nodes.find(n => n.id === selectedNode) || nodes[1];

  return (
    <div 
      className="glass-card"
      style={{
        padding: '1.75rem',
        marginTop: '1.5rem',
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        borderRadius: '16px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-accent)', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700 }}>
              INTERACTIVE SYSTEM ARCHITECTURE TOPOLOGY
            </span>
          </div>
          <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>
            IPEB Enterprise Data Flow & Security Pipeline
          </h4>
        </div>
        <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
          Click nodes to inspect data pipeline
        </span>
      </div>

      {/* Nodes Pipeline Carousel / Horizontal Grid */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '0.75rem',
          marginBottom: '1.5rem'
        }}
      >
        {nodes.map((node) => {
          const Icon = node.icon;
          const isSelected = selectedNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              style={{
                background: isSelected 
                  ? 'rgba(224, 122, 95, 0.14)' 
                  : 'var(--bg-tag)',
                border: isSelected 
                  ? '1.5px solid var(--accent-primary)' 
                  : '1px solid var(--border-subtle)',
                padding: '0.9rem 0.75rem',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.45rem',
                cursor: 'pointer',
                textAlign: 'center',
                position: 'relative',
                transition: 'all 0.25s ease',
                boxShadow: isSelected ? '0 4px 15px var(--accent-glow)' : 'none'
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: isSelected ? 'var(--accent-primary)' : 'var(--bg-card)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? '#FFFFFF' : 'var(--text-accent)',
                  border: isSelected ? 'none' : '1px solid var(--border-subtle)'
                }}
              >
                <Icon size={18} />
              </div>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)', lineHeight: 1.3 }}>
                {node.label}
              </span>
              <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: isSelected ? 'var(--text-accent)' : 'var(--text-muted)' }}>
                {node.tag}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detail Inspector Drawer */}
      <div 
        style={{
          padding: '1.25rem 1.5rem',
          backgroundColor: 'var(--bg-tag)',
          borderRadius: '12px',
          border: '1px solid var(--border-accent)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div style={{ flex: 1, minWidth: '240px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', flexWrap: 'wrap' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-accent)', fontWeight: 700 }}>
              [COMPONENT INSPECTION]
            </span>
            <span style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              {activeData.label}
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            {activeData.desc}
          </p>
        </div>

        <div 
          style={{
            padding: '0.55rem 0.95rem',
            backgroundColor: 'var(--bg-card)',
            borderRadius: '8px',
            border: '1px solid var(--border-card)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-accent)'
          }}
        >
          <span style={{ color: 'var(--text-muted)' }}>STACK: </span>
          {activeData.tech}
        </div>
      </div>
    </div>
  );
}
