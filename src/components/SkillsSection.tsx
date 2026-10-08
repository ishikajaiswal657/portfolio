'use client';

import AnimatedSection from './AnimatedSection';
import SkillLogo from './SkillLogo';

const skillGroups = [
  {
    category: 'Cybersecurity operations',
    skills: ['Threat detection', 'Vulnerability assessment', 'Penetration testing', 'SIEM', 'Network security', 'Wireshark', 'Nmap'],
  },
  {
    category: 'Law and compliance',
    skills: ['IT Act 2000', 'Section 65B evidence', 'Chain of custody', 'CrPC Section 91'],
  },
  {
    category: 'Forensics and investigation tools',
    skills: [
      'Autopsy',
      'FTK Imager',
      'ExifTool',
      'Wireshark',
      'Nmap',
      'Steganography tool',
      'IP attribution',
      'Device fingerprinting',
      'Geolocation',
      'Evidence timeline creation',
      'OSINT',
    ],
  },
  {
    category: 'Data and machine learning',
    skills: [
      'Python',
      'SQL',
      'Pandas',
      'NumPy',
      'Jupyter',
      'EDA',
      'Scikit-learn',
      'XGBoost',
      'Deep neural networks',
      'Feature engineering',
      'SMOTE',
      'Optuna',
      'Cross-validation',
      'NLP',
      'LLM integration',
      'Prompt engineering',
    ],
  },
  {
    category: 'Programming and tools',
    skills: [
      'Python',
      'Java',
      'C++',
      'C',
      'SQL',
      'Flask',
      'REST API development',
      'HTML/CSS/JS',
      'MySQL',
      'Git',
      'GitHub',
      'Render',
      'VS Code',
    ],
  },
];

// Key marquee skills to showcase in continuous marquee
const marqueeSkills = [
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
  'Wireshark',
  'Scikit-learn',
  'Pandas',
  'NumPy',
  'Jupyter',
  'VS Code',
];

export default function SkillsSection() {
  return (
    <AnimatedSection id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t border-border overflow-hidden">
      <div className="space-y-10">
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight">
            Skills
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Tools and skills in security, data and programming.
          </p>
        </div>

        {/* Continuous Marquee of Skill Logos */}
        <div className="relative w-full py-4 border-y border-border/60 overflow-hidden group/marquee">
          <div className="flex gap-8 items-center w-max animate-marquee group-hover/marquee:[animation-play-state:paused]">
            {[...marqueeSkills, ...marqueeSkills].map((skill, idx) => (
              <div
                key={`${skill}-${idx}`}
                className="flex items-center gap-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <SkillLogo name={skill} size={20} />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="rounded-lg border border-border bg-card p-6 card-hover"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {group.category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex flex-col items-center justify-center p-3 rounded-md border border-border bg-background/50 hover:bg-accent hover:border-primary transition-all duration-150 text-center gap-2 group/tile"
                  >
                    <SkillLogo name={skill} size={24} />
                    <span className="text-xs font-medium text-foreground group-hover/tile:text-primary leading-tight">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-4 border-t border-border/50 text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">Soft skills: </span>
          <span>Analytical thinking, Report writing, Communication</span>
        </div>
      </div>
    </AnimatedSection>
  );
}
