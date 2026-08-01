'use client';
import React from 'react';
import FocalLogo from './FocalLogo';
import { Mail, MapPin, ArrowRight, ArrowUp } from 'lucide-react';

export default function Footer({ onOpenEstimator }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05070a] text-slate-300 pt-20 pb-12 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-16 relative z-10">

        {/* Clean Link Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pt-4">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <FocalLogo showTagline={true} />
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              Focal Studio is a boutique product design and software engineering practice served by senior engineering leads. We architect high-concurrency web platforms, native mobile applications, and investor-ready MVPs.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Accepting Client Engagements for Q3/Q4 2026
              </span>
            </div>
          </div>

          {/* Development Services */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Engineering</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">Custom Software Solutions</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Web Apps & Next.js</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Native iOS & Android Apps</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">E-Commerce Development</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Dedicated Developer Teams</a></li>
            </ul>
          </div>

          {/* Design & Advisory */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Design & Launch</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans">
              <li><a href="#services" className="hover:text-white transition-colors">UI/UX Design Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Branding & Visual Identity</a></li>
              <li><a href="#startups" className="hover:text-white transition-colors">4-Week MVP Sprints</a></li>
              <li><a href="#startups" className="hover:text-white transition-colors">Fractional CTO Advisory</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">How We Work Process</a></li>
            </ul>
          </div>

          {/* Agency Leadership & Contact */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-white">Direct Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-400 font-sans">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:hello@focalstudio.agency" className="hover:text-white transition-colors">hello@focalstudio.agency</a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>London HQ & Global Remote</span>
              </p>
            </div>
            <button
              onClick={onOpenEstimator}
              className="w-full py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/10 text-white font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md hover:border-cyan-400/40"
            >
              <span>GET IN TOUCH</span>
              <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Bottom Legal & Meta Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-sans">
          <p>© 2026 Focal Studio. All rights reserved. Served by Focal Leads.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#services" className="hover:text-slate-300 transition-colors">CAPABILITIES</a>
            <a href="#startups" className="hover:text-slate-300 transition-colors">STARTUPS</a>
            <button onClick={onOpenEstimator} className="hover:text-cyan-300 transition-colors uppercase font-bold text-cyan-400">GET IN TOUCH</button>
            <button 
              onClick={scrollToTop} 
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
