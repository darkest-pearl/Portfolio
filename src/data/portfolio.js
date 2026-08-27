export const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const quickFacts = [
  { value: 'Web + Android', label: 'Cross-platform product work' },
  { value: 'AI + deterministic logic', label: 'Practical AI architecture' },
  { value: 'UAE', label: 'Current base' },
];

export const projects = [
  {
    name: 'Niqdah',
    kind: 'niqdah',
    category: 'Personal finance · Android · AI',
    status: 'Active development',
    year: '2026',
    description:
      'A privacy-conscious Android personal-finance assistant that combines deterministic financial calculations, transaction import workflows, Firebase, and conversational guidance through an authenticated OpenAI backend.',
    points: [
      'Keeps core money calculations deterministic instead of delegating accounting to an LLM.',
      'Separates public and private Android flavors around SMS permissions and trusted testing.',
      'Uses structured finance context so AI explains stored data without owning the source of truth.',
    ],
    tech: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Cloud Functions', 'OpenAI Responses API'],
    github: 'https://github.com/darkest-pearl/Niqdah',
  },
  {
    name: 'Hawelly',
    kind: 'hawelly',
    category: 'Cross-border transfer coordination',
    status: 'Active development',
    year: '2026',
    description:
      'A managed money-transfer coordination platform built around people and operational control: request, staff-prepared quote, funding instructions, external payout coordination, evidence, confirmation, and exception handling.',
    points: [
      'Designed around sender, staff, and admin roles rather than an uncontrolled agent marketplace.',
      'Makes the lifecycle explicit from quote acceptance through funding, payout evidence, and disputes.',
      'Reuses hardened operational ideas from earlier remittance work without carrying forward the old settlement model.',
    ],
    tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Operations design', 'Auditability'],
    github: 'https://github.com/darkest-pearl/Hawelly',
  },
  {
    name: 'aldayaa',
    kind: 'aldayaa',
    category: 'Restaurant operations · Multi-tenant SaaS',
    status: 'Production-ready foundation',
    year: '2026',
    description:
      'A multi-tenant restaurant operations platform spanning public ordering and reservations, staff administration, kitchen workflow, inventory, recipes, suppliers, purchase requests, invoices, reporting, and tenant-scoped audit logging.',
    points: [
      'Enforces tenant-aware workflows across ordering, staff actions, purchasing, inventory, and reporting.',
      'Builds operational modules incrementally with explicit role boundaries and read-only support access.',
      'Includes production-readiness, deployment, secrets, and security hardening runbooks.',
    ],
    tech: ['Next.js', 'React', 'Prisma', 'PostgreSQL', 'Zod', 'RBAC'],
    github: 'https://github.com/darkest-pearl/aldayaa',
  },
  {
    name: 'XBUX',
    kind: 'xbux',
    category: 'Remittance operations · Full-stack MVP',
    status: 'Private case study',
    year: '2026',
    description:
      'A full remittance operations MVP covering sender, admin, funding agent, payout agent, recipient, pricing, proof review, pickup-code validation, disputes, risk views, notifications, reconciliation, settlements, and audit trails.',
    points: [
      'Backed by repeatable smoke and release checks across critical transfer lifecycle paths.',
      'Hardens sensitive pickup-code storage and masks secret-bearing notification or audit payloads.',
      'Evolved into a useful reference architecture for later, simpler people-centered transfer products.',
    ],
    tech: ['Express', 'Next.js', 'Prisma', 'PostgreSQL', 'Android', 'Smoke tests'],
    github: null,
  },
];

export const labProjects = [
  {
    name: 'Manpower / MDMAS',
    type: 'Workflow automation',
    symbol: '⌘',
    description: 'Flask system for employee, employer, broker, reminder, document, and administrative workflows.',
    github: 'https://github.com/darkest-pearl/Manpower',
  },
  {
    name: 'erFam',
    type: 'Systems architecture',
    symbol: '◎',
    description: 'Family-calling platform foundation with explicit governance, privacy, ledger, and activation invariants.',
    github: 'https://github.com/darkest-pearl/erFam',
  },
  {
    name: 'QuranEd',
    type: 'EdTech concept',
    symbol: '◇',
    description: 'Early multilingual learning-platform concept for matching Qur’an students with teachers and volunteers.',
    github: 'https://github.com/darkest-pearl/QuranEd',
  },
  {
    name: 'Eid Congrats App',
    type: 'Mobile experiment',
    symbol: '✦',
    description: 'A smaller public application experiment within a broader set of Android and web prototypes.',
    github: 'https://github.com/darkest-pearl/Eid-Congrats-App',
  },
];

export const capabilities = [
  {
    title: 'Product interfaces',
    symbol: '◫',
    description: 'Responsive web and native Android surfaces designed around clarity, hierarchy, state, and real workflows.',
    skills: ['React', 'Next.js', 'Tailwind', 'Kotlin', 'Jetpack Compose', 'Material 3'],
  },
  {
    title: 'Backend systems',
    symbol: '⌬',
    description: 'APIs, data models, authentication, role boundaries, tenant safety, auditability, and business rules.',
    skills: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'Firebase', 'REST APIs'],
  },
  {
    title: 'AI integration',
    symbol: '✦',
    description: 'AI used where reasoning and explanation add value, with deterministic code retaining authority over critical data.',
    skills: ['OpenAI APIs', 'Structured context', 'Privacy boundaries', 'Tooling workflows'],
  },
  {
    title: 'Delivery & verification',
    symbol: '↗',
    description: 'Repository structure, phased implementation, smoke testing, release checks, deployment readiness, and iterative QA.',
    skills: ['Git', 'GitHub', 'Vercel', 'Firebase', 'Smoke tests', 'Runbooks'],
  },
];

export const education = {
  degree: 'Associate of Science in Computer Science',
  school: 'University of the People',
  note: 'Continuing toward a Bachelor of Science in Computer Science.',
  year: '2026',
};

export const contactLinks = [
  {
    label: 'GitHub',
    value: '@darkest-pearl',
    href: 'https://github.com/darkest-pearl',
    external: true,
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    value: 'Musab Ibrahim',
    href: 'https://www.linkedin.com/in/musab-ibrahim-9367342b7/',
    external: true,
    icon: 'linkedin',
  },
  {
    label: 'WhatsApp',
    value: '+971 55 223 1070',
    href: 'https://wa.me/971552231070',
    external: true,
    icon: 'whatsapp',
  },
];
