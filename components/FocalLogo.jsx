'use client';
import React from 'react';

export default function FocalLogo({ variant = 'default', className = '', showTagline = false }) {
  if (variant === 'mark-only') {
    return (
      <div className={`flex items-center gap-2.5 ${className}`}>
        <div className="relative px-3.5 py-1.5 rounded-full bg-gradient-to-r from-focal-pink via-focal-purple to-focal-blue shadow-lg shadow-focal-pink/20 flex items-center justify-center">
          <span className="font-display font-extrabold text-white text-lg tracking-tight">Focal</span>
        </div>
      </div>
    );
  }

  if (variant === 'hero-graphic') {
    return (
      <div className={`relative flex flex-col items-center justify-center p-8 ${className}`}>
        {/* 3D Torus rings representation matching Focal Studio identity */}
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
          {/* Top Torus Ring */}
          <div className="absolute -top-10 left-4 w-44 h-44 rounded-full border-[28px] border-transparent bg-origin-border bg-clip-content bg-gradient-to-tr from-cyan-400 via-teal-300 to-amber-300 opacity-90 blur-[1px] transform -rotate-12 shadow-2xl animate-float" style={{ animationDelay: '0s' }} />
          
          {/* Main Focal Pill */}
          <div className="relative z-20 px-8 py-4 sm:px-12 sm:py-6 rounded-full bg-gradient-to-r from-focal-pink via-focal-purple to-focal-blue shadow-2xl shadow-focal-purple/40 border border-white/20 transform hover:scale-105 transition-transform duration-300">
            <span className="font-display font-extrabold text-white text-3xl sm:text-5xl tracking-tight">Focal</span>
          </div>

          {/* Studio Text next to or below pill */}
          <div className="absolute z-20 top-1/2 -right-8 sm:-right-16 transform -translate-y-1/2">
            <span className="font-display font-bold text-focal-blue dark:text-blue-400 text-3xl sm:text-5xl tracking-tight">Studio</span>
          </div>

          {/* Bottom Torus Ring */}
          <div className="absolute -bottom-8 -left-6 w-52 h-52 rounded-full border-[32px] border-transparent bg-origin-border bg-clip-content bg-gradient-to-br from-focal-purple via-focal-blue to-cyan-400 opacity-85 blur-[1px] transform rotate-45 shadow-2xl animate-float" style={{ animationDelay: '2s' }} />

          {/* Right Bottom Torus Ring */}
          <div className="absolute -bottom-10 right-0 w-48 h-48 rounded-full border-[28px] border-transparent bg-origin-border bg-clip-content bg-gradient-to-tr from-focal-blue via-teal-400 to-emerald-300 opacity-80 blur-[1px] transform -rotate-30 shadow-2xl animate-float" style={{ animationDelay: '4s' }} />
        </div>
        {showTagline && (
          <p className="mt-4 font-display text-sm tracking-widest uppercase font-semibold text-focal-blue/80 dark:text-blue-300/80">
            Your Vision, Built First
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Signature Pill Logo */}
      <div className="relative px-3.5 py-1.5 rounded-full bg-gradient-to-r from-focal-pink via-focal-purple to-focal-blue shadow-md shadow-focal-pink/20 flex items-center justify-center border border-white/20">
        <span className="font-display font-extrabold text-white text-base sm:text-lg tracking-tight">Focal</span>
      </div>

      <div className="flex flex-col">
        <span className="font-display font-bold text-blue-600 dark:text-blue-400 text-base sm:text-xl tracking-tight leading-none">
          Studio
        </span>
        {showTagline && (
          <span className="text-[10px] tracking-wider uppercase font-semibold text-slate-500 dark:text-slate-400 leading-tight mt-0.5">
            Your Vision, Built First
          </span>
        )}
      </div>
    </div>
  );
}
