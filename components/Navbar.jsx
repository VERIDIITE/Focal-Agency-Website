'use client';
import React, { useState, useEffect } from 'react';
import FocalLogo from './FocalLogo';
import { ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ onOpenServicesMenu, onOpenEstimator }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-full px-5 py-3 transition-all duration-300 flex items-center justify-between ${
        scrolled 
          ? 'bg-[#07090e]/95 text-white backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/80' 
          : 'bg-[#07090e]/90 text-white backdrop-blur-md border border-white/10 shadow-xl'
      }`}>
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <FocalLogo showTagline={false} />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
          <button
            onClick={onOpenServicesMenu}
            onMouseEnter={onOpenServicesMenu}
            className="hover:text-white transition-colors duration-200 flex items-center gap-1 group py-1"
          >
            <span>Services</span>
            <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200 text-cyan-400" />
          </button>

          <a href="#services" className="hover:text-white transition-colors duration-200">
            Capabilities
          </a>
          <a href="#startups" className="hover:text-white transition-colors duration-200 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Startup Accelerator
          </a>
          <a href="#clients" className="hover:text-white transition-colors duration-200">
            Featured Wins
          </a>
          <button onClick={onOpenEstimator} className="hover:text-white transition-colors duration-200">
            Get In Touch
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenEstimator}
            className="group relative px-6 py-2.5 rounded-full bg-cyan-500 text-slate-950 hover:bg-cyan-400 font-extrabold text-xs tracking-wider uppercase transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:scale-105"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-full bg-white/5 border border-white/10 text-white"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-4 top-20 p-6 rounded-3xl bg-[#07090e] border border-white/15 backdrop-blur-2xl shadow-2xl flex flex-col gap-5 z-50">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenServicesMenu();
            }}
            className="text-left text-lg font-bold text-slate-100 hover:text-cyan-400 flex items-center justify-between"
          >
            <span>All Services (Mega Menu)</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-slate-100 hover:text-cyan-400 transition-colors"
          >
            Capabilities & Services
          </a>
          <a
            href="#startups"
            onClick={() => setMobileMenuOpen(false)}
            className="text-lg font-bold text-slate-100 hover:text-cyan-400 transition-colors"
          >
            Startup Accelerator MVP
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenEstimator();
            }}
            className="text-left text-lg font-bold text-slate-100 hover:text-cyan-400 transition-colors"
          >
            Get In Touch
          </button>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEstimator();
              }}
              className="w-full py-3.5 rounded-2xl bg-cyan-500 text-slate-950 font-extrabold text-sm text-center uppercase tracking-wider shadow-lg"
            >
              Get In Touch →
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
