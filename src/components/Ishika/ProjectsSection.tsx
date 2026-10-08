'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Container from './Container';
import {
  SHIELDCHECK_LIVE_URL,
  HEARTSPAN_LIVE_URL,
  GITHUB_URL,
} from '@/constants/links';
import LiveProjectButton from './LiveProjectButton';
import FadeIn from './FadeIn';

interface Project {
  num: string;
  name: string;
  categoryDate: string;
  description: string;
  tags: string[];
  image: string;
  buttonLabel: 'Live Project' | 'View on GitHub';
  link: string;
  objectTop?: boolean;
}

const PROJECTS: Project[] = [
  {
    num: '01',
    name: 'ShieldCheck',
    categoryDate: 'Cybersecurity · Jul 2026',
    description:
      'Phishing and email threat scanner. Evaluates URLs and uploaded emails using domain age, SSL status, hosting attributes, and VirusTotal reputation lookups, and returns a risk score.',
    tags: ['Python', 'Flask', 'VirusTotal', 'WHOIS', 'SSL'],
    image: '/projects/shieldcheck.webp',
    buttonLabel: 'Live Project',
    link: SHIELDCHECK_LIVE_URL,
    objectTop: true,
  },
  {
    num: '02',
    name: 'HeartSpan',
    categoryDate: 'Data and ML · Mar 2026',
    description:
      'Cardiovascular risk screening application. A machine learning model takes 13 physiological inputs and returns an explainable risk assessment. Intended as a screening aid, not a diagnostic tool.',
    tags: ['Python', 'Scikit-learn', 'Flask'],
    image: '/projects/heartspan.webp',
    buttonLabel: 'Live Project',
    link: HEARTSPAN_LIVE_URL,
    objectTop: true,
  },
  {
    num: '03',
    name: 'Network Packet Analyzer',
    categoryDate: 'Cybersecurity · Feb 2026',
    description:
      'Network anomaly detection tool. Parses captured traffic with Scapy and flags irregular packets. Object-oriented design allows new detection rules to be added with minimal change.',
    tags: ['Python', 'Scapy', 'OOP'],
    image: '/projects/network-packet-analyzer.webp',
    buttonLabel: 'View on GitHub',
    link: GITHUB_URL,
  },
  {
    num: '04',
    name: 'Digital Forensics Mini Lab: Incident Response and Artifact Recovery',
    categoryDate: 'Cybersecurity · Dec 2025',
    description:
      'Incident response and artifact recovery exercise covering forensic disk imaging, artifact recovery, and structured case documentation.',
    tags: ['Disk imaging', 'Artifact recovery', 'Case documentation'],
    image: '/projects/forensics-mini-lab.webp',
    buttonLabel: 'View on GitHub',
    link: GITHUB_URL,
  },
  {
    num: '05',
    name: 'Cybercrime Case Study: Operation Shadow-Lure (simulated investigation)',
    categoryDate: 'Cybersecurity · Oct 2025',
    description:
      'Simulated cybercrime investigation. Documents the investigative process from initial evidence through to the final report.',
    tags: ['Investigation', 'Evidence handling', 'Reporting'],
    image: '/projects/shadow-lure.webp',
    buttonLabel: 'View on GitHub',
    link: GITHUB_URL,
  },
  {
    num: '06',
    name: 'Jarvis Voice Assistant',
    categoryDate: 'AI and Automation · Jun 2025',
    description:
      'Voice assistant with a complete speech pipeline: speech-to-text input, GPT-3.5 response generation, and text-to-speech output.',
    tags: ['Python', 'GPT-3.5', 'STT', 'TTS'],
    image: '/projects/jarvis.webp',
    buttonLabel: 'View on GitHub',
    link: GITHUB_URL,
  },
  {
    num: '07',
    name: 'Autonomous Chat Agent (Auto Reply Bot)',
    categoryDate: 'AI and Automation · May 2025',
    description:
      'Autonomous chat reply agent. Combines PyAutoGUI desktop automation with a bilingual AI persona to respond to incoming messages without manual input.',
    tags: ['Python', 'PyAutoGUI', 'RPA', 'Agentic AI'],
    image: '/projects/chat-agent.webp',
    buttonLabel: 'View on GitHub',
    link: GITHUB_URL,
  },
];

function ProjectCard({
  project,
  index,
  totalCards,
}: {
  project: Project;
  index: number;
  totalCards: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [imgError, setImgError] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.02;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="w-full mb-8 md:mb-0 md:sticky md:h-[calc(100svh-6rem)] md:min-h-[520px] flex items-center justify-center"
      style={{
        top: `calc(5rem + ${index * 20}px)`,
        zIndex: 10 + index,
      }}
    >
      <motion.div
        style={{
          scale: shouldReduceMotion ? 1 : scale,
        }}
        className="w-full rounded-[28px] md:rounded-[36px] border border-[#D7E2EA]/15 bg-[#0C0C0C] p-5 md:p-8 flex flex-col md:h-full md:max-h-full overflow-hidden shadow-2xl"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-[#D7E2EA]/15 shrink-0">
          <div className="flex items-end gap-3 sm:gap-5 flex-wrap min-w-0">
            <span
              className="font-black hero-heading leading-none shrink-0"
              style={{ fontSize: 'clamp(2.25rem, 6vw, 72px)' }}
            >
              {project.num}
            </span>
            <div className="flex flex-col min-w-0">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                {project.categoryDate}
              </span>
              <h3 className="text-xl md:text-3xl font-medium text-[#D7E2EA] truncate">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="shrink-0 self-start sm:self-auto">
            <LiveProjectButton href={project.link} label={project.buttonLabel} />
          </div>
        </div>

        {/* Desktop Layout (md+) */}
        <div className="hidden md:grid flex-1 min-h-0 grid-cols-[2fr_3fr] gap-4 mt-4">
          {/* Left Column (2 tiles) */}
          <div className="grid grid-rows-2 gap-4 min-h-0">
            {/* Tile 1: What it does */}
            <div className="rounded-[20px] md:rounded-[24px] border border-[#D7E2EA]/15 bg-white/[0.04] p-5 md:p-6 overflow-y-auto flex flex-col justify-start">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium mb-2 block">
                What it does
              </span>
              <p className="text-sm md:text-base text-[#D7E2EA] font-light leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tile 2: Built with */}
            <div className="rounded-[20px] md:rounded-[24px] border border-[#D7E2EA]/15 bg-white/[0.04] p-5 md:p-6 overflow-y-auto flex flex-col justify-start">
              <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium mb-2 block">
                Built with
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="rounded-full border border-[#D7E2EA]/25 px-4 py-1.5 text-xs sm:text-sm text-[#D7E2EA] font-medium bg-white/[0.04]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Image fills column height) */}
          <div className="h-full w-full rounded-[20px] md:rounded-[28px] overflow-hidden relative border border-[#D7E2EA]/15 bg-white/[0.04] flex items-center justify-center">
            {!imgError ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className={`w-full h-full object-cover rounded-[20px] md:rounded-[28px] ${
                  project.objectTop ? 'object-top' : 'object-center'
                }`}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full p-8 flex items-center justify-center text-center">
                <span className="hero-heading font-black uppercase text-xl md:text-3xl">
                  {project.name}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Layout (< md) */}
        <div className="flex md:hidden flex-col gap-4 mt-4">
          {/* Image first */}
          <div className="w-full aspect-[16/10] rounded-[20px] overflow-hidden relative border border-[#D7E2EA]/15 bg-white/[0.04] flex items-center justify-center">
            {!imgError ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="100vw"
                className={`w-full h-full object-cover rounded-[20px] ${
                  project.objectTop ? 'object-top' : 'object-center'
                }`}
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full p-6 flex items-center justify-center text-center">
                <span className="hero-heading font-black uppercase text-lg">
                  {project.name}
                </span>
              </div>
            )}
          </div>

          {/* Tile 1: What it does */}
          <div className="rounded-[20px] border border-[#D7E2EA]/15 bg-white/[0.04] p-5 flex flex-col justify-start">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium mb-2 block">
              What it does
            </span>
            <p className="text-sm text-[#D7E2EA] font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Tile 2: Built with */}
          <div className="rounded-[20px] border border-[#D7E2EA]/15 bg-white/[0.04] p-5 flex flex-col justify-start">
            <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-medium mb-2 block">
              Built with
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-xs text-[#D7E2EA] font-medium bg-white/[0.04]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] text-[#D7E2EA] border-t border-[#D7E2EA]/12 py-20 md:py-28"
    >
      <Container className="flex flex-col items-center">
        <FadeIn delay={0} y={40} className="w-full">
          <h2
            className="hero-heading font-black uppercase text-center leading-[0.95] break-words mb-12 md:mb-16"
            style={{ fontSize: 'clamp(2.25rem, 8vw, 96px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        <div className="w-full relative flex flex-col items-center">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.num}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
