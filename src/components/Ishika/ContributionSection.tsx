'use client';

import React from 'react';
import Container from './Container';
import FadeIn from './FadeIn';

interface ContributionItem {
  num: string;
  name: string;
  description: string;
  projects: { label: string; href: string }[];
}

const CONTRIBUTIONS: ContributionItem[] = [
  {
    num: '01',
    name: 'Security Tooling and Threat Analysis',
    description:
      'Tools that inspect URLs, emails, and network traffic and flag suspicious behavior, built in Python.',
    projects: [
      { label: 'ShieldCheck', href: '#projects' },
      { label: 'Network Packet Analyzer', href: '#projects' },
    ],
  },
  {
    num: '02',
    name: 'Digital Forensics and Documentation',
    description:
      'Disk imaging, artifact recovery, and case documentation, supported by working knowledge of the IT Act 2000, Section 65B, and chain of custody.',
    projects: [
      { label: 'Digital Forensics Mini Lab', href: '#projects' },
      { label: 'Operation Shadow-Lure', href: '#projects' },
    ],
  },
  {
    num: '03',
    name: 'Machine Learning and Data Analysis',
    description:
      'Data preparation, exploratory analysis, feature engineering, and model training, presented as clear outputs.',
    projects: [
      { label: 'HeartSpan', href: '#projects' },
      { label: 'Corizo Edutech internship', href: '#experience' },
    ],
  },
  {
    num: '04',
    name: 'Automation and AI Assistants',
    description:
      'Voice and chat assistants that combine speech pipelines, GPT-3.5, and desktop automation.',
    projects: [
      { label: 'Jarvis Voice Assistant', href: '#projects' },
      { label: 'Autonomous Chat Agent', href: '#projects' },
    ],
  },
  {
    num: '05',
    name: 'Web Application Development',
    description:
      'Flask applications built and deployed for security scanning and health risk screening.',
    projects: [
      { label: 'ShieldCheck', href: '#projects' },
      { label: 'HeartSpan', href: '#projects' },
    ],
  },
];

export default function ContributionSection() {
  return (
    <section
      id="contribute"
      className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#D7E2EA]/12 py-20 md:py-28"
    >
      <Container className="max-w-5xl flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase text-center leading-[0.95] break-words mb-4"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 96px)' }}
          >
            Areas of Contribution
          </h2>
        </FadeIn>

        <FadeIn delay={0.1} y={20}>
          <p className="text-[#D7E2EA]/60 font-light text-center text-sm sm:text-base md:text-lg mb-10">
            Each area is backed by projects shown below.
          </p>
        </FadeIn>

        <div className="w-full flex flex-col">
          {CONTRIBUTIONS.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.1} y={30} className="w-full">
              <div className="w-full py-8 md:py-12 border-t border-[#D7E2EA]/12 grid grid-cols-[64px_1fr] md:grid-cols-[150px_1fr] gap-4 md:gap-8 items-start">
                {/* Fixed width Number column */}
                <div className="w-[64px] md:w-[150px] shrink-0">
                  <span
                    className="font-black hero-heading leading-none block"
                    style={{ fontSize: 'clamp(2.25rem, 7vw, 88px)' }}
                  >
                    {item.num}
                  </span>
                </div>

                {/* Stacked Content */}
                <div className="flex flex-col">
                  <h3
                    className="font-medium uppercase text-[#D7E2EA]"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {item.name}
                  </h3>
                  <p
                    className="mt-3 font-light text-[#D7E2EA]/60 leading-relaxed max-w-2xl"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {item.description}
                  </p>

                  <div className="mt-4 text-sm md:text-base font-medium text-[#D7E2EA]">
                    <span className="text-[#D7E2EA]/60">Seen in: </span>
                    {item.projects.map((proj, pIdx) => (
                      <React.Fragment key={pIdx}>
                        <a
                          href={proj.href}
                          className="underline hover:opacity-70 transition-opacity"
                        >
                          {proj.label}
                        </a>
                        {pIdx < item.projects.length - 1 && ', '}
                      </React.Fragment>
                    ))}
                  </div>
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
