import axios from 'axios'
import { Project, Skill } from '@/types'
import { fallbackProjects, fallbackSkills } from '@/data/portfolio'

function withApiPath(url?: string) {
  if (!url) return undefined
  const normalized = url.replace(/\/$/, '')
  return normalized.endsWith('/api') ? normalized : `${normalized}/api`
}

function compactUnique(values: Array<string | undefined>) {
  return Array.from(new Set(values.filter(Boolean))) as string[]
}

const SERVER_API_CANDIDATES = compactUnique([
  process.env.NEXT_PUBLIC_API_URL,
  withApiPath(process.env.NEXT_PUBLIC_API_BASE_URL),
  withApiPath(process.env.BACKEND_URL),
  'https://my-portfolio-d3tm.onrender.com/api',
  'http://localhost:8080/api',
])

const CLIENT_API_CANDIDATES = compactUnique([
  process.env.NEXT_PUBLIC_API_URL,
  withApiPath(process.env.NEXT_PUBLIC_API_BASE_URL),
  '/api',
  'http://localhost:8080/api',
  'https://my-portfolio-d3tm.onrender.com/api',
])

function getApiCandidates() {
  return typeof window === 'undefined' ? SERVER_API_CANDIDATES : CLIENT_API_CANDIDATES
}

async function getFromAnyBase<T>(path: string): Promise<T> {
  const candidates = getApiCandidates()
  let lastError: unknown = null

  for (const base of candidates) {
    try {
      const res = await axios.get<T>(`${base}${path}`, { timeout: 2500 })
      return res.data
    } catch (error) {
      lastError = error
    }
  }

  throw lastError
}

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await getFromAnyBase<Project[]>('/projects')
    return projects.length > 0 ? projects : fallbackProjects
  } catch (error) {
    console.warn('Using fallback projects because the backend data source is unavailable.')
    return fallbackProjects
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const skills = await getFromAnyBase<Skill[]>('/skills')
    return skills.length > 0 ? skills : fallbackSkills
  } catch (error) {
    console.warn('Using fallback skills because the backend data source is unavailable.')
    return fallbackSkills
  }
}
