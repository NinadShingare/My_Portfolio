import axios from 'axios';
import { Project, Skill } from '@/types';

const API_BASE =
  typeof window === 'undefined'
    ? 'http://backend:8080/api'
    : '/api';

export async function getProjects(): Promise<Project[]> {
  const res = await axios.get(`${API_BASE}/projects`);
  return res.data;
}

export async function getSkills(): Promise<Skill[]> {
  const res = await axios.get(`${API_BASE}/skills`);
  return res.data;
}
