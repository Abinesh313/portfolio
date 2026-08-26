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
        padding: '2rem',
        marginTop: '2rem',
        backgroundColor: 'rgba(9, 13, 22, 0.95)',
        border: '1px solid rgba(224, 122, 95, 0.25)',
        borderRadius: '16px'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', animation: 'pulse-ring 2s infinite' }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E07A5F', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '0.75rem',
          marginBottom: '1.75rem'
        }}
      >
        {nodes.map((node, idx) => {
          const Icon = node.icon;
          const isSelected = selectedNode === node.id;
          return (
            <button
              key={node.id}
              onClick={() => setSelectedNode(node.id)}
              style={{
                background: isSelected ? 'linear-gradient(135deg, rgba(224, 122, 95, 0.2) 0%, rgba(224, 122, 95, 0.05) 100%)' : 'rgba(255, 255, 255, 0.02)',
                border: isSelected ? '1px solid #E07A5F' : '1px solid rgba(255, 255, 255, 0.08)',
                padding: '1rem 0.85rem',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                textAlign: 'center',
                position: 'relative',
                transition: 'all 0.25s ease',
                boxShadow: isSelected ? '0 0 20px rgba(224, 122, 95, 0.2)' : 'none'
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  backgroundColor: isSelected ? '#E07A5F' : 'rgba(255, 255, 255, 0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: isSelected ? '#FFFFFF' : '#94A3B8'
                }}
              >
                <Icon size={18} />
              </div>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, color: isSelected ? '#FFFFFF' : '#CBD5E1', lineHeight: 1.3 }}>
                {node.label}
              </span>
              <span style={{ fontSize: '0.68rem', fontFamily: 'var(--font-mono)', color: isSelected ? '#E07A5F' : '#64748B' }}>
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
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          borderRadius: '12px',
          border: '1px solid rgba(224, 122, 95, 0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}
      >
        <div style={{ flex: 1, minWidth: '240px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: '#E07A5F', fontWeight: 700 }}>
              [COMPONENT INSPECTION]
            </span>
            <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#FFFFFF' }}>
              {activeData.label}
            </span>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6 }}>
            {activeData.desc}
          </p>
        </div>

        <div 
          style={{
            padding: '0.6rem 1rem',
            backgroundColor: 'rgba(224, 122, 95, 0.08)',
            borderRadius: '8px',
            border: '1px solid rgba(224, 122, 95, 0.25)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: '#E07A5F'
          }}
        >
          <span style={{ color: '#94A3B8' }}>STACK: </span>
          {activeData.tech}
        </div>
      </div>
    </div>
  );
}
