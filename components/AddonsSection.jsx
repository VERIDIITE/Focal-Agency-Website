'use client';
import React, { useState } from 'react';
import { Music, Video, BarChart3, Play, Pause, Volume2, Sparkles, Check } from 'lucide-react';

export default function AddonsSection({ onOpenEstimator }) {
  const [playingAudio, setPlayingAudio] = useState(false);

  return (
    <section id="addons" className="relative py-28 px-4 sm:px-8 bg-focal-surface/80 border-t border-white/10">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <span className="px-3.5 py-1.5 rounded-full focal-glass-pill text-xs font-bold text-focal-cyan uppercase tracking-widest border border-focal-cyan/30">
              Exclusive Optional Upgrades
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Data & Premium <span className="text-gradient-focal">Creative Add-Ons</span>
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Elevate your web or mobile app development package with custom audio scoring, motion graphic video production, and deep telemetry integration.
            </p>
          </div>
        </div>

        {/* 2 Primary Creative Add-ons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Add-on 1: Bespoke Music Creation */}
          <div className="p-8 sm:p-10 rounded-3xl focal-glass border border-white/15 relative overflow-hidden flex flex-col justify-between space-y-8 group hover:border-focal-pink/50 transition-all duration-300">
            <div className="glow-orb-pink -bottom-20 -right-20 opacity-40" />

            <div className="space-y-6 z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-focal-pink/20 border border-focal-pink/40 flex items-center justify-center text-focal-pink">
                  <Music className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-focal-pink/20 text-focal-pink border border-focal-pink/30">
                  Audio Upgrade
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  Bespoke Music Creation
                </h3>
                <p className="text-sm font-semibold text-focal-pink">
                  Custom Beats, Soundscapes & Ambient Loops
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Give your web application or product release a signature audio identity. Our in-house music producers engineer original beats, subtle UI audio feedback, and ambient audio loops exclusive to your brand.
              </p>

              {/* Interactive Audio Player Preview Widget */}
              <div className="p-4 rounded-2xl bg-slate-950/80 border border-white/10 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setPlayingAudio(!playingAudio)}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-focal-pink to-focal-purple flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
                  >
                    {playingAudio ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
                  </button>
                  <div>
                    <p className="text-xs font-bold text-white">Focal Audio Identity Demo</p>
                    <p className="text-[10px] text-slate-400 font-mono">Bespoke Synth Loop • 120 BPM</p>
                  </div>
                </div>

                {/* Animated Waveform Visualizer */}
                <div className="flex items-center gap-1 h-8">
                  {[40, 75, 50, 90, 60, 30, 80, 100, 45, 70].map((h, i) => (
                    <div
                      key={i}
                      className={`w-1 rounded-full bg-focal-pink transition-all duration-300 ${
                        playingAudio ? 'animate-pulse' : ''
                      }`}
                      style={{ height: playingAudio ? `${h}%` : '25%' }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between z-10">
              <span className="text-xs font-medium text-slate-400">Available as package upgrade</span>
              <button
                onClick={onOpenEstimator}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Add Custom Music →
              </button>
            </div>
          </div>

          {/* Add-on 2: Professional Video Creation */}
          <div className="p-8 sm:p-10 rounded-3xl focal-glass border border-white/15 relative overflow-hidden flex flex-col justify-between space-y-8 group hover:border-focal-blue/50 transition-all duration-300">
            <div className="glow-orb-blue -top-20 -left-20 opacity-40" />

            <div className="space-y-6 z-10">
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-focal-blue/20 border border-focal-blue/40 flex items-center justify-center text-focal-blue">
                  <Video className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-focal-blue/20 text-focal-blue border border-focal-blue/30">
                  Motion Upgrade
                </span>
              </div>

              <div className="space-y-2">
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                  Professional Video Creation
                </h3>
                <p className="text-sm font-semibold text-focal-blue">
                  3D Motion Graphics & Launch Showreels
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                Transform your software launch into an event. We produce cinematic 3D motion trailers, product feature walkthroughs, and high-impact social media promotional videos.
              </p>

              {/* Motion Graphics Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <Check className="w-4 h-4 text-focal-cyan" />
                  <span className="text-xs font-medium text-slate-200">3D Product Renderings</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <Check className="w-4 h-4 text-focal-cyan" />
                  <span className="text-xs font-medium text-slate-200">60fps App Walkthroughs</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <Check className="w-4 h-4 text-focal-cyan" />
                  <span className="text-xs font-medium text-slate-200">Cinematic Teasers</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2">
                  <Check className="w-4 h-4 text-focal-cyan" />
                  <span className="text-xs font-medium text-slate-200">Social Launch Kits</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between z-10">
              <span className="text-xs font-medium text-slate-400">Available as package upgrade</span>
              <button
                onClick={onOpenEstimator}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
              >
                Add Video Production →
              </button>
            </div>
          </div>

        </div>

        {/* Analytics Setup Spotlight Banner */}
        <div className="p-8 rounded-3xl focal-glass border border-focal-cyan/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-focal-cyan/20 border border-focal-cyan/40 flex items-center justify-center text-focal-cyan shrink-0">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-white">Data Analytics Setup & Telemetry Integration</h4>
              <p className="text-xs text-slate-300">Mixpanel, Google Analytics 4, custom event tracking, and conversion rate optimization built directly into code.</p>
            </div>
          </div>
          <button
            onClick={onOpenEstimator}
            className="px-6 py-3 rounded-full bg-focal-cyan/20 hover:bg-focal-cyan/30 text-focal-cyan font-bold text-xs border border-focal-cyan/30 transition-colors shrink-0"
          >
            Include Analytics →
          </button>
        </div>

      </div>
    </section>
  );
}
