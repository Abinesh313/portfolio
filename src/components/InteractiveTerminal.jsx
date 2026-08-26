import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, projectsData, leetcodeHighlights, workExperience } from '../data/portfolioData';
import { Terminal as TerminalIcon, Play, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';

export default function InteractiveTerminal() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '[SYSTEM] Abinesh G - SDE Dev Environment v2.6.0 initialized.' },
    { type: 'system', text: 'Type "help" or click the quick command chips below to explore.' }
  ]);
  const [copied, setCopied] = useState(false);
  const terminalScrollRef = useRef(null);

  const quickCommands = [
    { cmd: 'skills', label: 'skills' },
    { cmd: 'leetcode', label: 'leetcode' },
    { cmd: 'experience', label: 'exp' },
    { cmd: 'projects', label: 'projects' },
    { cmd: 'contact', label: 'contact' },
    { cmd: 'clear', label: 'clear' }
  ];

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `Available commands:
- skills      - List core languages, backend & cloud stack
- leetcode    - View LeetCode stats & problem solving metrics
- experience  - Summary of Cognizant & Nissan Digital internships
- projects    - Overview of IPEB, AI Assistant & Supermarket System
- contact     - Direct email, phone, and LinkedIn
- clear       - Clear terminal output`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `[LANGUAGES] Java (Expert), Python (Practitioner), SQL, JavaScript
[BACKEND]   Spring Boot, Spring Security, REST APIs, JWT/OAuth2, PostgreSQL
[AI AGENTS] Antigravity IDE, Gemini (Google AI), Claude (Anthropic), ChatGPT (OpenAI)
[DEVOPS]    Docker, Docker Compose, AWS, GitHub Actions, CI/CD
[CORE CS]   Data Structures & Algorithms (1030+ Solved), OOP, SDLC`
        });
        break;

      case 'leetcode':
        newHistory.push({
          type: 'output',
          text: `[LEETCODE] Profile: @${leetcodeHighlights.username}
- Total Solved: ${leetcodeHighlights.problemsSolved}
- Top Focus: Arrays & Two Pointers, Strings, Linked Lists, Stacks, Logic Building
- Link: ${leetcodeHighlights.profileUrl}`
        });
        break;

      case 'experience':
        newHistory.push({
          type: 'output',
          text: `1. SDE Intern @ Cognizant (Feb 2026 – May 2026) [Completed]
   - Spring Boot (Java) & ReactJS full-stack web applications, RESTful APIs.
2. SDE Intern @ Nissan Digital India (July 2025 – Jan 2026) [Completed]
   - Optimized internal data-processing tools, OOP architecture, CI/CD pipelines.`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `1. IPEB (International Professional Examination Board)
   - Stack: Spring Boot, PostgreSQL, Docker Compose, JWT, RSA-2048
   - Live: https://ipeb.org
2. Glidez Solutions Platform
   - Stack: Static Web Architecture, Modern CSS, JavaScript, SEO
   - Live: https://glidez.org
3. AI Career Assistant (Career Campus)
   - Stack: ReactJS, FastAPI, NLP JD-Resume Compatibility Engine
4. Supermarket Management System (Full-Stack)
   - Stack: ReactJS, Spring Boot, SQL, Real-Time Inventory & POS Billing`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email:    ${personalInfo.email}
Phone:    ${personalInfo.phone}
LinkedIn: ${personalInfo.socials.linkedin}
GitHub:   ${personalInfo.socials.github}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of commands.`
        });
    }

    setHistory(newHistory);
    setInput('');
  };

  useEffect(() => {
    if (terminalScrollRef.current) {
      terminalScrollRef.current.scrollTop = 0;
    }
  }, [history]);

  return (
    <div
      className="terminal-card"
      style={{
        borderRadius: '16px',
        backgroundColor: '#0E1013',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)'
      }}
    >
      {/* Top Header Bar */}
      <div
        style={{
          backgroundColor: '#16181D',
          padding: '0.65rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#EA4335' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#FBBC05' }} />
          <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#34A853' }} />
          <span style={{ fontSize: '0.78rem', color: '#9AA0A6', marginLeft: '0.5rem', fontWeight: 600 }}>
            abinesh@dev-box: ~
          </span>
        </div>
      </div>

      {/* Output Screen */}
      <div
        ref={terminalScrollRef}
        style={{
          padding: '1.25rem',
          maxHeight: '260px',
          overflowY: 'auto',
          fontSize: '0.85rem',
          lineHeight: '1.6',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}
      >
        {history.map((item, idx) => (
          <div
            key={idx}
            style={{
              color: item.type === 'user' ? '#8AB4F8' : item.type === 'error' ? '#F28B82' : item.type === 'system' ? '#81C995' : '#E8EAED',
              whiteSpace: 'pre-wrap'
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* Quick Command Chips */}
      <div
        style={{
          padding: '0.6rem 1.25rem',
          backgroundColor: '#121418',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap'
        }}
      >
        <span style={{ fontSize: '0.7rem', color: '#5F6368', fontWeight: 600 }}>COMMANDS:</span>
        {quickCommands.map((q) => (
          <button
            key={q.cmd}
            onClick={() => handleCommand(q.cmd)}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#E8EAED',
              padding: '0.2rem 0.6rem',
              borderRadius: '4px',
              fontSize: '0.74rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontFamily: 'var(--font-mono)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#8AB4F8';
              e.currentTarget.style.color = '#8AB4F8';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.color = '#E8EAED';
            }}
          >
            {q.label}
          </button>
        ))}
      </div>

      {/* Command Input Field */}
      <form
        onSubmit={(e) => { e.preventDefault(); handleCommand(input); }}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#0A0C0E',
          padding: '0.75rem 1.25rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)'
        }}
      >
        <span style={{ color: '#8AB4F8', marginRight: '0.6rem', fontWeight: 700 }}>$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a command (e.g. skills, leetcode, help)..."
          style={{
            flex: 1,
            background: 'transparent',
            border: 'none',
            outline: 'none',
            color: '#FFFFFF',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem'
          }}
        />
        <button
          type="submit"
          style={{
            background: 'transparent',
            border: 'none',
            color: '#8AB4F8',
            cursor: 'pointer',
            padding: '0.2rem'
          }}
          title="Execute command"
        >
          <CornerDownLeft size={16} />
        </button>
      </form>
    </div>
  );
}
