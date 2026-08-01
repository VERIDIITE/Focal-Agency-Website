'use client';
import React from 'react';
import { ShieldCheck, Award, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function TechStackSection({ onOpenEstimator }) {
  const row1Logos = [
    { name: 'Next.js 14', category: 'Frontend' },
    { name: 'React', category: 'Web App' },
    { name: 'TypeScript', category: 'Core Language' },
    { name: 'Python', category: 'AI & Data' },
    { name: 'FastAPI', category: 'AI API' },
    { name: 'AWS Cloud', category: 'Cloud Edge' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'Custom MCP', category: 'AI Agents' },
  ];

  const row2Logos = [
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'GraphQL', category: 'API Layer' },
    { name: 'React Native', category: 'Mobile App' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Tailwind CSS', category: 'UI System' },
    { name: 'Three.js & WebGL', category: '3D Graphics' },
    { name: 'Kubernetes', category: 'Infrastructure' },
    { name: 'Vercel Edge', category: 'Serverless' },
  ];

  const trustMetrics = [
    { value: '$500M+', label: 'Client Startup Capital Raised', icon: Zap },
    { value: '120+', label: 'Production Products Shipped', icon: Award },
    { value: '5.0 ★', label: 'Verified Client Review Rating', icon: ShieldCheck },
    { value: '100%', label: 'IP & Codebase Ownership Guaranteed', icon: CheckCircle2 },
  ];

  return (
    <section id="tech-stack" className="relative py-28 bg-[#07090e] text-white border-t border-white/10 overflow-hidden">
      {/* Background Cyan Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 relative z-10">
        
        {/* Verified Outcomes / Agency Credibility Bar */}
        <ScrollReveal animation="fade-up">
          <div className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/15 backdrop-blur-xl shadow-2xl grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {trustMetrics.map((m, idx) => (
              <div key={idx} className={`space-y-2 text-center lg:text-left ${idx > 0 ? 'pt-6 lg:pt-0 lg:pl-8' : ''}`}>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <m.icon className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    {m.value}
                  </span>
                </div>
                <p className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Minimalist Section Header */}
        <div className="space-y-4 text-center max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
              MODERN TECHNICAL ARCHITECTURE • SERVED BY FOCAL LEADS
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-white leading-tight">
              Engineered with modern architecture
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-sans leading-relaxed">
              We architect high-concurrency web platforms, native mobile applications, and custom AI agent workflows using production-proven modern stack technologies.
            </p>
          </ScrollReveal>
        </div>

      </div>

      {/* Dual Row Continuous Tech Marquee (Clean, No Bulky Cards) */}
      <div className="relative mt-12 space-y-4 overflow-hidden py-4">
        {/* Left & Right Fade Vignette Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-[#07090e] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-[#07090e] to-transparent z-20 pointer-events-none" />

        {/* Row 1 (Moving Left) */}
        <div className="animate-marquee flex items-center gap-6 px-4">
          {[...row1Logos, ...row1Logos].map((tech, idx) => (
            <div
              key={idx}
              onClick={() => onOpenEstimator(tech.name)}
              className="px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 shrink-0 backdrop-blur-md hover:border-cyan-400/60 hover:bg-white/10 transition-all cursor-pointer group shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
              <span className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                {tech.category}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 (Moving Right - Opposite Direction) */}
        <div className="animate-marquee-reverse flex items-center gap-6 px-4">
          {[...row2Logos, ...row2Logos].map((tech, idx) => (
            <div
              key={idx}
              onClick={() => onOpenEstimator(tech.name)}
              className="px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 shrink-0 backdrop-blur-md hover:border-cyan-400/60 hover:bg-white/10 transition-all cursor-pointer group shadow-lg"
            >
              <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
              <span className="font-display font-bold text-sm text-white group-hover:text-cyan-300 transition-colors">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Clean Bottom Consultation Trigger */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 text-center">
        <button
          onClick={() => onOpenEstimator('Custom Technical Architecture')}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-xl shadow-cyan-500/20 hover:scale-105"
        >
          <span>DISCUSS YOUR TECH STACK WITH PRINCIPAL LEADS</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
