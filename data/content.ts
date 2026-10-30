// ============================================================
// CONTENT FILE — edit text here without touching components
// ============================================================

export const siteConfig = {
  name: 'Sindhu Jeswani',
  role: 'Computer Science student building backend systems, data tools and AI-powered web apps',
  email: 'sindhukumeri44@gmail.com',
  phone: '+92 301 3408943',
  github: 'https://github.com/sindhujeswani',
  cvPath: '/Sindhu_Jeswani_CV.pdf',
  location: 'Karachi, Pakistan',
  university: 'SZABIST University',
  cgpa: '3.1 / 4.0',
  graduation: '2027',
  openTo: 'Entry-level software engineering, backend & data roles',
  meta: {
    title: 'Sindhu Jeswani — CS Student & Backend Developer',
    description:
      'Final-year CS student at SZABIST Karachi building backend systems, REST APIs and data dashboards. Seeking entry-level software engineering, backend or data roles.',
    url: 'https://sindhujeswani.dev',
    ogImage: '/og-image.png',
  },
}

export const aboutParagraphs = [
  "I'm a final-year Computer Science student at SZABIST University, Karachi, with a CGPA of 3.1/4.0 and a genuine interest in the craft of building software that works reliably at scale. My project work spans Python-based REST APIs with FastAPI, full-stack web apps with React and Node.js, and data analysis pipelines — each one pushing me to think carefully about schema design, system boundaries, and user needs.",
  'Outside the classroom, I have explored machine learning through my final-year project MeethaCart, where I am applying Random Forest forecasting and open-source NLP translation to an e-commerce platform that bridges language barriers between home bakers and buyers. I am looking for an entry-level role in software engineering, backend development, or data engineering where I can keep learning from experienced teams and contribute from day one.',
]

export const facts = [
  { label: 'Education', value: 'BS Computer Science, SZABIST University' },
  { label: 'CGPA', value: '3.1 / 4.0' },
  { label: 'Graduating', value: '2027' },
  { label: 'Location', value: 'Karachi, Pakistan' },
  { label: 'Open to', value: 'Entry-level software engineering, backend & data roles' },
]

export const featuredProject = {
  title: 'MeethaCart',
  subtitle: 'AI-Powered Bilingual Bakery Marketplace',
  badge: 'Final Year Project',
  period: 'Oct 2026 – Present',
  team: "Team of 2 · Supervised by Ma'am Ayesha Ghayas",
  status: 'In development',
  problem:
    'Buyers and sellers who prefer different languages struggle to communicate on shared platforms. Home bakers have no reliable way to predict demand for perishable goods. Unsold baked food is wasted with no structured channel to redirect it.',
  solution:
    'MeethaCart is a bilingual (English/Urdu) e-commerce platform that connects buyers with home bakers. An open-source NLP model automatically translates chat messages and custom-order bid notes, so a buyer typing in Urdu and a seller replying in English can transact seamlessly. A Random Forest model gives sellers demand forecasts, and a surplus-food donation feature creates a channel to nearby NGOs.',
  features: [
    'JWT authentication with role-based access (buyer / seller / admin)',
    'Custom order bidding — an accepted bid becomes a live order automatically',
    'Real-time chat via Socket.IO with automatic English ↔ Urdu translation',
    'Class scheduling and booking for baking workshops',
    'Ratings system with automatic seller-badge progression',
    'Random Forest demand forecasting (scikit-learn) for sellers',
    'Surplus-food donation flow connecting sellers with NGOs',
  ],
  stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Python', 'scikit-learn'],
  myRole:
    'Contributing to both frontend and backend development across the full feature set.',
}

export const projects = [
  {
    title: 'Expense Tracker REST API',
    description:
      'A production-minded REST API with 15+ authenticated CRUD endpoints for users, expenses and reports. Features a PostgreSQL schema modelled with SQLAlchemy, input validation, pagination, and a suite of 20+ Pytest unit and integration tests. Containerized with Docker.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'JWT', 'Docker', 'Pytest'],
    github: 'https://github.com/sindhujeswani/expense-tracker-api',
    demo: null,
    type: 'api',
  },
  {
    title: 'Real-World Data Analysis Dashboard',
    description:
      'End-to-end data project: cleaned a 10 000+ row real-world dataset (missing values, outliers, feature transformations), surfaced key insights through exploratory analysis, and presented results in an interactive Streamlit dashboard with filters and Plotly charts.',
    stack: ['Python', 'Pandas', 'NumPy', 'Streamlit', 'Plotly'],
    github: 'https://github.com/sindhujeswani/data-dashboard',
    demo: null,
    type: 'data',
  },
  {
    title: 'Event Management System',
    description:
      'An ASP.NET Razor MVC web app with structured controllers and Razor views for managing events and participants. Implements full CRUD workflows, MVC separation of concerns, and server-side validation throughout.',
    stack: ['ASP.NET Razor MVC', 'C#'],
    github: null,
    demo: null,
    type: 'web',
  },
]

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'C#', 'SQL'],
  },
  {
    category: 'Backend & API',
    items: ['FastAPI', 'Node.js', 'Express', 'REST APIs', 'JWT Authentication', 'SQLAlchemy', 'Socket.IO', 'Pytest'],
  },
  {
    category: 'Frontend & Web',
    items: ['React', 'ASP.NET Razor MVC'],
  },
  {
    category: 'Data & ML',
    items: ['Pandas', 'NumPy', 'scikit-learn', 'Streamlit', 'Plotly', 'Exploratory Data Analysis', 'Data Cleaning'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools & Workflow',
    items: ['Git / GitHub', 'Docker', 'Postman', 'VS Code'],
  },
]

export const certifications = [
  { name: 'Zab-e-Fest Hackathon', issuer: 'SZABIST University' },
  { name: 'Software Quality & Debugging', issuer: 'Professional Development' },
  { name: 'Bounty DLD', issuer: 'Bounty' },
]

export const education = {
  degree: 'BS Computer Science',
  university: 'SZABIST University',
  location: 'Karachi, Pakistan',
  cgpa: '3.1 / 4.0',
  graduation: 'Expected 2027',
  accreditation: 'NCEAC-accredited BSCS curriculum',
  coursework: [
    'Object-Oriented Programming',
    'Data Structures & Algorithms',
    'Database Systems',
    'Operating Systems',
    'Software Engineering',
    'Computer Networks & Data Communications',
    'Artificial Intelligence',
    'Information Security',
    'Design & Analysis of Algorithms',
    'Parallel & Distributed Computing',
    'Discrete Mathematical Structures',
    'Linear Algebra',
    'Probability & Statistics',
    'Compiler Construction',
    'Automata Theory',
  ],
}
