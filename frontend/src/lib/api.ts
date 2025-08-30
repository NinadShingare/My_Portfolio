import axios from 'axios';
import { Project, Skill } from '@/types';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://backend:8080';  // Use the correct environment variable

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await axios.get(`${API_BASE}/api/projects`);
    return res.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    return [];  // Fallback to empty array if there's an error
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const res = await axios.get(`${API_BASE}/api/skills`);
    return res.data;
  } catch (error) {
    console.error('Failed to fetch skills:', error);
    return [];  // Fallback to empty array if there's an error
  }
}
