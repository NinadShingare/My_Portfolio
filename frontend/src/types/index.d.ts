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
