import axios from 'axios'
import { Project, Skill } from '@/types'

const SERVER_API_CANDIDATES = [
  process.env.NEXT_PUBLIC_API_URL,
  'http://localhost:8080/api',
  'https://my-portfolio-d3tm.onrender.com/api',
  'http://backend:8080/api',
].filter(Boolean) as string[]

const CLIENT_API_CANDIDATES = [
  process.env.NEXT_PUBLIC_API_URL,
  '/api',
  'http://localhost:8080/api',
  'https://my-portfolio-d3tm.onrender.com/api',
].filter(Boolean) as string[]

function getApiCandidates() {
  return typeof window === 'undefined' ? SERVER_API_CANDIDATES : CLIENT_API_CANDIDATES
}

async function getFromAnyBase<T>(path: string): Promise<T> {
  const candidates = getApiCandidates()
  let lastError: unknown = null

  for (const base of candidates) {
    try {
      const res = await axios.get<T>(`${base}${path}`, { timeout: 5000 })
      return res.data
    } catch (error) {
      lastError = error
    }
  }

  throw lastError
}

export async function getProjects(): Promise<Project[]> {
  try {
    return await getFromAnyBase<Project[]>('/projects')
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    return await getFromAnyBase<Skill[]>('/skills')
  } catch (error) {
    console.error('Failed to fetch skills:', error)
    return []
  }
}
