import React, { useEffect, useRef } from 'react';

const Background = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
      initAll();
    };

    // ── Stars ──────────────────────────────────────────────
    let stars = [];
    const initStars = () => {
      stars = Array.from({ length: 55 }, () => ({
        x:            Math.random() * canvas.width,
        y:            Math.random() * canvas.height,
        size:         Math.random() * 1.4 + 0.2,
        baseOpacity:  Math.random() * 0.22 + 0.06,
        twinkleSpeed: Math.random() * 0.018 + 0.004,
        twinklePhase: Math.random() * Math.PI * 2,
        driftX:       (Math.random() - 0.5) * 0.12,
        driftY:       (Math.random() - 0.5) * 0.06,
        // occasional diamond sparkle
        sparkle:      Math.random() < 0.2,
      }));
    };

    // ── Wisps (slow bezier curves) ─────────────────────────
    let wisps = [];
    const initWisps = () => {
      wisps = Array.from({ length: 6 }, () => ({
        sx:  Math.random() * canvas.width,
        sy:  Math.random() * canvas.height,
        c1x: Math.random() * canvas.width,
        c1y: Math.random() * canvas.height,
        c2x: Math.random() * canvas.width,
        c2y: Math.random() * canvas.height,
        ex:  Math.random() * canvas.width,
        ey:  Math.random() * canvas.height,
        vx:  (Math.random() - 0.5) * 0.3,
        vy:  (Math.random() - 0.5) * 0.22,
        opacity: Math.random() * 0.075 + 0.04,
        width:   Math.random() * 2 + 1.5,
        phase:   Math.random() * Math.PI * 2,
        phaseSpeed: 0.003 + Math.random() * 0.004,
      }));
    };

    const initAll = () => { initStars(); initWisps(); };
    resize();
    window.addEventListener('resize', resize);

    const GRID = 52;
    let animId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ── Grid ──────────────────────────────────────────────
      ctx.strokeStyle = 'rgba(97, 73, 132, 0.13)';
      ctx.lineWidth   = 0.7;
      for (let x = 0; x <= canvas.width; x += GRID) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += GRID) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      // slightly larger intersection dots
      ctx.fillStyle = 'rgba(97, 73, 132, 0.18)';
      for (let x = 0; x <= canvas.width; x += GRID) {
        for (let y = 0; y <= canvas.height; y += GRID) {
          ctx.beginPath();
          ctx.arc(x, y, 1.2, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // ── Stars ─────────────────────────────────────────────
      stars.forEach(s => {
        s.twinklePhase += s.twinkleSpeed;
        const op = s.baseOpacity + Math.sin(s.twinklePhase) * s.baseOpacity * 0.65;

        s.x += s.driftX;
        s.y += s.driftY;
        if (s.x < 0)             s.x = canvas.width;
        if (s.x > canvas.width)  s.x = 0;
        if (s.y < 0)             s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        ctx.fillStyle = `rgba(97, 73, 132, ${op})`;

        if (s.sparkle) {
          // small 4-pointed diamond sparkle
          const r = s.size * 2.2;
          ctx.save();
          ctx.translate(s.x, s.y);
          ctx.rotate(s.twinklePhase * 0.15);
          ctx.beginPath();
          ctx.moveTo(0, -r); ctx.lineTo(r * 0.25, 0);
          ctx.lineTo(0,  r); ctx.lineTo(-r * 0.25, 0);
          ctx.closePath();
          ctx.fill();
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // ── Flowing wisps ─────────────────────────────────────
      wisps.forEach(w => {
        w.phase += w.phaseSpeed;

        // Gentle drift of all control points
        w.sx  += w.vx; w.sy  += w.vy;
        w.c1x += w.vx * 1.3 + Math.sin(w.phase) * 0.4;
        w.c1y += w.vy * 0.8 + Math.cos(w.phase * 0.7) * 0.3;
        w.c2x += w.vx * 0.7 + Math.cos(w.phase * 1.1) * 0.4;
        w.c2y += w.vy * 1.2 + Math.sin(w.phase * 0.9) * 0.3;
        w.ex  += w.vx; w.ey  += w.vy;

        // Bounce off edges softly
        ['sx','ex'].forEach(k => {
          if (w[k] < -100 || w[k] > canvas.width + 100) w.vx *= -1;
        });
        ['sy','ey'].forEach(k => {
          if (w[k] < -100 || w[k] > canvas.height + 100) w.vy *= -1;
        });

        // Pulse opacity
        const op = w.opacity * (0.7 + Math.sin(w.phase * 0.5) * 0.3);
        ctx.beginPath();
        ctx.moveTo(w.sx, w.sy);
        ctx.bezierCurveTo(w.c1x, w.c1y, w.c2x, w.c2y, w.ex, w.ey);
        ctx.strokeStyle = `rgba(222, 148, 167, ${op})`;
        ctx.lineWidth   = w.width;
        ctx.stroke();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:       'fixed',
        top:            0,
        left:           0,
        width:          '100vw',
        height:         '100vh',
        zIndex:         0,
        pointerEvents:  'none',
      }}
    />
  );
};

export default Background;
