'use client';

import React from 'react';
import Container from './Container';
import { EMAIL, LINKEDIN_URL, GITHUB_URL } from '@/constants/links';
import FadeIn from './FadeIn';

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#D7E2EA]/12 pt-20 md:pt-28 pb-12"
    >
      <Container className="flex flex-col items-center text-center">
        <FadeIn delay={0} y={20}>
          <span className="text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/60">
            Contact
          </span>
        </FadeIn>

        <FadeIn delay={0.1} y={40} className="w-full mt-4">
          <a
            href={`mailto:${EMAIL}`}
            className="hero-heading font-black uppercase leading-[0.95] break-words block hover:opacity-80 transition-opacity"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 120px)' }}
          >
            Get in touch.
          </a>
        </FadeIn>

        <FadeIn delay={0.2} y={20} className="mt-6">
          <p className="text-[#D7E2EA]/80 font-light text-base md:text-lg max-w-xl mx-auto">
            Available for collaboration and projects across security, data, and software development.
          </p>
        </FadeIn>

        <FadeIn delay={0.3} y={20} className="w-full mt-10">
          <div className="flex justify-center gap-8 text-sm md:text-base uppercase tracking-wider font-medium text-[#D7E2EA]">
            <a
              href={`mailto:${EMAIL}`}
              className="hover:opacity-70 transition-opacity"
            >
              Email
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity"
            >
              GitHub
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} y={10} className="pt-16 pb-8">
          <p className="text-xs md:text-sm text-[#D7E2EA]/40">
            © 2026 Ishika Jaiswal
          </p>
        </FadeIn>
      </Container>
    </footer>
  );
}
