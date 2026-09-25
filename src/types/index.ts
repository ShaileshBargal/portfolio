// ─── Portfolio Types ───────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location?: string;
  period: string;
  score: string;
  scoreLabel: string;
  badge: 'pursuing' | 'completed';
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  project?: string;
  technologies: string[];
  description: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;   // set to real URL or leave undefined
  demoUrl?: string;     // set to real URL or leave undefined
  internship?: boolean;
}

export interface SkillCategory {
  category: string;
  description?: string;
  iconName: string;
  skills: string[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  location: string;
}
