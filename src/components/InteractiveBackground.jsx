import React, { useEffect, useRef } from 'react';

export default function InteractiveBackground({ theme = 'dark' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Google 4-Color Palette
    const colors = [
      'rgba(66, 133, 244, ', // Blue
      'rgba(234, 67, 53, ',  // Red
      'rgba(251, 188, 5, ',  // Yellow
      'rgba(52, 168, 83, '   // Green
    ];

    // Responsive particle count
    const particleCount = Math.min(65, Math.floor((width * height) / 18000));
    const particles = [];
    const ripples = [];

    // Mouse & Touch interaction state
    const pointer = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
      radius: 140
    };

    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        size: Math.random() * 2.5 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.15,
        alpha: Math.random() * 0.4 + 0.15,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2
      });
    }

    // Resize Handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Pointer / Touch Handlers
    const handlePointerMove = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      pointer.targetX = clientX;
      pointer.targetY = clientY;
      pointer.active = true;

      // Spawn occasional light touch spark
      if (Math.random() > 0.6) {
        ripples.push({
          x: clientX,
          y: clientY,
          radius: 4,
          maxRadius: 45,
          alpha: 0.35,
          colorPrefix: colors[Math.floor(Math.random() * colors.length)]
        });
      }
    };

    const handlePointerDown = (e) => {
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      ripples.push({
        x: clientX,
        y: clientY,
        radius: 5,
        maxRadius: 80,
        alpha: 0.5,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)]
      });
    };

    const handlePointerLeave = () => {
      pointer.active = false;
    };

    // Scroll Handler
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;
      scrollVelocity = delta * 0.08;
      lastScrollY = currentScrollY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('mouseleave', handlePointerLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    let frame = 0;

    // Render loop
    const render = () => {
      frame++;
      ctx.clearRect(0, 0, width, height);

      // Smooth pointer lerp
      pointer.x += (pointer.targetX - pointer.x) * 0.1;
      pointer.y += (pointer.targetY - pointer.y) * 0.1;

      // Decay scroll velocity smoothly
      scrollVelocity *= 0.92;

      // 1. Draw pointer glowing halo if active
      if (pointer.active) {
        const gradient = ctx.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          pointer.radius
        );
        const glowOpacity = theme === 'dark' ? 0.07 : 0.04;
        gradient.addColorStop(0, `rgba(66, 133, 244, ${glowOpacity * 1.5})`);
        gradient.addColorStop(0.5, `rgba(52, 168, 83, ${glowOpacity})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, pointer.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Render & update ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += 1.8;
        rip.alpha *= 0.94;

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `${rip.colorPrefix}${rip.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        if (rip.alpha < 0.02 || rip.radius > rip.maxRadius) {
          ripples.splice(r, 1);
        }
      }

      // 3. Update & render particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Apply scroll momentum parallax
        p.y -= scrollVelocity * (p.size * 0.6);

        // Standard floating velocity
        p.x += p.vx;
        p.y += p.vy;

        // Pointer proximity interaction
        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < pointer.radius) {
            const force = (1 - dist / pointer.radius) * 1.2;
            p.x -= (dx / dist) * force;
            p.y -= (dy / dist) * force;
          }
        }

        // Screen boundary wrap
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Breathing opacity
        p.alpha = p.baseAlpha + Math.sin(frame * p.pulseSpeed + p.pulseOffset) * 0.12;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${Math.max(0.05, p.alpha)})`;
        ctx.fill();

        // 4. Draw constellation connect lines between close particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distSq = (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2;
          const maxDist = 110;

          if (distSq < maxDist * maxDist) {
            const dist = Math.sqrt(distSq);
            const lineAlpha = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(138, 180, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Draw light beam line to pointer if close
        if (pointer.active) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            const pointerLineAlpha = (1 - dist / 100) * 0.2;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.strokeStyle = `${p.colorPrefix}${pointerLineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('mouseleave', handlePointerLeave);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
}
