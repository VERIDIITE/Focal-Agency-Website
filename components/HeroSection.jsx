'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import Metallic3DModel from './Metallic3DModel';

export default function HeroSection({ onOpenEstimator, onOpenServicesMenu }) {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-anim-item',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.12, ease: 'power3.out' }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 bg-[#07090e] text-white border-b border-white/10 overflow-hidden min-h-[85vh] flex flex-col justify-center"
    >
      {/* Background Ambient Glows */}
      <div className="glow-orb-pink top-10 left-10 opacity-40" />
      <div className="glow-orb-purple bottom-10 right-10 opacity-30" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center z-10 relative">
        
        {/* Left Column: Headline & Action */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6 sm:space-y-8">
          
          {/* Uppercase Category Tag */}
          <div className="hero-anim-item flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-400">
              PRODUCT DESIGN AND DEVELOPMENT AGENCY • SERVED BY FOCAL
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="hero-anim-item font-display font-extrabold text-3xl sm:text-5xl xl:text-7xl tracking-tight text-white leading-[1.08]">
              We take brands, websites, and products to the next level.
            </h1>
          </div>

          {/* Value Proposition Statement */}
          <p className="hero-anim-item text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-sans">
            We work with ambitious founders and engineering leaders who have built great concepts — and need Focal Studio to redesign, engineer, and ship them with surgical precision.
          </p>

          {/* Action Buttons */}
          <div className="hero-anim-item flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={onOpenEstimator}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>LET'S TALK</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-center"
            >
              <span>VIEW CAPABILITIES</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenServicesMenu}
              className="hidden sm:inline-block px-6 py-3.5 rounded-xl text-slate-400 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors text-center"
            >
              EXPLORE ALL SERVICES ↓
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="hero-anim-item flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs font-semibold text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Served by Focal Leads
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" /> 4-Week MVP Guarantee
            </span>
          </div>

        </div>

        {/* Right Column: WebGL Metallic 3D Chrome Model (Pristine on Desktop, Clean Hidden on Mobile) */}
        <div className="lg:col-span-5 hidden lg:flex justify-center items-center relative min-h-[440px] w-full">
          <Metallic3DModel modelType="torusKnot" size={420} position="center" />
        </div>

      </div>
    </section>
  );
}
