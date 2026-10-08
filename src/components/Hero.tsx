'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import SkillLogo from './SkillLogo';

const floatingTools = [
  { name: 'Python', position: '-top-4 -left-4' },
  { name: 'Flask', position: 'top-12 -right-6' },
  { name: 'Wireshark', position: 'bottom-20 -left-6' },
  { name: 'Git', position: '-bottom-4 right-12' },
];

export default function Hero() {
  const [hasPhoto, setHasPhoto] = useState(false);

  useEffect(() => {
    // Check if ishika.jpg loads successfully
    const img = new window.Image();
    img.src = '/ishika.jpg';
    img.onload = () => setHasPhoto(true);
    img.onerror = () => setHasPhoto(false);
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-background text-foreground flex items-center justify-center pt-24 pb-16 bg-dot-pattern overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full">
        {hasPhoto ? (
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Mobile Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="lg:hidden flex justify-center"
            >
              <div className="relative p-2 rounded-xl border border-border bg-card shadow-sm max-w-[220px]">
                <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-border">
                  <Image
                    src="/ishika.jpg"
                    alt="Portrait of Ishika Jaiswal"
                    fill
                    priority
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <p className="text-xs font-semibold text-foreground">Ishika Jaiswal</p>
                  <p className="text-[10px] text-muted-foreground">B.Tech CSE, Cybersecurity</p>
                </div>
              </div>
            </motion.div>

            {/* Left Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6 max-w-2xl">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.0 }}
                className="font-serif text-3xl sm:text-4xl text-muted-foreground"
              >
                B.Tech CSE, Cybersecurity
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 }}
                className="font-sans font-semibold text-5xl sm:text-7xl lg:text-8xl leading-[1.0] tracking-tight text-foreground"
              >
                Ishika Jaiswal
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.16 }}
                className="font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-xl"
              >
                Cybersecurity and data analytics student. Builds security tools and machine learning projects in Python.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.24 }}
                className="flex flex-col sm:flex-row gap-4 items-center pt-2 w-full sm:w-auto"
              >
                <a
                  href="#projects"
                  className="bg-primary text-primary-foreground rounded-md px-6 py-3 font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary w-full sm:w-auto text-center"
                >
                  View projects
                </a>
                <a
                  href="https://linkedin.com/in/jaiswalishika"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground px-4 py-2 rounded-md hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors w-full sm:w-auto"
                >
                  <span>Connect on LinkedIn</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>
            </div>

            {/* Desktop Framed Portrait with Floating Tool Logos */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block relative flex-shrink-0"
            >
              <div className="relative p-3 rounded-xl border border-border bg-card shadow-sm w-[340px]">
                <div className="relative aspect-[4/5] w-full rounded-lg overflow-hidden border border-border">
                  <Image
                    src="/ishika.jpg"
                    alt="Portrait of Ishika Jaiswal"
                    fill
                    priority
                    sizes="340px"
                    className="object-cover"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-semibold text-foreground">Ishika Jaiswal</p>
                  <p className="text-xs text-muted-foreground">B.Tech CSE, Cybersecurity</p>
                </div>
              </div>

              {/* Floating Tool Badges around frame */}
              {floatingTools.map((tool, idx) => (
                <motion.div
                  key={tool.name}
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 3 + idx * 0.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: idx * 0.4,
                  }}
                  className={`absolute ${tool.position} z-10 flex items-center gap-1.5 p-2 rounded-md border border-border bg-background shadow-md text-xs font-medium text-foreground select-none`}
                >
                  <SkillLogo name={tool.name} size={16} />
                  <span>{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ) : (
          /* Text-only fallback layout when photo is not present */
          <div className="flex flex-col items-center text-center space-y-8 max-w-5xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.0 }}
              className="font-serif text-3xl sm:text-4xl text-muted-foreground"
            >
              B.Tech CSE, Cybersecurity
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="font-sans font-semibold text-5xl sm:text-7xl lg:text-8xl leading-[1.0] tracking-tight text-foreground"
            >
              Ishika Jaiswal
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.16 }}
              className="font-sans text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-xl"
            >
              Cybersecurity and data analytics student. Builds security tools and machine learning projects in Python.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-4 items-center"
            >
              <a
                href="#projects"
                className="bg-primary text-primary-foreground rounded-md px-6 py-3 font-medium hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                View projects
              </a>
              <a
                href="https://linkedin.com/in/jaiswalishika"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground px-4 py-2 rounded-md hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors"
              >
                <span>Connect on LinkedIn</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
