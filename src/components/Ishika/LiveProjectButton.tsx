'use client';

import React from 'react';

interface LiveProjectButtonProps {
  href: string;
  label: 'Live Project' | 'View on GitHub';
  className?: string;
}

export default function LiveProjectButton({ href, label, className = '' }: LiveProjectButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full border border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-5 py-2.5 text-xs md:text-sm whitespace-nowrap hover:bg-[#D7E2EA]/10 transition-colors ${className}`}
    >
      {label}
    </a>
  );
}
