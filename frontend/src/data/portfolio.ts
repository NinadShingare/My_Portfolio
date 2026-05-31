import { Project, Skill } from '@/types'

export const fallbackProjects: Project[] = [
  {
    id: 1,
    title: 'Event Ticket Booking Platform',
    description:
      'A full-stack event ticket booking application built with Next.js, MongoDB, Clerk authentication, Stripe payments, and Svix webhooks for reliable booking and user onboarding flows.',
    github: 'https://github.com/NinadShingare',
    techStack: 'Node.js, Next.js, MongoDB, Shadcn UI, Stripe API, Clerk Auth',
  },
  {
    id: 2,
    title: 'Web Mobile SIM Recharge Application',
    description:
      'A Java Spring MVC application with optimized user flows, Hibernate ORM, Spring Data JPA, MySQL persistence, and audit logging for recharge plan management.',
    github: 'https://github.com/NinadShingare',
    techStack: 'Java, Spring Boot, Hibernate, HTML, CSS, JavaScript, MySQL',
  },
]

export const fallbackSkills: Skill[] = [
  { id: 1, skillname: 'Java', level: 'advanced' },
  { id: 2, skillname: 'Python', level: 'advanced' },
  { id: 3, skillname: 'JavaScript', level: 'advanced' },
  { id: 4, skillname: 'Spring Boot', level: 'advanced' },
  { id: 5, skillname: 'FastAPI', level: 'intermediate' },
  { id: 6, skillname: 'Node.js', level: 'advanced' },
  { id: 7, skillname: 'Django', level: 'intermediate' },
  { id: 8, skillname: 'Next.js', level: 'advanced' },
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
]
