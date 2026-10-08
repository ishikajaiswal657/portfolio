'use client';

import * as simpleIcons from 'simple-icons';

// Map skill name to simple-icons export name
const logoMap: Record<string, string> = {
  Python: 'siPython',
  Flask: 'siFlask',
  JavaScript: 'siJavascript',
  'HTML/CSS/JS': 'siHtml5',
  HTML5: 'siHtml5',
  'HTML & CSS': 'siHtml5',
  CSS3: 'siCss',
  C: 'siC',
  'C++': 'siCplusplus',
  MySQL: 'siMysql',
  Git: 'siGit',
  'Git/GitHub': 'siGithub',
  GitHub: 'siGithub',
  Wireshark: 'siWireshark',
  'Scikit-learn': 'siScikitlearn',
  Pandas: 'siPandas',
  NumPy: 'siNumpy',
  Jupyter: 'siJupyter',
  Render: 'siRender',
};

interface SkillLogoProps {
  name: string;
  size?: number;
}

export default function SkillLogo({ name, size = 24 }: SkillLogoProps) {
  const iconKey = logoMap[name];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const icon = iconKey ? (simpleIcons as any)[iconKey] : null;

  if (icon) {
    const brandHex = `#${icon.hex}`;
    return (
      <div className="group/logo relative inline-flex items-center justify-center">
        <svg
          role="img"
          aria-label={`${name} logo`}
          viewBox="0 0 24 24"
          width={size}
          height={size}
          className="fill-muted-foreground group-hover/logo:fill-[var(--brand-color)] transition-colors duration-150"
          style={{ '--brand-color': brandHex } as React.CSSProperties}
        >
          <path d={icon.path} />
        </svg>
      </div>
    );
  }

  // Fallback for skills without an official icon: clean text monogram box
  const monogram = name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <div className="inline-flex items-center justify-center w-6 h-6 rounded-sm bg-accent text-[10px] font-bold text-foreground">
      {monogram}
    </div>
  );
}
