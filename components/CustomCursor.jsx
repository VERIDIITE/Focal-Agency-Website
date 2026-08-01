'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    // Enable custom cursor on desktop devices (non-touch)
    if (typeof window === 'undefined' || window.innerWidth < 768) return;

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMouseMove = (e) => {
      const { clientX: x, clientY: y } = e;
      
      // Precision central dot
      gsap.to(cursor, {
        x: x - 4,
        y: y - 4,
        duration: 0.08,
        ease: 'power2.out',
      });

      // Smooth trailing ring
      gsap.to(follower, {
        x: x - 18,
        y: y - 18,
        duration: 0.3,
        ease: 'power3.out',
      });
    };

    const onMouseDown = () => {
      gsap.to(cursor, { scale: 0.6, duration: 0.1 });
      gsap.to(follower, { scale: 0.8, duration: 0.1 });
    };

    const onMouseUp = () => {
      gsap.to(cursor, { scale: 1, duration: 0.15 });
      gsap.to(follower, { scale: 1, duration: 0.15 });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Dynamic Event Delegation for clean hover state across all interactive elements
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, input, select, textarea, [role="button"], .interactive-hover');
      if (target) {
        gsap.to(follower, { 
          scale: 1.5, 
          backgroundColor: 'rgba(255, 255, 255, 0.12)', 
          borderColor: 'rgba(255, 255, 255, 0.7)', 
          duration: 0.2 
        });
        gsap.to(cursor, { 
          scale: 0.5, 
          backgroundColor: '#ffffff',
          duration: 0.2 
        });
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest('a, button, input, select, textarea, [role="button"], .interactive-hover');
      if (target) {
        gsap.to(follower, { 
          scale: 1, 
          backgroundColor: 'transparent', 
          borderColor: 'rgba(255, 255, 255, 0.35)', 
          duration: 0.2 
        });
        gsap.to(cursor, { 
          scale: 1, 
          backgroundColor: '#ffffff',
          duration: 0.2 
        });
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision White Center Dot */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-white rounded-full shadow-sm"
      />
      {/* Clean Translucent White Outer Ring */}
      <div
        ref={followerRef}
        className="fixed w-9 h-9 border border-white/35 rounded-full transition-colors duration-200"
      />
    </div>
  );
}
