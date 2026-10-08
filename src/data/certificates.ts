export interface Certificate {
  id: string;
  name: string;
  issuer: string;
  date: string;
  imageFileName: string;
  category: 'Cybersecurity' | 'Networking' | 'Data analytics and AI' | 'Programming';
  verifyUrl?: string;
  tasksCompleted?: string[];
  issuerLogoFileName?: string;
}

export interface ExperienceCertificate {
  id: string;
  name: string;
  issuer: string;
  dateRange: string;
  imageFileName: string;
}

export const certificates: Certificate[] = [
  // Cybersecurity (newest first)
  {
    id: 'google-cybersecurity',
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google (Coursera)',
    date: '9 Apr 2026',
    imageFileName: 'google-cybersecurity.webp',
    category: 'Cybersecurity',
    verifyUrl: 'https://coursera.org/verify/professional-cert/50272A46CZ4J',
    issuerLogoFileName: 'google.svg',
  },
  {
    id: 'ec-council-ceh',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '27 Dec 2025',
    imageFileName: 'ec-council-ceh.webp',
    category: 'Cybersecurity',
    issuerLogoFileName: 'ec-council.svg',
  },
  {
    id: 'deloitte-cyber-simulation',
    name: 'Cyber Job Simulation',
    issuer: 'Deloitte (Forage)',
    date: '28 Oct 2025',
    imageFileName: 'deloitte-cyber-simulation.webp',
    category: 'Cybersecurity',
    tasksCompleted: ['Cyber security'],
    issuerLogoFileName: 'deloitte.svg',
  },
  {
    id: 'ec-council-cnd',
    name: 'Certified Network Defender (CND)',
    issuer: 'EC-Council',
    date: '31 May 2025',
    imageFileName: 'ec-council-cnd.webp',
    category: 'Cybersecurity',
    issuerLogoFileName: 'ec-council.svg',
  },
  {
    id: 'ec-council-ecss-v10',
    name: 'EC-Council Certified Security Specialist (ECSS) v10',
    issuer: 'EC-Council',
    date: '30 Dec 2024',
    imageFileName: 'ec-council-ecss-v10.webp',
    category: 'Cybersecurity',
    issuerLogoFileName: 'ec-council.svg',
  },
  {
    id: 'ec-council-cscu-v3',
    name: 'Certified Secure Computer User (CSCU) v3',
    issuer: 'EC-Council',
    date: '5 Jun 2024',
    imageFileName: 'ec-council-cscu-v3.webp',
    category: 'Cybersecurity',
    issuerLogoFileName: 'ec-council.svg',
  },

  // Networking
  {
    id: 'juniper-jncia-junos',
    name: 'Juniper Networks Certified Associate, Junos (JNCIA-Junos)',
    issuer: 'Juniper Networks',
    date: '19 Sep 2026',
    imageFileName: 'juniper-jncia-junos.webp',
    category: 'Networking',
    verifyUrl: 'https://cp.certmetrics.com/juniper/en/public/verify/credential',
    issuerLogoFileName: 'juniper.svg',
  },

  // Data analytics and AI (newest first)
  {
    id: 'google-foundations-data',
    name: 'Foundations: Data, Data, Everywhere',
    issuer: 'Google (Coursera)',
    date: '30 Jul 2026',
    imageFileName: 'google-foundations-data.webp',
    category: 'Data analytics and AI',
    verifyUrl: 'https://coursera.org/verify/082FYVMV6IX2',
    issuerLogoFileName: 'google.svg',
  },
  {
    id: 'google-cloud-generative-ai-studio',
    name: 'Introduction to Generative AI Studio',
    issuer: 'Google Cloud Skills Boost',
    date: '19 Jan 2026',
    imageFileName: 'google-cloud-generative-ai-studio.webp',
    category: 'Data analytics and AI',
    issuerLogoFileName: 'google-cloud.svg',
  },
  {
    id: 'tata-genai-data-analytics',
    name: 'GenAI Powered Data Analytics Job Simulation',
    issuer: 'TATA (Forage)',
    date: '29 Dec 2025',
    imageFileName: 'tata-genai-data-analytics.webp',
    category: 'Data analytics and AI',
    tasksCompleted: [
      'Exploratory data analysis and risk profiling',
      'Predicting delinquency with AI',
      'Business report and data storytelling for collections strategy',
      'Implementing an AI-driven collections strategy',
    ],
    issuerLogoFileName: 'tata.svg',
  },
  {
    id: 'cisco-data-science-essentials-python',
    name: 'Data Science Essentials with Python',
    issuer: 'Cisco Networking Academy',
    date: '19 Dec 2025',
    imageFileName: 'cisco-data-science-essentials-python.webp',
    category: 'Data analytics and AI',
    issuerLogoFileName: 'cisco.svg',
  },
  {
    id: 'cisco-intro-data-science',
    name: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: '4 Dec 2025',
    imageFileName: 'cisco-intro-data-science.webp',
    category: 'Data analytics and AI',
    issuerLogoFileName: 'cisco.svg',
  },
  {
    id: 'deloitte-data-analytics-simulation',
    name: 'Data Analytics Job Simulation',
    issuer: 'Deloitte (Forage)',
    date: '4 Nov 2025',
    imageFileName: 'deloitte-data-analytics-simulation.webp',
    category: 'Data analytics and AI',
    tasksCompleted: ['Data analysis', 'Forensic technology'],
    issuerLogoFileName: 'deloitte.svg',
  },

  // Programming
  {
    id: 'hackerrank-python-basic',
    name: 'Python (Basic)',
    issuer: 'HackerRank',
    date: '8 Sep 2026',
    imageFileName: 'hackerrank-python-basic.webp',
    category: 'Programming',
    issuerLogoFileName: 'hackerrank.svg',
  },
];

export const experienceCertificates: ExperienceCertificate[] = [
  {
    id: 'corizo-internship',
    name: 'AI Internship Certificate',
    issuer: 'Corizo Edutech',
    dateRange: '5 Sep 2024 to 5 Oct 2024',
    imageFileName: 'corizo-internship.webp',
  },
  {
    id: 'corizo-training',
    name: 'AI Training Certificate',
    issuer: 'Corizo Edutech',
    dateRange: '5 Sep 2024 to 5 Oct 2024',
    imageFileName: 'corizo-training.webp',
  },
];
