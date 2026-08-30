import React, { useEffect, useRef } from 'react';

export const SchematicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Schematic nodes
    interface Node {
      x: number;
      y: number;
      label?: string;
      type: 'sum' | 'block' | 'junction' | 'sensor';
      pulse: number;
      speed: number;
    }

    const nodes: Node[] = [];
    const numNodes = Math.min(18, Math.floor(width / 80));

    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        type: ['sum', 'block', 'junction', 'sensor'][i % 4] as Node['type'],
        pulse: Math.random() * Math.PI * 2,
        speed: 0.015 + Math.random() * 0.015,
      });
    }

    // Circuit trace signals
    interface Signal {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
    }

    const signals: Signal[] = [];
    for (let i = 0; i < 6; i++) {
      const from = Math.floor(Math.random() * nodes.length);
      let to = Math.floor(Math.random() * nodes.length);
      while (to === from) to = Math.floor(Math.random() * nodes.length);
      signals.push({
        fromIndex: from,
        toIndex: to,
        progress: Math.random(),
        speed: 0.003 + Math.random() * 0.004,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 48;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw orthogonal connections between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 260) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.08 * (1 - dist / 260)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            // Orthogonal schematic routing
            const midX = nodes[i].x;
            const midY = nodes[j].y;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(midX, midY);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw moving signals along paths
      signals.forEach((sig) => {
        sig.progress += sig.speed;
        if (sig.progress >= 1) {
          sig.progress = 0;
          sig.fromIndex = Math.floor(Math.random() * nodes.length);
          sig.toIndex = (sig.fromIndex + 1 + Math.floor(Math.random() * (nodes.length - 1))) % nodes.length;
        }

        const start = nodes[sig.fromIndex];
        const end = nodes[sig.toIndex];
        if (!start || !end) return;

        // Orthogonal interp
        let curX = start.x;
        let curY = start.y;
        const midX = start.x;
        const midY = end.y;

        if (sig.progress < 0.5) {
          const p = sig.progress * 2;
          curX = start.x;
          curY = start.y + (midY - start.y) * p;
        } else {
          const p = (sig.progress - 0.5) * 2;
          curX = midX + (end.x - midX) * p;
          curY = midY;
        }

        ctx.fillStyle = 'rgba(6, 182, 212, 0.7)';
        ctx.shadowColor = 'rgba(6, 182, 212, 0.9)';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(curX, curY, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw nodes
      nodes.forEach((node) => {
        node.pulse += node.speed;
        const opacity = 0.25 + 0.15 * Math.sin(node.pulse);

        if (node.type === 'sum') {
          // Circular summing junction
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
          ctx.stroke();

          // Plus inside
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.8})`;
          ctx.beginPath();
          ctx.moveTo(node.x - 3, node.y);
          ctx.lineTo(node.x + 3, node.y);
          ctx.moveTo(node.x, node.y - 3);
          ctx.lineTo(node.x, node.y + 3);
          ctx.stroke();
        } else if (node.type === 'block') {
          // Small subsystem block
          ctx.strokeStyle = `rgba(56, 189, 248, ${opacity * 0.9})`;
          ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.rect(node.x - 7, node.y - 7, 14, 14);
          ctx.fill();
          ctx.stroke();
        } else {
          // Junction point
          ctx.fillStyle = `rgba(56, 189, 248, ${opacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full opacity-60"
        style={{ filter: 'contrast(120%)' }}
      />
      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070b14]/40 via-transparent to-[#070b14]" />
    </div>
  );
};
