'use client';
import React, { useState } from 'react';
import { X, Check, ArrowRight, DollarSign, Clock, Send, ShieldCheck, Mail, Building2, User, Sparkles, Layers } from 'lucide-react';
import FocalLogo from './FocalLogo';

export default function ProjectEstimatorModal({ isOpen, onClose, initialService = '' }) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [selectedServices, setSelectedServices] = useState(
    initialService ? [initialService] : ['Web development & Web apps']
  );
  const [budget, setBudget] = useState('$25,000 – $50,000');
  const [timeline, setTimeline] = useState('4 – 6 Weeks (Standard Launch)');
  const [engagementType, setEngagementType] = useState('Project-Based Scope');

  const [contact, setContact] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    details: '',
  });

  if (!isOpen) return null;

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const serviceCategories = [
    {
      category: 'Software & Web',
      options: [
        'Custom Software & Microservices',
        'Web development & Web apps',
        'Mobile app development (iOS & Android)',
        'E-commerce & Headless Storefronts',
        'Dedicated Developer Teams',
      ]
    },
    {
      category: 'Design & Product',
      options: [
        'UI/UX Design Systems (Desktop & Mobile)',
        'Branding, Logo & Visual Identity',
        'Concept Prototypes & Landing Pages',
      ]
    },
    {
      category: 'Startups & AI',
      options: [
        'MVP Development (4-Week Sprint)',
        'Fractional CTO Advisory',
        'Custom MCP Servers & AI Agents',
        'DevOps & Infrastructure Audit',
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-2xl flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto my-auto rounded-2xl sm:rounded-3xl bg-[#090b10] border border-white/15 p-5 sm:p-10 shadow-2xl shadow-black/90 space-y-6 sm:space-y-8 animate-in fade-in zoom-in-95 duration-200 text-white">
        
        {/* Top Header Bar */}
        <div className="flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <FocalLogo showTagline={false} />
            <span className="hidden sm:inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 border-l border-white/15 pl-3">
              Get In Touch • Served by Focal Leads
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-all border border-white/10 hover:border-white/20"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {submitted ? (
          /* Professional Executive Confirmation View */
          <div className="py-8 space-y-8 animate-in fade-in duration-300">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 mx-auto flex items-center justify-center shadow-xl shadow-cyan-500/10">
                <Check className="w-10 h-10 stroke-[2.5]" />
              </div>
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-emerald-400">
                  INQUIRY SUCCESSFULLY DELIVERED
                </span>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white">
                  Thank You, {contact.name || 'Partner'}
                </h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto font-sans leading-relaxed">
                  Your project inquiry has been assigned to a Focal Studio principal engineer. We will review your brief and reply within <strong className="text-white">12–24 hours</strong>.
                </p>
              </div>
            </div>

            {/* Configured Summary Brief */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 text-xs font-sans">
              <h4 className="font-mono font-bold uppercase tracking-wider text-slate-400 text-[11px]">Configured Scope Summary</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div>
                  <span className="text-slate-500 block text-[11px] font-mono">SELECTED SERVICES</span>
                  <p className="font-bold text-white mt-0.5">{selectedServices.join(', ')}</p>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] font-mono">ESTIMATED INVESTMENT</span>
                  <p className="font-bold text-cyan-400 mt-0.5">{budget}</p>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] font-mono">TARGET TIMELINE</span>
                  <p className="font-bold text-white mt-0.5">{timeline}</p>
                </div>
                <div>
                  <span className="text-slate-500 block text-[11px] font-mono">CONTACT EMAIL</span>
                  <p className="font-bold text-white mt-0.5">{contact.email}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Protected under Focal Studio Executive NDA</span>
              </div>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider transition-all shadow-lg shadow-cyan-500/25"
              >
                Return to Website
              </button>
            </div>
          </div>
        ) : (
          /* Multi-Step Intake Form */
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Step Navigation Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs font-mono font-bold">
              <button
                type="button"
                onClick={() => setStep(1)}
                className={`flex items-center gap-2 transition-colors pb-1 border-b-2 ${
                  step === 1 ? 'border-cyan-400 text-white' : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="px-2 py-0.5 rounded bg-white/5 text-[11px]">01</span>
                <span>Capabilities</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(2)}
                className={`flex items-center gap-2 transition-colors pb-1 border-b-2 ${
                  step === 2 ? 'border-cyan-400 text-white' : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="px-2 py-0.5 rounded bg-white/5 text-[11px]">02</span>
                <span>Scope & Budget</span>
              </button>

              <button
                type="button"
                onClick={() => setStep(3)}
                className={`flex items-center gap-2 transition-colors pb-1 border-b-2 ${
                  step === 3 ? 'border-cyan-400 text-white' : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                <span className="px-2 py-0.5 rounded bg-white/5 text-[11px]">03</span>
                <span>Contact Details</span>
              </button>
            </div>

            {/* STEP 1: Select Capabilities */}
            {step === 1 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    STEP 01 OF 03
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    What capabilities does your project require?
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    Select all services that apply to your engagement. Served directly by Focal Studio leads.
                  </p>
                </div>

                <div className="space-y-5 max-h-80 overflow-y-auto pr-1">
                  {serviceCategories.map((cat, cIdx) => (
                    <div key={cIdx} className="space-y-2">
                      <h4 className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{cat.category}</span>
                      </h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {cat.options.map((srv, sIdx) => {
                          const isSelected = selectedServices.includes(srv);
                          return (
                            <button
                              type="button"
                              key={sIdx}
                              onClick={() => toggleService(srv)}
                              className={`p-3.5 rounded-xl text-left text-xs font-semibold transition-all flex items-center justify-between border ${
                                isSelected
                                  ? 'bg-cyan-500/15 border-cyan-500 text-white shadow-md shadow-cyan-500/10'
                                  : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/25 hover:bg-white/10'
                              }`}
                            >
                              <span>{srv}</span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                                isSelected ? 'border-cyan-400 bg-cyan-500 text-slate-950' : 'border-white/20'
                              }`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-xs font-mono text-slate-400">
                    Selected: <strong className="text-white">{selectedServices.length} service(s)</strong>
                  </span>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
                  >
                    <span>NEXT: BUDGET & SCOPE</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: Budget & Timeline */}
            {step === 2 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    STEP 02 OF 03
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Estimated Budget & Target Timeline
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    Helps Focal Studio structure resource allocation and team velocity.
                  </p>
                </div>

                {/* Budget Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-cyan-400" /> Investment Bracket
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { range: '$10,000 – $25,000', label: 'Starter / MVP Scope' },
                      { range: '$25,000 – $50,000', label: 'Full Product Platform' },
                      { range: '$50,000+ Enterprise', label: 'Custom Architecture' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.range}
                        onClick={() => setBudget(item.range)}
                        className={`p-4 rounded-xl text-left border transition-all space-y-1 ${
                          budget === item.range
                            ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <span className="block font-extrabold text-sm text-white">{item.range}</span>
                        <span className="block text-[11px] text-slate-400 font-sans">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Timeline Selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-cyan-400" /> Preferred Delivery Window
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { time: '2 – 4 Weeks (Urgent)', label: 'Rapid Sprint' },
                      { time: '4 – 6 Weeks (Standard Launch)', label: 'Recommended' },
                      { time: '8+ Weeks (Comprehensive)', label: 'Multi-Phase Scope' },
                    ].map((item) => (
                      <button
                        type="button"
                        key={item.time}
                        onClick={() => setTimeline(item.time)}
                        className={`p-4 rounded-xl text-left border transition-all space-y-1 ${
                          timeline === item.time
                            ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-md'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        <span className="block font-extrabold text-sm text-white">{item.time}</span>
                        <span className="block text-[11px] text-slate-400 font-sans">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Engagement Model */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-cyan-400" /> Engagement Format
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Project-Based Scope', 'Dedicated Sprint Team', 'Fractional CTO Advisory'].map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setEngagementType(type)}
                        className={`py-3 px-2 rounded-xl text-[11px] font-bold text-center border transition-all ${
                          engagementType === type
                            ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                            : 'bg-white/5 border-white/10 text-slate-300 hover:border-white/20'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    BACK
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02]"
                  >
                    <span>NEXT: CONTACT DETAILS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Contact Details */}
            {step === 3 && (
              <div className="space-y-6 animate-in fade-in duration-200">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400">
                    STEP 03 OF 03
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Direct Client Contact Information
                  </h3>
                  <p className="text-xs text-slate-400 font-sans">
                    A principal engineer from Focal Studio will reach out to discuss your brief directly.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-cyan-400" /> Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Wright"
                      value={contact.name}
                      onChange={(e) => setContact({ ...contact, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-cyan-400" /> Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={contact.email}
                      onChange={(e) => setContact({ ...contact, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Building2 className="w-3.5 h-3.5 text-slate-400" /> Company / Project Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Stealth AI / Fintech Platform"
                      value={contact.company}
                      onChange={(e) => setContact({ ...contact, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={contact.phone}
                      onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors font-sans"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                    Project Goals & Requirements Brief
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your core objective, key technical requirements, or target launch timeline..."
                    value={contact.details}
                    onChange={(e) => setContact({ ...contact, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors font-sans resize-none"
                  />
                </div>

                {/* Confidentiality Assurance */}
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All submitted project details are protected under Focal Studio Non-Disclosure Agreement (NDA).</span>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/10">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 font-bold text-xs uppercase tracking-wider transition-colors"
                  >
                    BACK
                  </button>
                  <button
                    type="submit"
                    className="px-8 py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-cyan-500/25 transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT INQUIRY TO FOCAL</span>
                  </button>
                </div>
              </div>
            )}

          </form>
        )}

      </div>
    </div>
  );
}
