'use client';

import React from 'react';
import Container from './Container';
import FadeIn from './FadeIn';

interface Achievement {
  date: string;
  title: string;
  description: string;
}

const ACHIEVEMENTS: Achievement[] = [
  {
    date: 'Nov 2025',
    title: 'TATA Teleport participant',
    description: 'Digital innovation challenges.',
  },
  {
    date: 'Sep 2025',
    title: 'Smart India Hackathon (SIH) participant',
    description: 'National-level prototype development.',
  },
  {
    date: 'Jul 2024',
    title: 'NSS volunteer',
    description: 'Community service initiatives.',
  },
  {
    date: 'Feb 2024',
    title: 'OC member, College MUN Society',
    description: 'Organizing committee member for campus Model UN events.',
  },
];

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#D7E2EA]/12 pt-20 md:pt-28 pb-24"
    >
      <Container className="flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase text-center leading-[0.95] break-words mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 96px)' }}
          >
            Achievements
          </h2>
        </FadeIn>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {ACHIEVEMENTS.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} y={30} className="h-full">
              <div className="h-full rounded-3xl bg-white/[0.04] border border-[#D7E2EA]/15 p-6 flex flex-col justify-between gap-4">
                <span className="text-xs md:text-sm text-[#D7E2EA]/60 font-medium">
                  {item.date}
                </span>

                <div className="flex flex-col gap-2">
                  <h3 className="text-lg md:text-xl font-medium text-[#D7E2EA]">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base font-light text-[#D7E2EA]/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
