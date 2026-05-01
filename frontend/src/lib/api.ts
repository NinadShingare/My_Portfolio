import axios from 'axios';
import { Project, Skill } from '@/types';

// In production, we use the environment variable. In development (Docker), we default to the backend service name.
const API_BASE = process.env.NEXT_PUBLIC_API_URL || (typeof window === 'undefined' ? 'http://backend:8080/api' : '/api');

export async function getProjects(): Promise<Project[]> {
  const res = await axios.get(`${API_BASE}/projects`);
  return res.data;
}

export async function getSkills(): Promise<Skill[]> {
  const res = await axios.get(`${API_BASE}/skills`);
  return res.data;
}
