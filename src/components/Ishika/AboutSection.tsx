'use client';

import React from 'react';
import { ShieldCheck, Network, Fingerprint, Search } from 'lucide-react';
import Container from './Container';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-[#0C0C0C] border-t border-[#D7E2EA]/12 py-20 md:py-28 overflow-hidden"
    >
      {/* Corner Decorative Tiles */}
      {/* Top-Left: ShieldCheck (shrunk to 72px on mobile, full size on md+) */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[2%] sm:left-[4%] z-0"
      >
        <div className="w-[72px] h-[72px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] rounded-3xl bg-white/[0.04] border border-[#D7E2EA]/15 flex items-center justify-center">
          <ShieldCheck
            className="w-[55%] h-[55%] text-[#BBCCD7]"
            strokeWidth={1.25}
          />
        </div>
      </FadeIn>

      {/* Top-Right: Fingerprint (shrunk to 72px on mobile, full size on md+) */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[2%] sm:right-[4%] z-0"
      >
        <div className="w-[72px] h-[72px] sm:w-[130px] sm:h-[130px] md:w-[180px] md:h-[180px] rounded-3xl bg-white/[0.04] border border-[#D7E2EA]/15 flex items-center justify-center">
          <Fingerprint
            className="w-[55%] h-[55%] text-[#BBCCD7]"
            strokeWidth={1.25}
          />
        </div>
      </FadeIn>

      {/* Bottom-Left: Network (hidden on screens under 768px) */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="hidden md:block absolute bottom-[8%] left-[5%] z-0"
      >
        <div className="w-[160px] h-[160px] rounded-3xl bg-white/[0.04] border border-[#D7E2EA]/15 flex items-center justify-center">
          <Network
            className="w-[55%] h-[55%] text-[#BBCCD7]"
            strokeWidth={1.25}
          />
        </div>
      </FadeIn>

      {/* Bottom-Right: Search (hidden on screens under 768px) */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="hidden md:block absolute bottom-[8%] right-[5%] z-0"
      >
        <div className="w-[170px] h-[170px] rounded-3xl bg-white/[0.04] border border-[#D7E2EA]/15 flex items-center justify-center">
          <Search
            className="w-[55%] h-[55%] text-[#BBCCD7]"
            strokeWidth={1.25}
          />
        </div>
      </FadeIn>

      {/* Center Content */}
      <Container className="relative z-10 flex flex-col items-center text-center">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase text-center leading-[0.95] break-words mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 96px)' }}
          >
            About
          </h2>
        </FadeIn>

        <div className="flex flex-col items-center gap-12 md:gap-16 w-full">
          <AnimatedText
            text="B.Tech CSE (Cybersecurity) student at JECRC University, Jaipur, graduating in 2027. Builds security tools, forensic casework, machine learning applications, and automation projects in Python, taking ideas through to deployed web applications."
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] px-5"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />

          <FadeIn delay={0.4} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
