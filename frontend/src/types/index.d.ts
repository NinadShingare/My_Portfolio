export interface Project {
  id: number
  title: string
  description: string
  link?: string
  github?: string
  techStack: string
}

export interface Skill {
  id: number
  skillname: string
  level?: string
}

export interface Experience {
  id: number
  company: string
  role: string
  location: string
  period: string
  type: string
  summary: string
  achievements: string[]
  stack: string[]
}

export interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  status?: string
}
