'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollReveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 0.8,
  stagger = false,
  className = '',
  threshold = 0.15,
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    let fromState = { opacity: 0, y: 50 };

    if (animation === 'fade-up') fromState = { opacity: 0, y: 50 };
    if (animation === 'fade-in') fromState = { opacity: 0, y: 0 };
    if (animation === 'scale-up') fromState = { opacity: 0, scale: 0.94, y: 35 };
    if (animation === 'slide-right') fromState = { opacity: 0, x: -50 };
    if (animation === 'slide-left') fromState = { opacity: 0, x: 50 };

    const targets = stagger && el.children.length > 0 ? el.children : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        fromState,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: duration,
          delay: delay,
          stagger: stagger ? 0.12 : 0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: `top ${100 - threshold * 100}%`,
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [animation, delay, duration, stagger, threshold]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
