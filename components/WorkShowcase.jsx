'use client';
import React, { useState } from 'react';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';

export default function WorkShowcase({ onOpenEstimator }) {
  const [activeTab, setActiveTab] = useState('all');

  const caseCategories = [
    { id: 'all', num: '01', title: 'All Cases' },
    { id: 'mobile', num: '02', title: 'Mobile Apps' },
    { id: 'ecommerce', num: '03', title: 'E-Commerce' },
    { id: 'enterprise', num: '04', title: 'Enterprise & AI' },
  ];

  const allProjects = [
    {
      id: 'shello',
      num: '01',
      category: 'mobile',
      categoryTag: 'Mobile Engineering',
      title: 'Shello Blocking Ecosystem',
      impact: '★ +240% Daily Engagement',
      desc: 'High-performance security mobile application engineered with native Swift and React Native for zero-latency client privacy.',
      tags: ['Native Swift', 'React Native', 'UI/UX Design'],
    },
    {
      id: 'golden-nectar',
      num: '02',
      category: 'ecommerce',
      categoryTag: 'Headless E-Commerce',
      title: 'Golden Nectar Elixir',
      impact: '★ $4.2M Revenue Processed',
      desc: 'Luxury storefront with custom Next.js checkout flow, high-conversion landing experience, and global payment architecture.',
      tags: ['Next.js App Router', 'Stripe Payments', 'Brand Strategy'],
    },
    {
      id: 'vanguard-fx',
      num: '03',
      category: 'enterprise',
      categoryTag: 'Enterprise Fintech',
      title: 'Vanguard Enterprise FX',
      impact: '★ Sub-ms Latency',
      desc: 'Real-time financial trading microservices platform with high-concurrency data streaming and telemetry analytics.',
      tags: ['Enterprise Codebase', 'GraphQL APIs', 'Microservices'],
    },
    {
      id: 'stenedit',
      num: '04',
      category: 'enterprise',
      categoryTag: 'Creative Media Web App',
      title: 'Stenedit Studio Suite',
      impact: '★ 120k Active Users',
      desc: 'Interactive browser-based audio and video editor with real-time state management, GSAP motion graphics, and cloud rendering.',
      tags: ['Next.js', 'React State Engine', 'GSAP Motion'],
    },
  ];

  const filteredProjects = activeTab === 'all' 
    ? allProjects 
    : allProjects.filter((p) => p.category === activeTab);

  return (
    <section id="works" className="relative py-28 px-4 sm:px-8 bg-[#07090e] text-white border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header (Identical layout to Services Section) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
              FEATURED CLIENT CASES • SERVED BY FOCAL
            </span>
            <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-white">
              Featured engineering wins
            </h2>
          </div>

          <button
            onClick={onOpenEstimator}
            className="px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shrink-0 flex items-center gap-2 transition-all hover:scale-105"
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Minimalist Professional Horizontal Tab Switcher (Identical to Services Section) */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 gap-2">
          {caseCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`pb-5 text-left transition-all border-b-2 flex flex-col justify-between space-y-2 group ${
                activeTab === cat.id
                  ? 'border-orange-500 text-white'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className="font-mono text-xs font-bold">{cat.num}</span>
              <span className="font-display font-extrabold text-xl sm:text-2xl group-hover:translate-x-1 transition-transform">
                {cat.title}
              </span>
            </button>
          ))}
        </div>

        {/* Selected Category Cases Grid (Identical to Services Section Card Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-300">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={onOpenEstimator}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between space-y-6 backdrop-blur-md"
            >
              <div className="space-y-4">
                {/* Number & Action Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-slate-500">{(idx + 1).toString().padStart(2, '0')}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-orange-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                {/* Category & Impact Metric */}
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-500 bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                    {project.categoryTag}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-400">
                    {project.impact}
                  </span>
                </div>

                {/* Title */}
                <h4 className="font-display font-bold text-xl text-white group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {project.desc}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Bar */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-slate-400 group-hover:text-white">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-orange-500" />
                  <span>Verified Focal Engineering Outcome</span>
                </div>
                <span className="text-orange-500 font-mono text-[11px] uppercase tracking-wider">VIEW SCOPE →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner (Identical to Services Section Bottom Banner) */}
        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-1">
            <h4 className="font-display font-bold text-xl text-white">Require a custom enterprise scope or multi-platform product architecture?</h4>
            <p className="text-xs text-slate-400">Our engineering leads at Focal Studio will structure a tailored engagement proposal.</p>
          </div>
          <button
            onClick={onOpenEstimator}
            className="px-8 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shrink-0"
          >
            LET'S TALK →
          </button>
        </div>

      </div>
    </section>
  );
}
