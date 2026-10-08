'use client';

import React from 'react';
import Container from './Container';
import FadeIn from './FadeIn';

interface Entry {
  date: string;
  title: string;
  organization: string;
  description: string;
  links?: { label: string; href: string }[];
}

const ENTRIES: Entry[] = [
  {
    date: 'Sep 2024 - Oct 2024',
    title: 'AI/ML Intern',
    organization: 'Corizo Edutech Pvt. Ltd., Remote',
    description:
      'Developed machine learning and data modeling workflows in Python, from exploratory analysis and feature engineering through model training, and presented results as decision-ready outputs.',
    links: [
      {
        label: 'Internship certificate',
        href: '/certificates/corizo-internship.webp',
      },
      {
        label: 'Training certificate',
        href: '/certificates/corizo-training.webp',
      },
    ],
  },
  {
    date: '2023 - 2027',
    title: 'B.Tech CSE (Cybersecurity)',
    organization: 'JECRC University, Jaipur',
    description: 'CGPA 8.55.',
  },
  {
    date: '2023',
    title: 'Senior Secondary',
    organization: 'Orion International School, Bhopal',
    description: 'Scored 81%.',
  },
];

export default function ExperienceEducationSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#D7E2EA]/12 py-20 md:py-28"
    >
      <Container className="max-w-5xl flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase text-center leading-[0.95] break-words mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 96px)' }}
          >
            Experience and Education
          </h2>
        </FadeIn>

        <div className="w-full flex flex-col">
          {ENTRIES.map((entry, index) => (
            <FadeIn key={index} delay={index * 0.15} y={30} className="w-full">
              <div className="w-full py-8 border-t border-[#D7E2EA]/12 grid grid-cols-[96px_1fr] md:grid-cols-[200px_1fr] gap-4 md:gap-8 items-start">
                {/* Fixed width Date column */}
                <div className="w-[96px] md:w-[200px] shrink-0">
                  <span className="text-base md:text-lg font-medium text-[#D7E2EA]/60">
                    {entry.date}
                  </span>
                </div>

                {/* Content Column */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-3xl font-medium uppercase text-[#D7E2EA]">
                    {entry.title}
                  </h3>
                  <span className="text-base md:text-lg font-normal text-[#D7E2EA]/80">
                    {entry.organization}
                  </span>
                  <p className="mt-2 text-sm md:text-base font-light text-[#D7E2EA]/60 leading-relaxed">
                    {entry.description}
                  </p>

                  {entry.links && (
                    <div className="flex gap-6 mt-4 flex-wrap">
                      {entry.links.map((link, lIdx) => (
                        <a
                          key={lIdx}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm md:text-base font-medium text-[#D7E2EA] underline hover:opacity-70 transition-opacity"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
          <div className="border-b border-[#D7E2EA]/12 w-full" />
        </div>
      </Container>
    </section>
  );
}
