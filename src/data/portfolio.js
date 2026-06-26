export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const projects = [
  {
    name: 'aldayaa / RestaurantOps Gateway',
    type: 'Full-stack SaaS / restaurant automation platform',
    status: 'Production-ready foundation / MVP',
    description:
      'A multi-tenant restaurant automation foundation with public restaurant pages, ordering, reservations, tenant staff login, admin modules, menu/gallery management, kitchen queue, inventory, suppliers, purchase requests, invoices, reports, and audit logs.',
    tech: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'Prisma',
      'PostgreSQL',
      'JWT',
      'bcrypt',
      'Zod',
      'WebSockets',
    ],
    github: 'https://github.com/darkest-pearl/aldayaa',
    highlight: true,
  },
  {
    name: 'LuqtaReel',
    type: 'Android client/demo app',
    status: 'Client demo / active development',
    description:
      'An Android media/listing discovery app focused on browsing and presenting listings/media in a mobile-first experience. This is a client-facing project being prepared as a demo APK.',
    tech: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'Firebase Auth',
      'Firestore',
      'Firebase Storage',
      'Navigation Compose',
      'Coil',
    ],
    github: 'https://github.com/darkest-pearl',
    highlight: true,
  },
  {
    name: 'Niqdah',
    type: 'Android finance + AI app',
    status: 'Personal product / active development',
    description:
      'A personal finance Android app for budgeting, debt tracking, savings goals, transaction management, bank-message import workflows, and AI-assisted financial guidance through a secure backend.',
    tech: [
      'Kotlin',
      'Jetpack Compose',
      'Material 3',
      'Firebase Auth',
      'Firestore',
      'Firebase Cloud Functions',
      'OpenAI backend integration',
    ],
    github: 'https://github.com/darkest-pearl/Niqdah',
    highlight: true,
  },
  {
    name: 'XBUX',
    type: 'Fintech/remittance operations MVP',
    status: 'MVP / inactive client-side adoption',
    description:
      'A remittance operations MVP with sender, admin, funding agent, payout agent, pricing, transfer lifecycle, pickup-code validation, settlement queue, and audit logging. Presented as an operations MVP, not as a licensed live financial service.',
    tech: ['Express', 'Prisma', 'PostgreSQL', 'Next.js', 'Node.js', 'Release scripts', 'Smoke tests'],
    github: 'https://github.com/darkest-pearl/XBUX',
    highlight: false,
  },
  {
    name: 'QuranEd',
    type: 'EdTech / social-impact platform',
    status: 'MVP concept / early product foundation',
    description:
      'A multilingual Qur’an learning platform concept focused on connecting students with teachers and volunteers based on language, learning goals, and affordability.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/darkest-pearl/QuranEd',
    highlight: false,
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript', 'TypeScript', 'Responsive UI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'Prisma', 'PostgreSQL', 'Authentication', 'Role-based access control'],
  },
  {
    title: 'Android',
    skills: ['Kotlin', 'Jetpack Compose', 'Material 3', 'Firebase Auth', 'Firestore', 'Firebase Storage'],
  },
  {
    title: 'Cloud / Tools',
    skills: ['Firebase', 'Vercel', 'GitHub', 'Git', 'GitHub Actions basics', 'Deployment readiness', 'Environment variables', 'Smoke testing'],
  },
  {
    title: 'Product Skills',
    skills: ['MVP planning', 'Admin dashboards', 'Multi-tenant systems', 'Business automation', 'Client demo preparation', 'Workflow design'],
  },
];

export const contactLinks = [
  {
    label: 'Email',
    value: 'musabcreate@gmail.com',
    href: 'mailto:musabcreate@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/darkest-pearl',
    href: 'https://github.com/darkest-pearl',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/musab-ibrahim-9367342b7',
    href: 'https://www.linkedin.com/in/musab-ibrahim-9367342b7/',
  },
  {
    label: 'WhatsApp / Contact',
    value: '+971 55 223 1070',
    href: 'https://wa.me/971552231070',
  },
];
