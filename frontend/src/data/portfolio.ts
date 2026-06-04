import { Certification, Experience, Project, Skill } from '@/types'

export const fallbackProjects: Project[] = [
  {
    id: 1,
    title: 'Web Mobile SIM Recharge Application',
    description:
      'Planned and engineered a mobile SIM recharge web application using Java Spring MVC with optimized frontend workflows to reduce user input steps by 20% during usability testing. Implemented secure authentication and role-based authorization, reducing potential data breach risks by 90%.',
    github: 'https://github.com/NinadShingare/Recharger',
    techStack: 'Java, Spring Boot, Hibernate, HTML, CSS, JavaScript, MySQL',
  },
  {
    id: 2,
    title: 'Event Ticket Booking Platform',
    description:
      'Built a MERN stack web application enabling users to browse, book, and manage event tickets, achieving 95% test case pass rate on end-to-end functionality. Integrated event creation features tested with test organizers, streamlining event setup, and increasing listing efficiency by 40%.',
    github: 'https://github.com/NinadShingare/Eventworld',
    techStack: 'Node.js, Next.js, MongoDB, Shadcn UI, Stripe API, Clerk Auth',
  },
]

export const fallbackSkills: Skill[] = [
  { id: 1, skillname: 'Java', level: 'advanced' },
  { id: 2, skillname: 'Python', level: 'advanced' },
  { id: 3, skillname: 'JavaScript', level: 'advanced' },
  { id: 4, skillname: 'Spring Boot', level: 'advanced' },
  { id: 5, skillname: 'FastAPI', level: 'intermediate' },
  { id: 6, skillname: 'Node.js', level: 'advanced' },
  { id: 7, skillname: 'Django', level: 'beginner' },
  { id: 8, skillname: 'Next.js', level: 'beginner' },
  { id: 9, skillname: 'Generative AI', level: 'advanced' },
  { id: 10, skillname: 'RAG', level: 'advanced' },
  { id: 11, skillname: 'LangChain', level: 'advanced' },
  { id: 12, skillname: 'LangGraph', level: 'intermediate' },
  { id: 13, skillname: 'Vector Search', level: 'intermediate' },
  { id: 14, skillname: 'PostgreSQL', level: 'advanced' },
  { id: 15, skillname: 'MongoDB', level: 'advanced' },
  { id: 16, skillname: 'MySQL', level: 'advanced' },
  { id: 17, skillname: 'AWS', level: 'intermediate' },
  { id: 18, skillname: 'Docker', level: 'advanced' },
  { id: 19, skillname: 'Kafka', level: 'intermediate' },
  { id: 20, skillname: 'Linux', level: 'advanced' },
  { id: 21, skillname: 'Google Dialogflow', level: 'intermediate' },
  { id: 22, skillname: 'Microsoft SQL Server', level: 'advanced' },
  { id: 23, skillname: 'DynamoDB', level: 'intermediate' },
  { id: 24, skillname: 'ChromaDB', level: 'intermediate' },
  { id: 25, skillname: 'Trino', level: 'intermediate' },
  { id: 26, skillname: 'n8n', level: 'beginner' },
  { id: 27, skillname: 'Databricks', level: 'intermediate' },
]

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'SV IT Global Solutions',
    role: 'AI/ML Engineer',
    location: 'Bengaluru, Karnataka',
    period: 'Jan 2026 - Present',
    type: 'Full-time',
    summary:
      'Building production-focused AI and migration systems across multi-agent orchestration, schema transformation, and UI automation workflows.',
    achievements: [
      'Built an async dual-pipeline multi-agent system for MSSQL to Appian XSD migrations.',
      'Implemented a custom API quota manager and rule-based transformation algorithm that reduced LLM execution costs by 40%.',
      'Engineered an autonomous UI migration engine translating Fenergo JSON to Appian SAIL.',
      'Used Playwright-driven validation with an iterative Fixer Agent to achieve up to 90% automated error resolution.',
    ],
    stack: ['Python', 'LLMs', 'Multi-Agent Systems', 'MSSQL', 'Appian', 'Playwright', 'API Design'],
  },
  {
    id: 2,
    company: 'SV IT Global Solutions',
    role: 'AI/ML Application Developer Intern',
    location: 'Bengaluru, Karnataka',
    period: 'Sept 2025 - Dec 2025',
    type: 'Internship',
    summary:
      'Delivered conversational AI and RAG-based applications with cloud deployment and real-world communication integrations.',
    achievements: [
      'Developed and deployed an AI chatbot using Google Dialogflow, LLMs, and web scraping for dynamic web assistance.',
      'Improved response relevance with more context-aware answers across assisted user interactions.',
      'Architected an end-to-end serverless RAG conversational agent on AWS Lambda.',
      'Integrated Twilio WhatsApp workflows and reduced infrastructure costs by 40%.',
    ],
    stack: ['Google Dialogflow', 'LLMs', 'RAG', 'AWS Lambda', 'Twilio', 'Web Scraping'],
  },
  {
    id: 3,
    company: 'PRGX India Pvt. Ltd.',
    role: 'SQL & ETL Intern',
    location: 'Pune, Maharashtra',
    period: 'Jan 2025 - Jun 2025',
    type: 'Internship',
    summary:
      'Worked on data preprocessing, refinement, and SQL optimization for audit transformation workflows.',
    achievements: [
      'Developed Python scripts to preprocess and refine raw client data for strict compliance requirements.',
      'Improved data preprocessing and refinement accuracy to 99%.',
      'Optimized complex SQL scripts to resolve slow database operations.',
      'Enhanced overall data load efficiency by 40%.',
    ],
    stack: ['Python', 'SQL', 'ETL', 'Data Processing', 'Audit Workflows'],
  },
  {
    id: 4,
    company: 'Vyosim TechLab',
    role: 'Backend Developer Intern',
    location: 'Sindhudurg, Maharashtra',
    period: 'Dec 2022 - Feb 2023',
    type: 'Internship',
    summary:
      'Built and tested REST APIs for MongoDB-backed application features with a focus on performance and endpoint stability.',
    achievements: [
      'Constructed REST APIs using Node.js and Express for efficient MongoDB Atlas data retrieval.',
      'Reduced front-end load times by 25% through improved data access patterns.',
      'Executed parallel and sequential API testing through Postman.',
      'Delivered 99% functional test coverage for newly deployed endpoints.',
    ],
    stack: ['Node.js', 'Express', 'MongoDB Atlas', 'REST APIs', 'Postman'],
  },
]

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Databricks Certified Generative AI Engineer Associate',
    issuer: 'Databricks',
    date: 'Expected Jun 2026',
    status: 'Preparing',
  },
  {
    id: 2,
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'Feb 2026',
  },
  {
    id: 3,
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud Skills Boost',
    date: 'Jun 2023',
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'Python', 'JavaScript'],
  },
  {
    title: 'AI/ML',
    items: ['Generative AI', 'RAG', 'LangChain', 'LangGraph', 'Vector Search', 'Embeddings', 'Google Dialogflow'],
  },
  {
    title: 'Backend',
    items: ['Spring Boot', 'Node.js', 'Django', 'FastAPI', 'Autogen'],
  },
  {
    title: 'Frontend',
    items: ['HTML', 'CSS', 'Bootstrap', 'Shadcn UI', 'Next.js'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'Microsoft SQL Server', 'MongoDB', 'PostgreSQL', 'DynamoDB', 'ChromaDB'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Git', 'Linux', 'AWS', 'Postman', 'AgentOps', 'Trino', 'HeidiSQL', 'Docker', 'Kafka', 'n8n', 'Databricks'],
  },
]
