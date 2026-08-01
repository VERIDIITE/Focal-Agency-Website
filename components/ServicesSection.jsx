'use client';
import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function ServicesSection({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('development');

  const serviceCategories = [
    {
      id: 'development',
      num: '01',
      title: 'Development',
      tag: 'Core Engineering',
      desc: 'Custom enterprise software, high-concurrency web platforms, and native mobile applications served by Focal.',
      services: [
        { name: 'Custom software development solutions', detail: 'Tailored enterprise microservices and scalable database systems.' },
        { name: 'Web development & Web apps', detail: 'High-performance Next.js and React server-side applications.' },
        { name: 'Mobile app development (iOS, Android, React Native)', detail: '60fps native iOS, Android, and cross-platform React Native apps.' },
        { name: 'Dedicated development teams', detail: 'Embed senior full-stack engineers directly into your sprint cycles.' },
      ]
    },
    {
      id: 'design',
      num: '02',
      title: 'Design',
      tag: 'UI/UX & Branding',
      desc: 'Award-winning multi-device UI/UX design, visual identities, and creative web experiences served by Focal.',
      services: [
        { name: 'UI/UX design services (Desktop, Mobile, Tablet)', detail: 'Figma design systems optimized for touch, tablet, and desktop viewports.' },
        { name: 'Graphic design, Logos, and Illustration', detail: 'Custom vector logo suites, visual identities, and 3D brand assets.' },
        { name: 'Strategy and branding', detail: 'Brand positioning, tone of voice, and visual design guidelines.' },
        { name: 'Web design & Creative landing pages', detail: 'High-converting landing pages with subtle motion and micro-interactions.' },
      ]
    },
    {
      id: 'startups',
      num: '03',
      title: 'For Startups',
      tag: '4-Week Launch',
      desc: 'Rapid MVP sprints and fractional CTO advisory for early-stage founders seeking investor traction.',
      services: [
        { name: 'MVP (Minimum Viable Product) development', detail: 'Production-ready code shipped to production in 4 to 6 weeks.' },
        { name: 'Fractional CTO services', detail: 'Strategic tech leadership, pitch deck technical reviews, and hiring roadmaps.' },
        { name: 'Tailored early-stage software & design packages', detail: 'Milestone-based terms combining brand design and full-stack code.' },
        { name: 'Investor Demo & Prototype Site', detail: 'Interactive high-fidelity pitch deck demos and visual prototypes.' },
      ]
    },
    {
      id: 'ai-devops',
      num: '04',
      title: 'AI & DevOps',
      tag: 'Next-Gen Tech',
      desc: 'Custom AI agent integrations, Model Context Protocol (MCP) servers, and automated CI/CD pipelines.',
      services: [
        { name: 'Custom MCP servers & AI agent development', detail: 'Context-aware AI tools and microservices tailored to your workflow.' },
        { name: 'DevOps & Cloud Infrastructure audit', detail: 'Kubernetes, AWS, and GCP deployment pipelines for sub-millisecond uptime.' },
        { name: 'Analytics & Funnel integration', detail: 'Mixpanel, GA4, and custom conversion telemetry tracking.' },
        { name: 'CI/CD Pipeline & Automated Deployment', detail: 'Zero-downtime deployment pipelines and container security audits.' },
      ]
    }
  ];

  const currentCategory = serviceCategories.find((c) => c.id === activeTab) || serviceCategories[0];

  return (
    <section id="services" className="relative py-28 px-4 sm:px-8 bg-[#07090e] text-white border-t border-white/10 overflow-hidden">
      {/* Background Cyan Ambient Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Header */}
        <ScrollReveal animation="fade-up" className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
            AGENCY CAPABILITIES • SERVED BY FOCAL
          </span>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-white">
            Capabilities & Services
          </h2>
        </ScrollReveal>

        {/* Minimalist Professional Horizontal Tab Switcher */}
        <ScrollReveal animation="fade-in" className="grid grid-cols-2 md:grid-cols-4 border-b border-white/10 gap-2">
          {serviceCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`pb-5 text-left transition-all border-b-2 flex flex-col justify-between space-y-2 group ${
                activeTab === cat.id
                  ? 'border-cyan-400 text-white'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              <span className="font-mono text-xs font-bold">{cat.num}</span>
              <span className="font-display font-extrabold text-xl sm:text-2xl group-hover:translate-x-1 transition-transform">
                {cat.title}
              </span>
            </button>
          ))}
        </ScrollReveal>

        {/* Selected Category Content Grid */}
        <div className="space-y-8 animate-in fade-in duration-300">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
              {currentCategory.tag}
            </span>
            <p className="text-sm text-slate-300 leading-relaxed font-sans pt-1">
              {currentCategory.desc}
            </p>
          </div>

          {/* Clean Minimalist Services List */}
          <ScrollReveal animation="scale-up" stagger={true} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentCategory.services.map((srv, idx) => (
              <div
                key={idx}
                onClick={() => onSelectService(srv.name)}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-cyan-500/50 hover:bg-white/10 transition-all cursor-pointer group flex flex-col justify-between space-y-4 backdrop-blur-md"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-slate-500">{(idx + 1).toString().padStart(2, '0')}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white group-hover:text-cyan-400 transition-colors">
                    {srv.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {srv.detail}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-slate-400 group-hover:text-white">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Served by Focal Engineering</span>
                </div>
              </div>
            ))}
          </ScrollReveal>
        </div>

        {/* Bottom Banner */}
        <ScrollReveal animation="fade-up">
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
            <div className="space-y-1">
              <h4 className="font-display font-bold text-xl text-white">Require a custom enterprise scope or multi-service bundle?</h4>
              <p className="text-xs text-slate-400">Our engineering leads at Focal Studio will structure a tailored engagement.</p>
            </div>
            <button
              onClick={() => onSelectService('Dedicated Engineering Team')}
              className="px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-lg shrink-0"
            >
              LET'S TALK →
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
