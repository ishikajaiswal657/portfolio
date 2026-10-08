'use client';

import React from 'react';
import Image from 'next/image';
import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col justify-start overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full z-30">
        <nav className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a
            href="#about"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            About
          </a>
          <a
            href="#contribute"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Contribute
          </a>
          <a
            href="#projects"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* Hero Heading (Moved up directly under navbar, mt-0 sm:mt-0 md:-mt-2, z-0 behind portrait) */}
      <div className="w-full overflow-hidden text-center relative z-0 mt-0 sm:mt-0 md:-mt-2">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11vw] sm:text-[11.5vw] md:text-[12vw] lg:text-[13vw]">
            Hi, i&apos;m ishika
          </h1>
        </FadeIn>
      </div>

      {/* 3D Character Portrait (Anchored to bottom-0 on ALL screens, z-10, h-[66vh] sm:h-[70vh] md:h-[74vh] lg:h-[74vh]) */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={5}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
        >
          <div
            className="relative h-[66vh] sm:h-[70vh] md:h-[74vh] lg:h-[74vh] w-auto max-w-[92vw] aspect-[3/4] bg-transparent"
            style={{
              maskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, #000 82%, transparent 100%)',
            }}
          >
            <Image
              src="/ishika-3d.png"
              alt="3D character of Ishika Jaiswal"
              fill
              priority
              sizes="100vh"
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </Magnet>
      </FadeIn>

      {/* Bottom Bar (Absolute bottom-0, pb-7 sm:pb-8 md:pb-10, z-20 above portrait) */}
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            a developer and cybersecurity student building secure, data-driven tools
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
