import React, { useState, useEffect } from 'react';

const HEADLINE_VARIANTS = [
  {
    fullText: "Crafting resilient backends & production-grade systems.",
    segments: [
      { text: "Crafting ", type: "normal" },
      { text: "resilient backends", type: "gradient" },
      { text: " & ", type: "normal" },
      { text: "production-grade", type: "accent" },
      { text: " systems.", type: "normal" }
    ]
  },
  {
    fullText: "Architecting secure REST APIs & cloud microservices.",
    segments: [
      { text: "Architecting ", type: "normal" },
      { text: "secure REST APIs", type: "gradient" },
      { text: " & ", type: "normal" },
      { text: "cloud microservices", type: "accent" },
      { text: ".", type: "normal" }
    ]
  },
  {
    fullText: "Optimizing distributed data pipelines & high-throughput systems.",
    segments: [
      { text: "Optimizing ", type: "normal" },
      { text: "distributed data pipelines", type: "gradient" },
      { text: " & ", type: "normal" },
      { text: "high-throughput", type: "accent" },
      { text: " systems.", type: "normal" }
    ]
  },
  {
    fullText: "Shipping full-stack software with Spring Boot & React.",
    segments: [
      { text: "Shipping ", type: "normal" },
      { text: "full-stack software", type: "gradient" },
      { text: " with ", type: "normal" },
      { text: "Spring Boot & React", type: "accent" },
      { text: ".", type: "normal" }
    ]
  }
];

export default function GenerativeHeadline() {
  const [variantIndex, setVariantIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentVariant = HEADLINE_VARIANTS[variantIndex];
  const fullText = currentVariant.fullText;

  useEffect(() => {
    if (isPaused) {
      const pauseTimer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 3200);
      return () => clearTimeout(pauseTimer);
    }

    if (isDeleting) {
      if (charCount > 0) {
        const deleteTimer = setTimeout(() => {
          setCharCount(prev => prev - 1);
        }, 18);
        return () => clearTimeout(deleteTimer);
      } else {
        setIsDeleting(false);
        setVariantIndex(prev => (prev + 1) % HEADLINE_VARIANTS.length);
      }
    } else {
      if (charCount < fullText.length) {
        // Humanized AI token jitter speed
        const streamSpeed = Math.floor(Math.random() * 25) + 25;
        const typeTimer = setTimeout(() => {
          setCharCount(prev => prev + 1);
        }, streamSpeed);
        return () => clearTimeout(typeTimer);
      } else {
        setIsPaused(true);
      }
    }
  }, [charCount, isDeleting, isPaused, fullText.length]);

  // Render sliced segments based on current charCount
  const renderGenerativeSegments = () => {
    let accumulatedLength = 0;
    const elements = [];

    for (let i = 0; i < currentVariant.segments.length; i++) {
      const segment = currentVariant.segments[i];
      const segmentStart = accumulatedLength;
      const segmentEnd = accumulatedLength + segment.text.length;

      if (charCount <= segmentStart) {
        break;
      }

      const visibleChars = Math.min(charCount - segmentStart, segment.text.length);
      const visibleText = segment.text.substring(0, visibleChars);

      if (segment.type === 'gradient') {
        elements.push(
          <span key={i} className="gradient-text">
            {visibleText}
          </span>
        );
      } else if (segment.type === 'accent') {
        elements.push(
          <span key={i} style={{ color: 'var(--text-accent)' }}>
            {visibleText}
          </span>
        );
      } else {
        elements.push(<span key={i}>{visibleText}</span>);
      }

      accumulatedLength += segment.text.length;
    }

    return elements;
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        alignItems: 'start',
        position: 'relative'
      }}
    >
      {/* Invisible Ghost copy of the multi-line headline to permanently lock exact height and prevent page moving */}
      <h1
        aria-hidden="true"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 5.2vw, 3.5rem)',
          lineHeight: 1.18,
          fontWeight: 600,
          letterSpacing: '-0.03em',
          margin: 0,
          padding: 0,
          visibility: 'hidden',
          pointerEvents: 'none',
          gridArea: '1 / 1 / 2 / 2',
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        }}
      >
        Optimizing distributed data pipelines & high-throughput systems.
      </h1>

      {/* Active Streaming Headline */}
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.75rem, 5.2vw, 3.5rem)',
          lineHeight: 1.18,
          fontWeight: 600,
          letterSpacing: '-0.03em',
          margin: 0,
          padding: 0,
          gridArea: '1 / 1 / 2 / 2',
          wordBreak: 'break-word',
          overflowWrap: 'break-word'
        }}
      >
        {renderGenerativeSegments()}
        
        {/* Generative AI Cursor */}
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '3px',
            height: '0.9em',
            backgroundColor: '#E07A5F',
            marginLeft: '4px',
            verticalAlign: 'baseline',
            borderRadius: '1px',
            animation: 'aiCursorPulse 0.75s ease-in-out infinite',
            boxShadow: '0 0 10px rgba(224, 122, 95, 0.7)'
          }}
        />
      </h1>
    </div>
  );
}
