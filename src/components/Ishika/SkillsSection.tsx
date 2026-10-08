'use client';

import React from 'react';
import Container from './Container';
import FadeIn from './FadeIn';

interface SkillGroup {
  label: string;
  skills: string[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    label: 'Cybersecurity',
    skills: [
      'Threat detection',
      'Vulnerability assessment',
      'Penetration testing',
      'SIEM',
      'Network security',
      'Wireshark',
      'Nmap',
      'Autopsy',
      'FTK Imager',
      'ExifTool',
    ],
  },
  {
    label: 'Law and compliance',
    skills: [
      'IT Act 2000',
      'Section 65B evidence',
      'Chain of custody',
      'CrPC Section 91',
    ],
  },
  {
    label: 'Programming and data',
    skills: [
      'Python',
      'Flask',
      'JavaScript',
      'HTML5',
      'CSS3',
      'C',
      'C++',
      'Java',
      'MySQL',
      'Git',
      'GitHub',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Jupyter',
      'VS Code',
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#D7E2EA]/12 py-20 md:py-28"
    >
      <Container className="flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase text-center leading-[0.95] break-words mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 96px)' }}
          >
            Skills and Tools
          </h2>
        </FadeIn>

        <div className="w-full flex flex-col">
          {SKILL_GROUPS.map((group, gIdx) => (
            <FadeIn
              key={group.label}
              delay={gIdx * 0.15}
              y={30}
              className={`w-full ${gIdx > 0 ? 'mt-10' : ''}`}
            >
              <div className="flex flex-col">
                <span className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#D7E2EA]/60">
                  {group.label}
                </span>

                <div className="flex flex-wrap gap-2.5 md:gap-3">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-4 py-2 md:px-5 md:py-2.5 text-sm md:text-base rounded-full border border-[#D7E2EA]/25 text-[#D7E2EA] bg-white/[0.04] font-medium hover:bg-white/[0.08] transition-colors inline-block"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
