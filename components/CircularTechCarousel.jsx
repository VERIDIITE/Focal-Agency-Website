'use client';
import React, { useState, useEffect, useMemo } from 'react';
import { CheckCircle2, Zap, ArrowRight, ShieldCheck, Code, Cpu, Sparkles } from 'lucide-react';

export default function CircularTechCarousel({ onOpenEstimator }) {
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedTech, setSelectedTech] = useState(0);

  // Generate 55 ambient glowing star particles
  const stars = useMemo(() => {
    return Array.from({ length: 55 }).map((_, i) => ({
      id: i,
      x: (i * 41) % 520 - 260,
      y: (i * 67) % 520 - 260,
      size: (i % 3) * 1.5 + 1.2,
      opacity: (i % 5) * 0.15 + 0.25,
      delay: (i % 7) * 0.3,
      duration: (i % 4) * 2 + 2.5,
    }));
  }, []);

  const technologies = [
    {
      name: 'Next.js 14 / React',
      category: 'Web Architecture',
      badge: 'Frontend',
      color: '#00f2fe',
      desc: 'Server-side rendering, App Router, and static site generation for sub-second page loads.',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 180 180">
          <path d="M90 0C40.294 0 0 40.294 0 90s40.294 90 90 90 90-40.294 90-90S139.706 0 90 0zm44.3 138.8L78.6 62.4v57.8H65.8V51.4h12.8l55.7 76.2v-76.2h12.8v87.4h-12.8z" />
        </svg>
      )
    },
    {
      name: 'TypeScript',
      category: 'Type Safety',
      badge: 'Core Language',
      color: '#3178c6',
      desc: 'Strict type safety and robust enterprise codebase architecture.',
      icon: (
        <span className="font-mono font-extrabold text-base tracking-tighter text-cyan-300">TS</span>
      )
    },
    {
      name: 'React Native & iOS',
      category: 'Mobile Apps',
      badge: 'Cross-Platform',
      color: '#61dafb',
      desc: '60fps native iOS & Android applications with shared single-codebase efficiency.',
      icon: (
        <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="2" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
        </svg>
      )
    },
    {
      name: 'Custom MCP & AI Agents',
      category: 'Next-Gen AI',
      badge: 'AI Agent Tech',
      color: '#06b6d4',
      desc: 'Model Context Protocol servers enabling context-aware AI tools and agent workflows.',
      icon: (
        <svg className="w-6 h-6 stroke-current fill-none stroke-[2]" viewBox="0 0 24 24">
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M9 9h6v6H9z" />
          <path d="M9 1v2" /><path d="M15 1v2" /><path d="M9 21v2" /><path d="M15 21v2" />
        </svg>
      )
    },
    {
      name: 'Python & FastAPI',
      category: 'AI Microservices',
      badge: 'AI & Data API',
      color: '#38bdf8',
      desc: 'High-performance AI microservices, LLM fine-tuning pipelines, and data processing.',
      icon: (
        <span className="font-mono font-extrabold text-base text-cyan-300">Py</span>
      )
    },
    {
      name: 'AWS & Vercel Edge',
      category: 'Cloud Infrastructure',
      badge: 'Sub-ms Edge',
      color: '#ff9900',
      desc: 'Global edge deployments with sub-millisecond latency and automatic auto-scaling.',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      )
    },
    {
      name: 'Docker & Kubernetes',
      category: 'Container Scaling',
      badge: 'DevOps',
      color: '#2496ed',
      desc: 'Isolated containerized microservices architecture built for high concurrency.',
      icon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M13.98 11.07h2.12v2.13h-2.12zm-3.18 0h2.12v2.13h-2.12zm-3.18 0h2.12v2.13H7.62zm-3.18 0h2.12v2.13H4.44zm9.54-3.18h2.12v2.12h-2.12zm-3.18 0h2.12v2.12h-2.12zm-3.18 0h2.12v2.12H7.62zm6.36-3.18h2.12v2.12h-2.12z" />
        </svg>
      )
    },
    {
      name: 'PostgreSQL & Prisma',
      category: 'Relational Database',
      badge: 'Data Layer',
      color: '#336791',
      desc: 'ACID-compliant relational database design with scalable database connection pools.',
      icon: (
        <span className="font-mono font-extrabold text-base text-cyan-300">SQL</span>
      )
    },
  ];

  // Smooth Orbit Rotation Loop
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.3) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeItem = technologies[selectedTech];

  // 3D Elliptical Orbit Parameters
  const radiusX = 230; // Horizontal radius
  const radiusY = 120; // Vertical perspective radius

  // Active Node Position
  const activeTotal = technologies.length;
  const activeAngleDeg = (360 / activeTotal) * selectedTech + rotationAngle;
  const activeAngleRad = (activeAngleDeg * Math.PI) / 180;
  const activeX = Math.cos(activeAngleRad) * radiusX;
  const activeY = Math.sin(activeAngleRad) * radiusY;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* Left 3D Tilted Planetary Orbit Stage */}
      <div 
        className="lg:col-span-7 relative flex items-center justify-center min-h-[500px] sm:min-h-[560px]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Ambient Floating Star Dust Field */}
        {stars.map((star) => (
          <div
            key={star.id}
            style={{
              transform: `translate(${star.x}px, ${star.y}px)`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animation: `pulse ${star.duration}s ease-in-out infinite alternate`,
              animationDelay: `${star.delay}s`,
            }}
            className="absolute rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(0,242,254,0.8)] pointer-events-none z-10"
          />
        ))}

        {/* Ambient Cyan Radial Glow */}
        <div className="absolute w-[450px] h-[450px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

        {/* Outer & Inner 3D Orbit Guide Rings */}
        <div className="absolute w-[460px] h-[240px] rounded-[100%] border border-white/10 shadow-[0_0_30px_rgba(0,242,254,0.05)] pointer-events-none" />
        <div className="absolute w-[460px] h-[240px] rounded-[100%] border border-cyan-400/30 border-dashed animate-pulse pointer-events-none" />
        <div className="absolute w-[360px] h-[180px] rounded-[100%] border border-white/5 pointer-events-none" />

        {/* Dynamic Connecting Beam Line from Center Core to Active Selected Node */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20 overflow-visible">
          <line
            x1="50%"
            y1="50%"
            x2={`calc(50% + ${activeX}px)`}
            y2={`calc(50% + ${activeY}px)`}
            stroke="#00f2fe"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            className="opacity-75 animate-pulse"
          />
        </svg>

        {/* Central Core: Focal Obsidian Cyber Orb */}
        <div 
          onClick={onOpenEstimator}
          className="relative z-30 w-36 h-36 sm:w-40 sm:h-40 rounded-full bg-[#080b12] border border-cyan-400/40 shadow-[0_0_50px_rgba(0,242,254,0.25)] flex flex-col items-center justify-center text-center p-4 group cursor-pointer transition-all duration-300 hover:scale-105 hover:border-cyan-300"
        >
          <div className="w-11 h-11 rounded-full bg-cyan-500/15 border border-cyan-400/40 flex items-center justify-center text-cyan-300 mb-1.5 group-hover:scale-110 shadow-lg shadow-cyan-500/20 transition-transform">
            <Zap className="w-5 h-5 fill-cyan-400/20 stroke-[2.2]" />
          </div>
          <span className="font-display font-extrabold text-white text-sm tracking-tight">
            Focal Stack
          </span>
          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest mt-0.5">
            PRODUCTION
          </span>
        </div>

        {/* Orbiting 3D Tech Nodes */}
        {technologies.map((tech, index) => {
          const total = technologies.length;
          const angleDeg = (360 / total) * index + rotationAngle;
          const angleRad = (angleDeg * Math.PI) / 180;
          
          const x = Math.cos(angleRad) * radiusX;
          const y = Math.sin(angleRad) * radiusY;
          
          // Z-index calculation based on Y position (front vs back of orbit ring)
          const zIndex = Math.round(y + 200);
          const isSelected = selectedTech === index;

          return (
            <button
              key={index}
              onClick={() => setSelectedTech(index)}
              style={{
                transform: `translate(${x}px, ${y}px)`,
                zIndex: isSelected ? 50 : zIndex,
              }}
              className={`absolute w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 backdrop-blur-xl cursor-pointer border ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 border-cyan-200 shadow-[0_0_30px_rgba(0,242,254,0.7)] scale-125'
                  : 'bg-[#090c14]/90 text-slate-300 border-white/15 hover:border-cyan-400 hover:text-white hover:scale-110 shadow-xl'
              }`}
              title={tech.name}
            >
              <div>{tech.icon}</div>
            </button>
          );
        })}
      </div>

      {/* Right Selected Technology Inspection Card */}
      <div className="lg:col-span-5 space-y-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-2xl space-y-6 shadow-2xl animate-in fade-in duration-300 relative overflow-hidden">
          {/* Ambient Accent Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-md border border-cyan-500/20 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeItem.badge}</span>
            </span>
            <span className="text-xs font-mono text-slate-400 font-semibold">
              {(selectedTech + 1).toString().padStart(2, '0')} / {technologies.length.toString().padStart(2, '0')}
            </span>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
              {activeItem.name}
            </h3>
            <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
              {activeItem.category}
            </p>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            {activeItem.desc}
          </p>

          <div className="space-y-2.5 pt-1">
            {[
              '100% Codebase Ownership & IP Transfer',
              'Sub-second API & Microservice Performance',
              'Served directly by Focal Senior Leads',
            ].map((feat, fIdx) => (
              <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              onClick={() => onOpenEstimator(activeItem.name)}
              className="w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/25 hover:scale-[1.02]"
            >
              <span>ESTIMATE ARCHITECTURE SCOPE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
