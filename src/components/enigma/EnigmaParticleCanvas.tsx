'use client';

import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  update: () => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
};

function createParticle(width: number, height: number): Particle {
  const particle = {
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.5,
    vy: (Math.random() - 0.5) * 0.5,
    radius: Math.random() * 1.5 + 0.5,
    update() {
      if (particle.x > width || particle.x < 0) particle.vx = -particle.vx;
      if (particle.y > height || particle.y < 0) particle.vy = -particle.vy;
      particle.x += particle.vx;
      particle.y += particle.vy;
    },
    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.fill();
    },
  };

  return particle;
}

export function EnigmaParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let frameId = 0;
    const mouse: { x: number | null; y: number | null; radius: number } = {
      x: null,
      y: null,
      radius: 150,
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      particles = [];
      const numberOfParticles = (width * height) / 10000;
      for (let i = 0; i < numberOfParticles; i += 1) {
        particles.push(createParticle(width, height));
      }
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const animateParticles = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i += 1) {
        const current = particles[i];
        current.update();
        current.draw(ctx);

        for (let j = i; j < particles.length; j += 1) {
          const other = particles[j];
          const dx = current.x - other.x;
          const dy = current.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - dist / 100) * 0.15})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(current.x, current.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        if (mouse.x !== null && mouse.y !== null) {
          const dx = current.x - mouse.x;
          const dy = current.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            ctx.beginPath();
            const opacity = (1 - dist / mouse.radius) * 0.5;
            ctx.strokeStyle = `rgba(10, 132, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(current.x, current.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      frameId = window.requestAnimationFrame(animateParticles);
    };

    resize();
    frameId = window.requestAnimationFrame(animateParticles);

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" aria-hidden="true" />;
}
