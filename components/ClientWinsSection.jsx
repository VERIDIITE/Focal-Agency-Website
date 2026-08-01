'use client';
import React from 'react';
import ScrollReveal from './ScrollReveal';

export default function ClientWinsSection({ onOpenEstimator }) {
  const clients = [
    { name: 'airportr', category: 'Travel Tech', metric: 'Series B Scaled' },
    { name: 'nomupay', category: 'Fintech Payments', metric: 'Global Expansion' },
    { name: 'OneText', category: 'SMS Commerce', metric: '4.8x Conversion' },
    { name: 'CHASE', category: 'Enterprise Security', metric: 'Bank-Grade Architecture' },
    { name: 'MoonLab', category: 'Creative Studio', metric: 'Brand Identity' },
    { name: 'Vanguard FX', category: 'Trading Platform', metric: 'Sub-ms Latency' },
  ];

  return (
    <section id="clients" className="relative py-12 sm:py-28 px-4 sm:px-8 bg-[#07090e] text-white border-y border-white/10 transition-colors overflow-hidden">
      {/* Background Cyan Radial Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" className="space-y-2 sm:space-y-3">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-400">
            AWARD-WINNING PRODUCT DESIGN AND DEVELOPMENT AGENCY • SERVED BY FOCAL
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-5xl lg:text-6xl tracking-tight text-white">
            Our featured client wins
          </h2>
        </ScrollReveal>

        {/* Client Logo Grid */}
        <ScrollReveal animation="scale-up" stagger={true} className="grid grid-cols-2 md:grid-cols-3 border-t border-l border-white/10 bg-white/5 backdrop-blur-md">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-12 border-r border-b border-white/10 flex flex-col items-center justify-center text-center space-y-1.5 sm:space-y-2.5 hover:bg-white/10 transition-colors group cursor-pointer"
              onClick={onOpenEstimator}
            >
              <span className="font-display font-extrabold text-lg sm:text-3xl text-white group-hover:scale-105 transition-transform tracking-tight">
                {client.name}
              </span>
              <div className="space-y-0.5">
                <p className="text-[9px] sm:text-[11px] font-mono uppercase tracking-wider text-slate-400">{client.category}</p>
                <p className="text-[10px] sm:text-xs font-bold text-cyan-400">{client.metric}</p>
              </div>
            </div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
