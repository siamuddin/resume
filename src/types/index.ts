export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  overview: string;
  problem: string;
  solution: string;
  designProcess: string[];
  technologies: string[];
  features: string[];
  challenges: string[];
  results: { metric: string; label: string }[];
  category: 'Creative Dev' | 'Design Systems' | 'Full-Stack' | 'AI & Tools' | 'Mobile';
  featured: boolean;
  status: 'Completed' | 'In Development' | 'Concept' | 'Archived';
  year: string;
  client: string;
  role: string;
  heroImage: string;
  gallery: string[];
  githubUrl: string;
  demoUrl: string;
  relatedSlugs: string[];
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: {
    sectionHeading?: string;
    paragraphs: string[];
    quote?: string;
    codeSnippet?: { language: string; code: string };
  }[];
  category: string;
  publishDate: string;
  readingTime: string;
  featured: boolean;
  coverImage: string;
  tags: string[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Design & Creative' | 'Backend & Cloud' | 'Tools & Workflows';
  level: number;
  status: 'Master' | 'Advanced' | 'Proficient' | 'Exploring';
  description: string;
  iconName?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Independent / Studio';
  description: string;
  responsibilities: string[];
  technologies: string[];
  isIllustrative: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  focus: string;
  honors?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  badge?: string;
}

export interface PlaygroundExperiment {
  id: string;
  title: string;
  tagline: string;
  type: 'canvas-particles' | 'audio-synth' | 'gravity-physics' | 'gradient-lab' | 'terminal-shell' | 'spring-morph';
  description: string;
  tech: string[];
  date: string;
}

export interface NowData {
  updatedAt: string;
  currentLocation: string;
  focus: string[];
  learning: string[];
  reading: {
    title: string;
    author: string;
    status: 'Currently Reading' | 'Finished' | 'Queued';
    rating?: string;
    note?: string;
  }[];
  music: {
    track: string;
    artist: string;
    vibes: string;
    cover: string;
  }[];
  goals: {
    title: string;
    target: string;
    progress: number;
  }[];
}

export interface PersonalInfo {
  name: string;
  brand: string;
  role: string;
  location: string;
  tagline: string;
  shortBio: string;
  fullBio: string[];
  philosophy: { title: string; description: string }[];
  facts: { label: string; value: string }[];
  stats: { label: string; value: string; helper?: string }[];
  socials: { platform: string; url: string; handle: string; icon: string }[];
  email: string;
  availability: string;
  currentActivity: {
    building: string;
    exploring: string;
    listening: string;
  };
}
