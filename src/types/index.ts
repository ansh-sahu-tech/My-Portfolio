export type ProjectCategory = 
  | 'All'
  | 'AI/ML'
  | 'Computer Vision'
  | 'Data Science'
  | 'Web Development';

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string;
  filterCategory: 'AI/ML' | 'Computer Vision' | 'Data Science' | 'Web Development';
  description: string;
  problem?: string;
  solution?: string;
  features: string[];
  technologies: string[];
  architecture?: string;
  process?: string[];
  results?: string;
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export type SkillCategory = 
  | 'Programming'
  | 'Machine Learning'
  | 'AI & Computer Vision'
  | 'Data'
  | 'Development';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Proficient';
  iconKey?: string;
  description?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  isCurrent: boolean;
  type: 'Education' | 'Academic Project' | 'Continuous Learning';
}

export interface Certificate {
  id: string;
  name: string;
  organization: string;
  issueDate: string;
  credentialId: string;
  credentialUrl?: string;
  verified: boolean;
}

export type MessageStatus = 'unread' | 'read' | 'replied';

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: MessageStatus;
}

export interface SiteSettings {
  name: string;
  role: string;
  brand: string;
  positioning: string;
  education: string;
  university: string;
  graduationYear: string;
  statusBadge: string;
  headline: string;
  aboutTitle: string;
  aboutDescription: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  phone: string;
  resumeUrl: string;
  aiMetrics: {
    systemStatus: 'ONLINE' | 'STANDBY' | 'OPTIMIZING';
    modelPerformance: string;
    computerVisionStatus: 'ACTIVE' | 'STANDBY';
    dataPipelineStatus: 'RUNNING' | 'IDLE';
    latencyMs: number;
  };
  supabaseUrl?: string;
  supabaseAnonKey?: string;
}

export interface AdminUser {
  email: string;
  name: string;
  role: 'admin';
  token: string;
}
