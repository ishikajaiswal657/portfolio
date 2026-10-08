export interface Project {
  slug: string;
  title: string;
  category: 'Cybersecurity' | 'Data and ML' | 'AI and Automation';
  date: string;
  description: string;
  bullets: string[];
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
  driveUrl?: string;
  screenshotSrc?: string;
  screenshotAlt?: string;
}

export const projects: Project[] = [
  {
    slug: 'shieldcheck',
    title: 'ShieldCheck: Phishing and Email Threat Scanner',
    category: 'Cybersecurity',
    date: 'Jul 2026',
    description: 'Built and deployed a Flask web app that scores URLs and .eml emails for phishing risk. Combined WHOIS, IP geolocation, SSL and VirusTotal checks into one risk score. Built a Chrome, Edge and Firefox extension (Manifest V3) that uses the same live API.',
    bullets: [
      'Built and deployed a Flask web app that scores URLs and .eml emails for phishing risk.',
      'Combined WHOIS, IP geolocation, SSL and VirusTotal checks into one risk score.',
      'Built a Chrome, Edge and Firefox extension (Manifest V3) that uses the same live API.',
    ],
    tools: ['Python', 'Flask', 'HTML/CSS/JS', 'REST API', 'VirusTotal API', 'WHOIS', 'Manifest V3'],
    screenshotSrc: '/project/shieldcheck.webp',
    screenshotAlt: 'ShieldCheck phishing threat scanner interface preview',
  },
  {
    slug: 'network-packet-analyzer',
    title: 'Network Packet Analyzer',
    category: 'Cybersecurity',
    date: 'Feb 2026',
    description: 'Detected port scans and ICMP floods in live TCP, UDP and ICMP traffic. Used sliding-window anomaly detection. Built a modular OOP design with a live dashboard and JSON and text reports.',
    bullets: [
      'Detected port scans and ICMP floods in live TCP, UDP and ICMP traffic.',
      'Used sliding-window anomaly detection.',
      'Built a modular OOP design with a live dashboard and JSON and text reports.',
    ],
    tools: ['Python', 'Scapy', 'Rich', 'Threading', 'JSON'],
    screenshotSrc: '/project/network-packet-analyzer.webp',
    screenshotAlt: 'Network Packet Analyzer traffic monitoring preview',
  },
  {
    slug: 'digital-forensics-mini-lab',
    title: 'Digital Forensics Mini Lab: Incident Response and Artifact Recovery',
    category: 'Cybersecurity',
    date: 'Dec 2025',
    description: 'Recovered 15+ deleted files from disk images using Autopsy file carving. Extracted GPS EXIF metadata from the recovered files. Produced Section 65B certificates with complete chain-of-custody documentation.',
    bullets: [
      'Recovered 15+ deleted files from disk images using Autopsy file carving.',
      'Extracted GPS EXIF metadata from the recovered files.',
      'Produced Section 65B certificates with complete chain-of-custody documentation.',
    ],
    tools: ['FTK Imager', 'Autopsy', 'ExifTool', 'MD5 and SHA-256 hashing'],
    screenshotSrc: '/project/forensics-mini-lab.webp',
    screenshotAlt: 'Digital Forensics artifact recovery lab interface preview',
  },
  {
    slug: 'operation-shadow-lure',
    title: 'Cybercrime Case Study: Operation Shadow-Lure (simulated investigation)',
    category: 'Cybersecurity',
    date: 'Oct 2025',
    description: 'Traced suspect activity in a simulated sextortion case using ISP, geolocation and device profile data. Mapped the digital artifacts to the IT Act (Section 67A) and CrPC Section 91. Compiled the evidence into a complete case file.',
    bullets: [
      'Traced suspect activity in a simulated sextortion case using ISP, geolocation and device profile data.',
      'Mapped the digital artifacts to the IT Act (Section 67A) and CrPC Section 91.',
      'Compiled the evidence into a complete case file.',
    ],
    tools: ['OSINT frameworks', 'IP logging', 'Device fingerprinting', 'Legal documentation'],
    screenshotSrc: '/project/forensics-mini-lab.webp',
    screenshotAlt: 'Cybercrime investigation case file preview',
  },
  {
    slug: 'heartspan',
    title: 'HeartSpan: Cardiovascular Disease Risk Predictor',
    category: 'Data and ML',
    date: 'Mar 2026',
    description: 'Trained 7 models, including a deep neural network and XGBoost. Reached 91.67% accuracy and 0.9632 ROC-AUC. Applied SMOTE and Optuna tuning to improve prediction reliability. Built and deployed a Flask app with guided intake, SHAP dashboards and PDF reports.',
    bullets: [
      'Trained 7 models, including a deep neural network and XGBoost.',
      'Reached 91.67% accuracy and 0.9632 ROC-AUC.',
      'Applied SMOTE and Optuna tuning to improve prediction reliability.',
      'Built and deployed a Flask app with guided intake, SHAP dashboards and PDF reports.',
    ],
    tools: ['Python', 'Scikit-learn', 'XGBoost', 'Optuna', 'Flask', 'SHAP'],
    screenshotSrc: '/project/heartspan.webp',
    screenshotAlt: 'HeartSpan disease risk predictor app preview',
  },
  {
    slug: 'jarvis-voice-assistant',
    title: 'Jarvis Voice Assistant',
    category: 'AI and Automation',
    date: 'Jun 2025',
    description: 'Built a real-time pipeline that connects speech-to-text with GPT-3.5 for voice conversations. Reduced response latency by optimizing the NLP setup and resource use.',
    bullets: [
      'Built a real-time pipeline that connects speech-to-text with GPT-3.5 for voice conversations.',
      'Reduced response latency by optimizing the NLP setup and resource use.',
    ],
    tools: ['Python', 'GPT-3.5', 'Speech-to-text and text-to-speech', 'NLP'],
    screenshotSrc: '/project/jarvis.webp',
    screenshotAlt: 'Jarvis voice assistant interface preview',
  },
  {
    slug: 'autonomous-chat-agent',
    title: 'Autonomous Chat Agent (Auto Reply Bot)',
    category: 'AI and Automation',
    date: 'May 2025',
    description: 'Built a PyAutoGUI tool that watches desktop chat apps and replies through the GPT-3.5 API. Kept a consistent Hindi and English persona. Stored API keys safely using python-dotenv.',
    bullets: [
      'Built a PyAutoGUI tool that watches desktop chat apps and replies through the GPT-3.5 API.',
      'Kept a consistent Hindi and English persona.',
      'Stored API keys safely using python-dotenv.',
    ],
    tools: ['Python', 'PyAutoGUI', 'OpenAI API', 'Prompt engineering'],
    screenshotSrc: '/project/chat-agent.webp',
    screenshotAlt: 'Autonomous chat agent reply bot preview',
  },
];
