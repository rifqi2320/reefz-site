export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  location: string;
  email: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    website?: string;
    scholar?: string;
  };
  avatar?: string;
  gallery?: {
    id: string;
    url: string;
    caption: string;
    alt: string;
  }[];
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  description?: string;
  type: 'award' | 'honor' | 'fellowship' | 'grant' | 'recognition';
}

export interface Education {
  id: string;
  degree: string;
  field: string;
  school: string;
  location: string;
  startDate: string;
  endDate?: string;
  gpa?: string;
  honors?: string[];
  description?: string;
  thesis?: {
    title: string;
    advisor?: string;
    description?: string;
  };
}

export interface Tag {
  id: string;
  name: string;
  color: string;
}

export interface Media {
  type: 'image' | 'video' | 'link';
  url: string;
  alt?: string;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  modes: PortfolioMode[];
  startDate: string;
  endDate?: string;
  media: Media[];
  links?: {
    demo?: string;
    github?: string;
    article?: string;
  };
  featured?: boolean;
}

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue?: string; // Optional for upcoming publications
  year?: string; // Optional for upcoming publications
  type: 'conference' | 'journal' | 'workshop' | 'preprint';
  abstract?: string; // Optional for partial information
  tags: string[];
  links?: {
    paper?: string;
    arxiv?: string;
    code?: string;
    slides?: string;
    poster?: string;
    demo?: string;
  };
  citations?: number;
  status?: 'published' | 'accepted' | 'under-review' | 'preprint' | 'in-preparation' | 'upcoming';
  featured?: boolean;
  // New fields for partial information
  isPartial?: boolean; // Flag to indicate partial information
  expectedDate?: string; // Expected publication date
  partialNote?: string; // Note explaining what information is available
}

export interface PortfolioModeConfig {
  title: string;
  bio: string;
  relevantTags: string[];
}

export type PortfolioMode = 'fullstack' | 'research';

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  summary: string;
  description: string;
  tags: string[];
  modes: PortfolioMode[];
  achievements?: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  tags: {
    experiences: Tag[];
    projects: Tag[];
    publications: Tag[];
  };
  experiences: Experience[];
  projects: Project[];
  publications: Publication[];
  awards: Award[];
  education: Education[];
  modes: {
    fullstack: PortfolioModeConfig;
    research: PortfolioModeConfig;
  };
}
