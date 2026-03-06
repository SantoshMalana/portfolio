// ─── Central Content Config ───────────────────────────────────────────────────
// Edit this file to update all portfolio content in one place.

export const PERSONAL = {
  name: 'Santosh Malana',
  initials: 'SM',
  taglines: ['Full-Stack Developer', 'WebRTC Engineer', 'System Architect', 'Real-Time Builder'],
  bio: [
    "Computer Science Engineering student at Lovely Professional University with a deep passion for building scalable, real-time web applications.",
    "From architecting WebSocket infrastructure supporting 10,000+ concurrent users to designing mesh-based WebRTC signaling protocols, I thrive at the intersection of performance engineering and elegant user experience.",
    "I hold certifications from Oracle and IIT Kharagpur, and I've competed in hackathons against 50+ university teams. My goal: build software that matters.",
  ],
  email: 'santosh24x@gmail.com',
  github: 'https://github.com/SantoshMalana',
  linkedin: 'https://linkedin.com/in/santosh24x',
  twitter: '@santosh24x',
  resumeUrl: 'https://drive.google.com/file/d/1LYa0uNuf1Oq-9unDiXWoxwPlbWVMFBKy/view?usp=drive_link',
  availableForWork: true,
};

export const PROJECTS = [
  {
    title: 'SyncSpace',
    subtitle: 'Real-Time Collaboration Platform',
    description:
      'Architected scalable WebSocket infrastructure with Redis Pub/Sub for distributed presence tracking, supporting 10,000+ concurrent users. Engineered mesh-based WebRTC signaling for 50+ participant group communication.',
    tech: ['React 18', 'TypeScript', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB', 'JWT', 'Google OAuth'],
    github: 'https://github.com/SantoshMalana/syncspace-chat-app',
    live: 'https://syncspace-chat-app.vercel.app', // deployed ✓
    number: '01',
    gradient: 'from-emerald-500/20 via-cyan-500/10 to-transparent',
    accentColor: 'hsl(165 80% 48%)',
    stats: [
      { label: 'Concurrent Users', value: '10K+' },
      { label: 'Group Size', value: '50+' },
    ],
  },
  {
    title: 'Rideshare Hub',
    subtitle: 'Carpooling Platform',
    description:
      'Full-stack carpooling application with Next.js 15 Server Actions for direct server-side mutations. Designed passwordless OTP authentication with secure HttpOnly cookies. Real-time bidirectional messaging with under 100ms latency via Pusher.',
    tech: ['Next.js 15', 'TypeScript', 'MongoDB', 'Pusher', 'Leaflet', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/SantoshMalana/rideshare-connect-main',
    live: 'https://rideshare-connect.vercel.app', // deployed ✓
    number: '02',
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    accentColor: 'hsl(270 60% 60%)',
    stats: [
      { label: 'Latency', value: '<100ms' },
      { label: 'Auth', value: 'Passwordless' },
    ],
  },
  {
    title: 'Loan Management',
    subtitle: 'Financial Platform with JWT Auth',
    description:
      'End-to-end financial lifecycle tracking for banking workflows with strict role-based access control (RBAC). Secured APIs using time-bound JWTs, cryptographic bcrypt hashing, and Nodemailer-backed email verification flows.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'bcrypt', 'Nodemailer', 'JavaScript'],
    github: 'https://github.com/SantoshMalana/loan-management-system',
    live: 'https://loan-management-system.vercel.app', // deployed ✓
    number: '03',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: 'hsl(38 92% 60%)',
    stats: [
      { label: 'Security', value: 'RBAC + JWT' },
      { label: 'Auth', value: 'Encrypted' },
    ],
  },
  {
    title: 'Real-Time Process Monitor',
    subtitle: 'System Dashboard',
    description:
      'Graphical dashboard displaying real-time process states, CPU usage, and memory consumption with live charts and metrics. Gives system administrators visibility and control over running processes and system health.',
    tech: ['JavaScript', 'Node.js', 'Chart.js', 'WebSocket', 'HTML', 'CSS'],
    github: 'https://github.com/SantoshMalana/Real-Time-Process-Monitoring-Dashboard',
    live: null,
    number: '04',
    gradient: 'from-sky-500/20 via-blue-500/10 to-transparent',
    accentColor: 'hsl(210 85% 58%)',
    stats: [
      { label: 'Metrics', value: 'Real-Time' },
      { label: 'Interface', value: 'Charts' },
    ],
  },
  {
    title: 'Blood Donation Network',
    subtitle: 'Healthcare Platform',
    description:
      'Connects blood donors with recipients in real time, enabling life-saving coordination. Features donor profiles, blood type matching, location-based search, and automated request notifications to accelerate emergency response.',
    tech: ['TypeScript', 'React.js', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/SantoshMalana/donate-blood-save-lives',
    live: null,
    number: '05',
    gradient: 'from-rose-500/20 via-red-500/10 to-transparent',
    accentColor: 'hsl(355 80% 55%)',
    stats: [
      { label: 'Matching', value: 'Type-Safe' },
      { label: 'Impact', value: 'Healthcare' },
    ],
  },
  {
    title: 'Weather Alert Scheduler',
    subtitle: 'Smart Weather Alerts',
    description:
      'Web application that schedules and delivers alerts based on configurable weather conditions — temperature thresholds, rainfall, wind speed, and more. Integrates live weather APIs to provide proactive notification workflows.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Weather API', 'LocalStorage'],
    github: 'https://github.com/SantoshMalana/Weather-alert-scheduler-',
    live: null,
    number: '06',
    gradient: 'from-cyan-500/20 via-teal-500/10 to-transparent',
    accentColor: 'hsl(185 75% 50%)',
    stats: [
      { label: 'Conditions', value: 'Configurable' },
      { label: 'Data', value: 'Live API' },
    ],
  },
  {
    title: 'Simon Game',
    subtitle: 'Classic Memory Challenge',
    description:
      'A faithful browser recreation of the classic Simon memory game — progressive difficulty, animated colour sequences, sound feedback, and high-score tracking. Built as a pure vanilla JavaScript exercise in event-driven UI logic.',
    tech: ['JavaScript', 'HTML5', 'CSS3', 'Web Audio API'],
    github: 'https://github.com/SantoshMalana/simon-game',
    live: null,
    number: '07',
    gradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
    accentColor: 'hsl(240 70% 65%)',
    stats: [
      { label: 'Type', value: 'Vanilla JS' },
      { label: 'Pattern', value: 'Logic Game' },
    ],
  },
];


export const SKILLS = [
  {
    title: 'Languages',
    icon: '⟨/⟩',
    color: 'from-emerald-400 to-cyan-400',
    glowColor: 'hsl(165 80% 48%)',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'TypeScript', level: 92 },
      { name: 'Java', level: 88 },
      { name: 'Python', level: 82 },
      { name: 'C++', level: 78 },
      { name: 'C', level: 75 },
      { name: 'Go', level: 65 },
    ],
  },
  {
    title: 'Frontend',
    icon: '◆',
    color: 'from-violet-400 to-purple-400',
    glowColor: 'hsl(270 60% 60%)',
    skills: [
      { name: 'React.js', level: 94 },
      { name: 'Next.js', level: 90 },
      { name: 'Tailwind CSS', level: 91 },
      { name: 'Framer Motion', level: 86 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Bootstrap', level: 78 },
    ],
  },
  {
    title: 'Backend & Runtime',
    icon: '⚡',
    color: 'from-amber-400 to-orange-400',
    glowColor: 'hsl(38 92% 60%)',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 89 },
      { name: 'WebSocket', level: 90 },
      { name: 'WebRTC', level: 86 },
      { name: 'Socket.io', level: 88 },
      { name: 'REST APIs', level: 94 },
      { name: 'FastAPI', level: 74 },
    ],
  },
  {
    title: 'Databases',
    icon: '◈',
    color: 'from-rose-400 to-pink-400',
    glowColor: 'hsl(350 80% 60%)',
    skills: [
      { name: 'MongoDB', level: 91 },
      { name: 'MySQL', level: 84 },
      { name: 'PostgreSQL', level: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '⊛',
    color: 'from-sky-400 to-blue-400',
    glowColor: 'hsl(200 80% 55%)',
    skills: [
      { name: 'Git / GitHub', level: 92 },
      { name: 'Docker', level: 78 },
      { name: 'Postman', level: 87 },
      { name: 'JWT / OAuth', level: 90 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

export const CERTIFICATIONS = [
  { title: 'Oracle Data Platform 2025', org: 'Oracle', date: 'Jan 2026', icon: '🔶' },
  { title: 'Cloud Computing (Elite)', org: 'NPTEL, IIT Kharagpur', date: 'Oct 2025', icon: '☁️' },
  { title: 'Competitive Programming', org: 'Coding Blocks LPU', date: 'Feb 2024', icon: '⚔️' },
];

export const EDUCATION = [
  { degree: 'B.Tech CSE', school: 'Lovely Professional University', period: '2023 – Present', score: 'In Progress', color: 'hsl(165 80% 48%)' },
  { degree: 'Intermediate', school: 'Narayana Junior College', period: '2022 – 2023', score: '81%', color: 'hsl(270 60% 60%)' },
  { degree: 'Matriculation', school: 'Bhashyam High School', period: '2020 – 2021', score: '100%', color: 'hsl(38 92% 60%)' },
];

export const AWARDS = [
  { title: 'NPTEL Elite Performer', desc: '71% in Cloud Computing — IIT Kharagpur', emoji: '🏅' },
  { title: 'Code-A-Hunt Finalist', desc: 'Semi-finals against 50+ university teams', emoji: '🏆' },
];

export const ABOUT_STATS = [
  { label: 'Education', value: 'B.Tech CSE', icon: '🎓' },
  { label: 'University', value: 'LPU', icon: '🏛' },
  { label: 'Languages', value: '7+', icon: '💻' },
  { label: 'Projects', value: '7 Projects', icon: '🚀' },
  { label: 'Certifications', value: '3 Elite', icon: '📜' },
];
