'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

function Character({
  char,
  progress,
  start,
  end,
}: {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}) {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charCounter = 0;
  const totalChars = text.length;
  const step = 1 / totalChars;

  if (shouldReduceMotion) {
    return <p className={className} style={style}>{text}</p>;
  }

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const wordElement = (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const charIndex = charCounter++;
              const start = charIndex * step;
              const end = start + step * 5;
              return (
                <Character
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  start={Math.min(start, 0.95)}
                  end={Math.min(end, 1)}
                />
              );
            })}
          </span>
        );
        // Add a normal space after each word except the last
        charCounter++; // for space
        return (
          <React.Fragment key={wordIdx}>
            {wordElement}
            {wordIdx < words.length - 1 && ' '}
          </React.Fragment>
        );
      })}
    </p>
  );
}
