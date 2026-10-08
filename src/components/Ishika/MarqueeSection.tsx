'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

const TOOLS = [
  'Python',
  'Flask',
  'Wireshark',
  'Nmap',
  'Autopsy',
  'FTK Imager',
  'ExifTool',
  'MySQL',
  'Scikit-learn',
  'Pandas',
  'Git',
];

const PROJECTS = [
  'ShieldCheck',
  'HeartSpan',
  'Network Packet Analyzer',
  'Digital Forensics Mini Lab',
  'Operation Shadow-Lure',
  'Jarvis Voice Assistant',
  'Autonomous Chat Agent',
];

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setScrollOffset(offset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [shouldReduceMotion]);

  const row1Transform = shouldReduceMotion
    ? 'none'
    : `translateX(${scrollOffset - 200}px)`;
  const row2Transform = shouldReduceMotion
    ? 'none'
    : `translateX(${-(scrollOffset - 200)}px)`;

  const tripledTools = [...TOOLS, ...TOOLS, ...TOOLS];
  const tripledProjects = [...PROJECTS, ...PROJECTS, ...PROJECTS];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] border-t border-[#D7E2EA]/12 py-20 md:py-28 overflow-hidden"
    >
      <div className="flex flex-col gap-4">
        {/* Row 1: Tools (Moves Right) */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-4 whitespace-nowrap"
            style={{
              transform: row1Transform,
              willChange: shouldReduceMotion ? 'auto' : 'transform',
            }}
          >
            {tripledTools.map((tool, idx) => (
              <div
                key={`tool-${idx}`}
                className="shrink-0 min-w-[220px] px-8 md:px-12 h-[130px] md:h-[190px] rounded-3xl bg-white/[0.04] border border-[#D7E2EA]/15 flex items-center justify-center whitespace-nowrap"
              >
                <span
                  className="hero-heading font-black uppercase text-center"
                  style={{ fontSize: 'clamp(1.25rem, 2.6vw, 2.25rem)' }}
                >
                  {tool}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Projects (Moves Left) */}
        <div className="w-full overflow-hidden">
          <div
            className="flex gap-4 whitespace-nowrap"
            style={{
              transform: row2Transform,
              willChange: shouldReduceMotion ? 'auto' : 'transform',
            }}
          >
            {tripledProjects.map((project, idx) => (
              <div
                key={`project-${idx}`}
                className="shrink-0 min-w-[220px] px-8 md:px-12 h-[130px] md:h-[190px] rounded-3xl bg-white/[0.04] border border-[#D7E2EA]/15 flex items-center justify-center whitespace-nowrap"
              >
                <span
                  className="hero-heading font-black uppercase text-center"
                  style={{ fontSize: 'clamp(1.25rem, 2.6vw, 2.25rem)' }}
                >
                  {project}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
