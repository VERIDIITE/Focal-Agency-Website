'use client';
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ProcessSection({ onOpenEstimator }) {
  const [activeTab, setActiveTab] = useState('Launch');

  const tabs = ['Launch', 'Evolve', 'Rebrand', 'Extend'];

  const processSteps = {
    Launch: [
      {
        num: '01',
        title: 'Design prototype',
        desc: 'Test product ideas fast with clickable user journeys, high-fidelity Figma prototypes, and visual interaction flows.',
      },
      {
        num: '02',
        title: 'Product discovery',
        desc: 'Map out key features, user flows, and technical architecture served by Focal to align your team and mitigate build risks.',
      },
      {
        num: '03',
        title: 'Full-stack engineering',
        desc: 'Ship production-ready code with Next.js, React Native, and robust backend microservices in 4–6 week sprints.',
      },
      {
        num: '04',
        title: 'CTO & Post-launch traction',
        desc: 'Continuous performance telemetry, investor due-diligence support, and cloud scaling optimizations.',
      },
    ],
    Evolve: [
      {
        num: '01',
        title: 'Architecture Audit',
        desc: 'Deep-dive review of existing codebases to identify performance bottlenecks, tech debt, and security vulnerabilities.',
      },
      {
        num: '02',
        title: 'Feature Expansion',
        desc: 'Seamlessly integrate new API endpoints, payment gateways, or AI models without downtime.',
      },
      {
        num: '03',
        title: 'Scale Infrastructure',
        desc: 'Migrate to serverless microservices or Kubernetes for sub-millisecond response times.',
      },
      {
        num: '04',
        title: 'UX Refinement',
        desc: 'Optimize conversion funnels based on real user telemetry analytics data.',
      },
    ],
    Rebrand: [
      {
        num: '01',
        title: 'Brand Positioning',
        desc: 'Redefine visual identity, typography systems, color schemes, and market messaging.',
      },
      {
        num: '02',
        title: 'Web Redesign',
        desc: 'Transform legacy web layouts into award-worthy high-conversion landing experiences.',
      },
      {
        num: '03',
        title: 'Design System',
        desc: 'Build scalable UI design libraries in Figma for rapid cross-platform deployment.',
      },
      {
        num: '04',
        title: 'Brand Assets Kit',
        desc: 'Comprehensive vector logos, motion graphic templates, and marketing collaterals.',
      },
    ],
    Extend: [
      {
        num: '01',
        title: 'Dedicated Developers',
        desc: 'Embed senior full-stack engineers and UI leads directly into your daily agile sprints.',
      },
      {
        num: '02',
        title: 'Mobile App Porting',
        desc: 'Expand your web platform to Native iOS & Android using React Native.',
      },
      {
        num: '03',
        title: 'Enterprise Integration',
        desc: 'Custom MCP servers, AI agents, and enterprise ERP/CRM data connectors.',
      },
      {
        num: '04',
        title: '24/7 SLA Maintenance',
        desc: 'Proactive server monitoring, automated security patches, and instant bug fixes.',
      },
    ],
  };

  const currentSteps = processSteps[activeTab] || processSteps['Launch'];

  return (
    <section id="process" className="relative py-12 sm:py-28 px-4 sm:px-8 bg-white text-slate-950 border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-16 relative z-10">
        
        {/* Header & Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Sticky Sidebar */}
          <ScrollReveal animation="slide-right" className="lg:col-span-4 space-y-6 sm:space-y-8 flex flex-col justify-start">
            <div className="space-y-4 sm:space-y-6">
              <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-slate-500">
                HOW WE WORK • PROCESS
              </span>
              <div className="flex flex-wrap gap-2 lg:flex-col lg:gap-2 lg:space-y-1">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 lg:px-0 lg:py-1 rounded-xl lg:rounded-none text-left font-display font-bold text-base sm:text-3xl shrink-0 transition-all ${
                      activeTab === tab
                        ? 'bg-slate-950 text-white shadow-md lg:shadow-none lg:bg-transparent lg:text-slate-950 lg:translate-x-2'
                        : 'bg-slate-100 text-slate-600 lg:bg-transparent lg:text-slate-400 lg:hover:text-slate-700'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right Main Column */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-10">
            <ScrollReveal animation="fade-up">
              <h2 className="font-display font-extrabold text-2xl sm:text-5xl text-slate-950 tracking-tight leading-tight">
                Launch your product & win early traction
              </h2>
            </ScrollReveal>

            {/* 4 Block Grid */}
            <ScrollReveal animation="scale-up" stagger={true} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 border-t border-slate-200 pt-6 sm:pt-8">
              {currentSteps.map((step, idx) => (
                <div key={idx} className="p-5 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 sm:space-y-4 hover:border-cyan-500 transition-colors">
                  <span className="font-mono text-xs sm:text-sm font-bold text-slate-400">{step.num}</span>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-slate-950">{step.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
