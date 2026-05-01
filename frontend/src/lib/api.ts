import axios from 'axios';
import { Project, Skill } from '@/types';

// In production, we use the environment variable. In development (Docker), we default to the backend service name.
const API_BASE = process.env.NEXT_PUBLIC_API_URL || (typeof window === 'undefined' ? 'http://backend:8080/api' : '/api');

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await axios.get(`${API_BASE}/projects`, { timeout: 5000 });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return []; // Return empty array instead of crashing the build
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const res = await axios.get(`${API_BASE}/skills`, { timeout: 5000 });
    return res.data;
  } catch (error) {
    console.error("Failed to fetch skills:", error);
    return []; // Return empty array instead of crashing the build
  }
}
