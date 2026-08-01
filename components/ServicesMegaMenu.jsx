'use client';
import React from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import FocalLogo from './FocalLogo';

export default function ServicesMegaMenu({ isOpen, onClose, onSelectService, onOpenEstimator }) {
  if (!isOpen) return null;

  const categories = [
    {
      title: 'AI services',
      items: [
        'Custom MCP servers',
        'AI agent development',
        'AI integration',
        'AI marketing solutions',
        'AI business integration',
        'AI application development',
        'AI consulting',
        'AI chatbot development',
        'AI software development',
        'Vibe Coding Rescue',
      ]
    },
    {
      title: 'Development',
      items: [
        'Custom software development solutions',
        'Web development',
        'React Native app development',
        'Web apps',
        'Mobile app development',
        'iOS (Native)',
        'Android (Native)',
        'E-commerce development',
        'Frontend development services',
        'Backend development services',
        'Custom enterprise software',
      ]
    },
    {
      title: 'Design',
      items: [
        'Graphic design',
        'Logos',
        'Strategy and branding',
        'Illustration',
        'Web design',
        'Creative landing pages',
        'Concept design services',
        'Desktop UI/UX',
        'Mobile app UI/UX',
        'Tablet UI/UX',
        'UI/UX design services',
      ]
    },
    {
      title: 'For startups',
      items: [
        'MVP development',
        'Design services for early stage',
        'App development services',
        'CTO services',
        'Software development services',
        'Analytics integration',
      ]
    },
    {
      title: 'DevOps & Teams',
      items: [
        'DevOps services',
        'Fast start with dedicated teams',
        'Cloud infrastructure audit',
        'Continuous Deployment setup',
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#07090e] text-slate-100 overflow-y-auto animate-in fade-in duration-200">
      
      {/* Top Header Navbar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-white/10">
        <FocalLogo showTagline={false} />

        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <span className="text-cyan-400 font-bold px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30">
            Services Mega Menu
          </span>
          <a href="#services" onClick={onClose} className="hover:text-white transition-colors">Capabilities</a>
          <a href="#startups" onClick={onClose} className="hover:text-white transition-colors">Startups</a>
          <a href="#process" onClick={onClose} className="hover:text-white transition-colors">How We Work</a>
          <a href="#clients" onClick={onClose} className="hover:text-white transition-colors">Clients</a>
        </div>

        <button
          onClick={() => {
            onClose();
            onOpenEstimator();
          }}
          className="px-6 py-2.5 rounded-full bg-white text-slate-950 font-extrabold text-xs tracking-wider uppercase hover:bg-slate-200 transition-colors shadow-lg"
        >
          Estimate Project
        </button>
      </div>

      {/* Sub-bar Controls */}
      <div className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
        <div className="px-5 py-2 rounded-full border border-white/20 text-xs font-semibold text-white bg-white/5">
          All services • Served by Focal
        </div>
        <button
          onClick={onClose}
          className="p-3 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white border border-white/10 transition-colors"
          title="Close services menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Categorized Mega Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="font-display font-extrabold text-2xl text-white tracking-tight border-b border-white/10 pb-3">
              {cat.title}
            </h3>
            <ul className="space-y-3.5">
              {cat.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <button
                    onClick={() => {
                      onClose();
                      onSelectService(item);
                    }}
                    className="text-left text-sm font-medium text-slate-300 hover:text-white hover:translate-x-1.5 transition-all flex items-center justify-between w-full group"
                  >
                    <span>{item}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-cyan-400 transition-opacity shrink-0 ml-1" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-black border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="font-display font-bold text-xl text-white">Have a specialized custom requirement?</p>
            <p className="text-xs text-slate-400">Speak directly with Focal Studio engineering leads.</p>
          </div>
          <button
            onClick={() => {
              onClose();
              onOpenEstimator();
            }}
            className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-xl hover:scale-105 transition-transform"
          >
            Start Project Consultation →
          </button>
        </div>
      </div>

    </div>
  );
}
