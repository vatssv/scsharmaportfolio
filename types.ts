
export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  location?: string;
  role: string;
  description: string[];
  image: string;
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: number }[];
}

export interface Certificate {
  name: string;
  issuer?: string;
}
