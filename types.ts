
export interface Project {
  name: string;
  client?: string;
  tools: string[];
  description: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  projects?: Project[];
  generalDescription?: string[];
  tools?: string[];
}

export interface Accomplishment {
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  location?: string;
}

export interface ExpertiseCategory {
  category: string;
  skills: string[];
}
