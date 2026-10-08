'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';
import Container from './Container';
import FadeIn from './FadeIn';

interface CertItem {
  issuer: string;
  name: string;
  date?: string;
  slug: string;
}

interface CertGroup {
  label: string;
  items: CertItem[];
}

const CERT_GROUPS: CertGroup[] = [
  {
    label: 'Cybersecurity',
    items: [
      {
        issuer: 'Google (Coursera)',
        name: 'Google Cybersecurity Professional Certificate',
        date: '9 Apr 2026',
        slug: 'google-cybersecurity',
      },
      {
        issuer: 'EC-Council',
        name: 'Certified Ethical Hacker (CEH)',
        date: '27 Dec 2025',
        slug: 'ec-council-ceh',
      },
      {
        issuer: 'Deloitte (Forage)',
        name: 'Cyber Job Simulation',
        date: '28 Oct 2025',
        slug: 'deloitte-cyber-simulation',
      },
      {
        issuer: 'EC-Council',
        name: 'Certified Network Defender (CND)',
        slug: 'ec-council-cnd',
      },
      {
        issuer: 'EC-Council',
        name: 'Certified Security Specialist (ECSS v10)',
        slug: 'ec-council-ecss-v10',
      },
      {
        issuer: 'EC-Council',
        name: 'Certified Secure Computer User (CSCU v3)',
        slug: 'ec-council-cscu-v3',
      },
    ],
  },
  {
    label: 'Networking',
    items: [
      {
        issuer: 'Juniper Networks',
        name: 'JNCIA-Junos',
        date: '19 Sep 2026',
        slug: 'juniper-jncia-junos',
      },
    ],
  },
  {
    label: 'Data and AI',
    items: [
      {
        issuer: 'Google Cloud Skills Boost',
        name: 'Introduction to Generative AI Studio',
        date: 'Jan 2026',
        slug: 'google-cloud-generative-ai-studio',
      },
      {
        issuer: 'TATA (Forage)',
        name: 'GenAI Powered Data Analytics',
        date: 'Dec 2025',
        slug: 'tata-genai-data-analytics',
      },
      {
        issuer: 'Deloitte (Forage)',
        name: 'Data Analytics Virtual Experience',
        date: 'Nov 2025',
        slug: 'deloitte-data-analytics-simulation',
      },
      {
        issuer: 'Google (Coursera)',
        name: 'Foundations: Data, Data, Everywhere',
        slug: 'google-foundations-data',
      },
      {
        issuer: 'Cisco',
        name: 'Data Science Essentials with Python',
        slug: 'cisco-data-science-essentials-python',
      },
      {
        issuer: 'Cisco',
        name: 'Introduction to Data Science',
        slug: 'cisco-intro-data-science',
      },
      {
        issuer: 'HackerRank',
        name: 'Python (Basic)',
        slug: 'hackerrank-python-basic',
      },
    ],
  },
];

export default function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#D7E2EA]/12 py-20 md:py-28"
    >
      <Container className="flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase text-center leading-[0.95] break-words mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 96px)' }}
          >
            Certifications
          </h2>
        </FadeIn>

        <div className="w-full flex flex-col">
          {CERT_GROUPS.map((group, gIdx) => (
            <div key={group.label} className="flex flex-col">
              <FadeIn delay={gIdx * 0.1} y={20}>
                <span className="uppercase tracking-widest text-sm text-[#D7E2EA]/60 font-semibold mt-12 mb-4 block">
                  {group.label}
                </span>
              </FadeIn>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((cert, cIdx) => (
                  <FadeIn
                    key={cert.slug}
                    delay={gIdx * 0.1 + cIdx * 0.05}
                    y={30}
                    className="h-full"
                  >
                    <a
                      href={`/certificates/${cert.slug}.webp`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View certificate: ${cert.name}`}
                      className="group relative flex flex-col gap-1.5 min-h-[120px] rounded-3xl bg-white/[0.04] border border-[#D7E2EA]/15 p-5 md:p-6 hover:border-[#D7E2EA]/40 transition-colors duration-200 h-full"
                    >
                      <ExternalLink
                        size={14}
                        className="absolute top-5 right-5 text-[#D7E2EA]/60 group-hover:text-white transition-colors"
                      />

                      <span className="text-xs text-[#D7E2EA]/60 font-medium pr-6">
                        {cert.issuer}
                      </span>
                      <h3 className="text-base font-medium text-[#D7E2EA] group-hover:text-white transition-colors pr-6">
                        {cert.name}
                      </h3>

                      {cert.date && (
                        <span className="mt-auto text-xs text-[#D7E2EA]/60 pt-2">
                          {cert.date}
                        </span>
                      )}
                    </a>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
