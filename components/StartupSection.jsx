'use client';
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Metallic3DModel from './Metallic3DModel';
import ScrollReveal from './ScrollReveal';

export default function StartupSection({ onOpenEstimator }) {
  const startupOffers = [
    {
      num: '01',
      tag: 'RAPID ENGINEERING',
      title: 'MVP Launch Sprint',
      timeline: '4 – 6 Weeks Delivery',
      desc: 'Full-stack production codebase, React/Next.js web application, iOS & Android native mobile readiness, and payment gateway integration shipped in 4 to 6 weeks.',
      highlights: ['Next.js & React', 'Native iOS & Android', 'Stripe / Payments'],
      ctaText: 'BUILD MY MVP',
    },
    {
      num: '02',
      tag: 'EXECUTIVE ADVISORY',
      title: 'Fractional CTO Services',
      timeline: 'Strategic Guidance',
      desc: 'Direct technical leadership served by Focal Studio. System architecture planning, pitch deck technical due diligence, cloud cost optimization, and engineering hiring roadmaps.',
      highlights: ['Tech Due Diligence', 'Cloud Optimization', 'Hiring Roadmap'],
      ctaText: 'BOOK CTO ADVISORY',
    },
    {
      num: '03',
      tag: 'FOUNDER PACKAGE',
      title: 'Design & Code Bundle',
      timeline: 'Brand + Software',
      desc: 'Combine complete visual brand identity, logo design system, high-converting investor demo site, and core MVP software code into one streamlined package.',
      highlights: ['Brand Identity Suite', 'Investor Demo Site', 'Milestone Pricing'],
      ctaText: 'EXPLORE FOUNDER BUNDLE',
    },
  ];

  return (
    <section id="startups" className="relative py-16 sm:py-28 px-4 sm:px-8 bg-white text-slate-950 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-20 relative z-10">
        
        {/* Sleek Section Header with Right-Side 3D Model */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <ScrollReveal animation="slide-right" className="lg:col-span-8 space-y-3 sm:space-y-4">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-500">
              STARTUP ACCELERATOR STUDIO • SERVED BY FOCAL
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-slate-950 leading-[1.08]">
              Launch your MVP in 4–6 weeks
            </h2>
            <p className="text-slate-600 text-sm sm:text-lg leading-relaxed font-sans max-w-2xl">
              We provide early-stage founders with executive CTO leadership, rapid full-stack engineering, and high-converting product design.
            </p>
          </ScrollReveal>

          {/* Right-Side Inline 3D Model (No Overlap) */}
          <ScrollReveal animation="scale-up" className="lg:col-span-4 hidden lg:flex justify-center items-center">
            <Metallic3DModel modelType="sphere" size={300} position="center" />
          </ScrollReveal>
        </div>

        {/* Minimalist 3-Column Grid */}
        <ScrollReveal animation="scale-up" stagger={true} className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 border-t border-slate-200 pt-8 sm:pt-12">
          {startupOffers.map((offer, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-cyan-500 hover:bg-white transition-all duration-300 group shadow-sm hover:shadow-xl"
            >
              <div className="space-y-4 sm:space-y-6">
                {/* Number & Tag */}
                <div className="flex items-center justify-between border-b border-slate-200 pb-3 sm:pb-4">
                  <span className="font-mono text-xs sm:text-sm font-bold text-slate-400">{offer.num}</span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-700 bg-cyan-50 px-2.5 py-1 rounded-md border border-cyan-200">
                    {offer.tag}
                  </span>
                </div>

                {/* Title & Timeline */}
                <div className="space-y-1">
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-950 group-hover:text-cyan-600 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs font-mono font-bold text-slate-500">{offer.timeline}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {offer.desc}
                </p>

                {/* Minimalist Highlight Badges */}
                <div className="flex flex-wrap gap-2 pt-1 sm:pt-2">
                  {offer.highlights.map((h, hIdx) => (
                    <span key={hIdx} className="text-[10px] sm:text-[11px] font-medium px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-white text-slate-700 border border-slate-200 shadow-2xs">
                      ✓ {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-2 sm:pt-4">
                <button
                  onClick={onOpenEstimator}
                  className="w-full py-3 sm:py-3.5 rounded-xl bg-slate-950 group-hover:bg-cyan-500 group-hover:text-slate-950 text-white font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  <span>{offer.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
}
