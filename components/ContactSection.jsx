'use client';
import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react';
import Metallic3DModel from './Metallic3DModel';

export default function ContactSection({ onOpenEstimator }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-8 bg-[#07090e] text-white border-t border-white/10 overflow-hidden">
      {/* Side Metallic 3D Chrome Model */}
      <Metallic3DModel modelType="icosahedron" size={300} position="right" className="hidden lg:block opacity-40" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-400">
              GET IN TOUCH • SERVED BY FOCAL
            </span>
          </div>
          <h2 className="font-display font-extrabold text-4xl sm:text-6xl tracking-tight text-white">
            Contact Us
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed">
            Have a new product, custom platform, or engineering initiative in mind? Reach out to our leadership team directly or schedule a technical discovery call.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10 space-y-6 backdrop-blur-md">
              <h3 className="font-display font-bold text-xl text-white">Direct Communication</h3>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                You will speak directly with Focal Studio engineering leads and product architects — no account managers or sales intermediaries.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-500 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Email Us</h4>
                    <a href="mailto:hello@focalstudio.agency" className="text-sm font-semibold text-white hover:text-orange-500 transition-colors">
                      hello@focalstudio.agency
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">HQ & Global Reach</h4>
                    <p className="text-sm font-semibold text-white">
                      London HQ & Global Remote Team
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Response SLA</h4>
                    <p className="text-sm font-semibold text-white">
                      Within 12–24 Hours Guaranteed
                    </p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                  Currently Accepting New Client Engagements
                </span>
              </div>
            </div>

            {/* Quick Estimator CTA Card */}
            <div className="p-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 space-y-3">
              <div className="flex items-center gap-2 text-orange-400">
                <MessageSquare className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Prefer an interactive estimate?</span>
              </div>
              <p className="text-xs text-slate-300">
                Use our step-by-step estimator to configure your scope, budget range, and timeline in under 60 seconds.
              </p>
              <button
                onClick={onOpenEstimator}
                className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider transition-all shadow-md mt-2"
              >
                OPEN PROJECT ESTIMATOR →
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-6">
              <div className="space-y-1">
                <h3 className="font-display font-bold text-2xl text-white">Send Us a Message</h3>
                <p className="text-xs text-slate-400">Fill out the form below and a principal engineer will respond promptly.</p>
              </div>

              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-orange-500/20 border border-orange-500 text-orange-500 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-bold text-2xl text-white">Message Received!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you <span className="font-bold text-white">{formData.name}</span>. We have received your message and will get back to you at <span className="font-bold text-white">{formData.email}</span> shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc. / Startup"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-300">
                      Project Details & Requirements *
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe your project, goals, key tech requirements, or target timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white text-xs focus:outline-none focus:border-orange-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <Send className="w-4 h-4" />
                    <span>SEND MESSAGE TO FOCAL</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
