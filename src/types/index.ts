export interface Publication {
  id: string;
  title: string;
  authors: string[];
  mursyidAuthorIndex: number;
  institutions: string[];
  journal: string;
  volume: string;
  issue: string;
  pages: string;
  year: number;
  doi: string;
  doiUrl: string;
  scholarUrl?: string;
  abstract: string;
  keywords: string[];
  equations?: string[];
  keyFindings: string[];
  pdfAvailable: boolean;
  citationBibtex: string;
  citationApa: string;
  citationIeee: string;
}

export interface OngoingResearch {
  id: string;
  title: string;
  category: string;
  description: string;
  methodology: string;
  keyConcepts: string[];
  status: 'In Progress' | 'Working Paper' | 'Empirical Validation';
  expectedOutcome: string;
}

export interface ResearchInterest {
  title: string;
  description: string;
  iconName: string;
  tags: string[];
}

export interface OrganizationExperience {
  id: string;
  organization: string;
  shortName: string;
  role: string;
  period: string;
  level: string;
  isVerified: boolean;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  category: 'Academic & Research' | 'Community Development' | 'Organizational Activities';
  year: string;
  shortDescription: string;
  fullDescription: string;
  role: string;
  contribution: string[];
  tools: string[];
  outcomes?: string[];
  location?: string;
  verified: boolean;
  links?: { label: string; url: string }[];
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Foundational' | 'Intermediate' | 'Proficient' | 'Advanced';
    category?: string;
    description?: string;
  }[];
}

export interface EducationDetail {
  institution: string;
  degree: string;
  faculty: string;
  department: string;
  period: string;
  status: string;
  location: string;
  summary: string;
  coursework: string[];
}
