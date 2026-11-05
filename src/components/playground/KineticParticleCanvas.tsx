import React, { useRef, useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';

export const KineticParticleCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [particleCount, setParticleCount] = useState(120);
  const connectionDist = 100;
  const [interactiveMode, setInteractiveMode] = useState<'attract' | 'repel'>('attract');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = 450;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates
    const mouse = {
      x: -1000,
      y: -1000,
      radius: 140,
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Particle Class
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      baseX: number;
      baseY: number;
    }

    const colors = ['#8B5CF6', '#A78BFA', '#38BDF8', '#7DD3FC', '#F472B6'];
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      particles.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw faint background grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          const angle = Math.atan2(dy, dx);
          const moveX = Math.cos(angle) * force * 5;
          const moveY = Math.sin(angle) * force * 5;

          if (interactiveMode === 'attract') {
            p.x += moveX;
            p.y += moveY;
          } else {
            p.x -= moveX;
            p.y -= moveY;
          }
        }

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Connect near neighbors
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const cdx = p.x - p2.x;
          const cdy = p.y - p2.y;
          const cdist = Math.sqrt(cdx * cdx + cdy * cdy);

          if (cdist < connectionDist) {
            const alpha = 1 - cdist / connectionDist;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [particleCount, connectionDist, interactiveMode]);

  return (
    <div className="rounded-2xl border border-zinc-200/80 dark:border-white/[0.08] bg-[#09090B] overflow-hidden p-4 sm:p-6 space-y-4">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-purple-400" />
          <h3 className="text-sm font-semibold text-zinc-100">Kinetic Constellation</h3>
          <span className="text-xs font-mono text-zinc-400">Move cursor to distort</span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 text-xs text-zinc-400">
            <span>Particles:</span>
            <input
              type="range"
              min="40"
              max="200"
              value={particleCount}
              onChange={(e) => setParticleCount(Number(e.target.value))}
              className="accent-purple-500 w-24 h-1.5 bg-zinc-800 rounded-lg cursor-pointer"
            />
            <span className="font-mono text-purple-400">{particleCount}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-zinc-900 p-1 rounded-lg border border-zinc-800">
            <button
              onClick={() => setInteractiveMode('attract')}
              className={`px-2 py-1 text-xs rounded font-medium transition-colors ${
                interactiveMode === 'attract' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Attract
            </button>
            <button
              onClick={() => setInteractiveMode('repel')}
              className={`px-2 py-1 text-xs rounded font-medium transition-colors ${
                interactiveMode === 'repel' ? 'bg-purple-600 text-white' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Repel
            </button>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="relative w-full h-[450px] rounded-xl overflow-hidden bg-black/40 border border-zinc-800/60 cursor-crosshair">
        <canvas ref={canvasRef} className="w-full h-full block" />
        <div className="absolute bottom-3 left-3 text-[11px] font-mono text-zinc-400 pointer-events-none bg-zinc-900/80 px-2.5 py-1 rounded-md border border-white/5">
          60 FPS • Canvas 2D Spring Simulation
        </div>
      </div>
    </div>
  );
};
