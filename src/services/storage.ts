import type { Project, Skill, Experience, Certificate, ContactMessage, SiteSettings } from '../types';
import { initialProjects } from '../data/initialProjects';
import { initialSkills } from '../data/initialSkills';
import { initialExperience } from '../data/initialExperience';
import { initialCertificates } from '../data/initialCertificates';
import { defaultSettings } from '../data/defaultSettings';

const STORAGE_KEYS = {
  PROJECTS: 'ansh_dev_projects_v6',
  SKILLS: 'ansh_dev_skills_v2',
  EXPERIENCE: 'ansh_dev_experience_v2',
  CERTIFICATES: 'ansh_dev_certificates_v3',
  MESSAGES: 'ansh_dev_messages_v2',
  SETTINGS: 'ansh_dev_settings_v2',
  THEME: 'ansh_dev_theme_v2',
  AUTH: 'ansh_dev_auth_v2',
};

export const storageService = {
  getProjects(): Project[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(initialProjects));
        return initialProjects;
      }
      const parsed: Project[] = JSON.parse(data);
      return parsed
        .filter((p) => p.id !== 'proj-5' && p.slug !== 'developer-portfolio-2026')
        .map((p) => {
          let imageUrl = p.imageUrl;
          let liveUrl = p.liveUrl;
          let githubUrl = p.githubUrl;

          if (p.id === 'proj-1' || p.slug === 'ai-driver-awareness-system') {
            imageUrl = '/ai-driver-awareness.png';
            githubUrl = 'https://github.com/ansh-sahu-tech/AI-Driver-Safety-Awareness-System';
            liveUrl = 'https://github.com/ansh-sahu-tech/AI-Driver-Safety-Awareness-System';
          } else if (p.id === 'proj-2' || p.slug === 'sacha-sauda') {
            imageUrl = '/sacha-sauda.png';
            liveUrl = 'https://sacha-sauda-five.vercel.app/';
          } else if (p.id === 'proj-3' || p.slug === 'student-performance-prediction') {
            imageUrl = '/student-performance-prediction.png';
          } else if (p.id === 'proj-4' || p.slug === 'swagatam-vijay-bakers') {
            imageUrl = '/bakery-project.png';
            liveUrl = 'https://bakery-taupe-six.vercel.app/';
          }
          return {
            ...p,
            liveUrl: liveUrl || p.liveUrl,
            githubUrl: !githubUrl || githubUrl === 'YOUR_GITHUB_URL' || githubUrl.includes('Anshsahu275-max') ? 'https://github.com/ansh-sahu-tech' : githubUrl,
            imageUrl: imageUrl || '/ai-driver-awareness.png',
            imagePosition: p.imagePosition
          };
        });
    } catch {
      return initialProjects;
    }
  },

  saveProjects(projects: Project[]): void {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  },

  getSkills(): Skill[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SKILLS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(initialSkills));
        return initialSkills;
      }
      return JSON.parse(data);
    } catch {
      return initialSkills;
    }
  },

  saveSkills(skills: Skill[]): void {
    localStorage.setItem(STORAGE_KEYS.SKILLS, JSON.stringify(skills));
  },

  getExperience(): Experience[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.EXPERIENCE);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(initialExperience));
        return initialExperience;
      }
      return JSON.parse(data);
    } catch {
      return initialExperience;
    }
  },

  saveExperience(experience: Experience[]): void {
    localStorage.setItem(STORAGE_KEYS.EXPERIENCE, JSON.stringify(experience));
  },

  getCertificates(): Certificate[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.CERTIFICATES);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(initialCertificates));
        return initialCertificates;
      }
      return JSON.parse(data);
    } catch {
      return initialCertificates;
    }
  },

  saveCertificates(certificates: Certificate[]): void {
    localStorage.setItem(STORAGE_KEYS.CERTIFICATES, JSON.stringify(certificates));
  },

  getMessages(): ContactMessage[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MESSAGES);
      if (!data) {
        const sampleMessages: ContactMessage[] = [
          {
            id: 'msg-sample-1',
            name: 'Sarah Jenkins',
            email: 's.jenkins@techrecruitment.io',
            subject: 'AI/ML Internship Opportunity',
            message: 'Hi Ansh, I was really impressed by your AI Driver Awareness System project. We have upcoming AI/ML internship openings for summer 2026. Would love to connect!',
            createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
            status: 'unread'
          }
        ];
        localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(sampleMessages));
        return sampleMessages;
      }
      return JSON.parse(data);
    } catch {
      return [];
    }
  },

  saveMessages(messages: ContactMessage[]): void {
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));
  },

  getSettings(): SiteSettings {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (!data) {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(defaultSettings));
        return defaultSettings;
      }
      const parsed = JSON.parse(data);
      let modified = false;
      // Ensure verified updated contact details are applied if previous placeholders or outdated URLs were saved
      if (!parsed.linkedinUrl || parsed.linkedinUrl === 'YOUR_LINKEDIN_URL' || parsed.linkedinUrl.includes('54a3422b4')) {
        parsed.linkedinUrl = defaultSettings.linkedinUrl;
        modified = true;
      }
      if (!parsed.githubUrl || parsed.githubUrl === 'YOUR_GITHUB_URL' || parsed.githubUrl.includes('Anshsahu275-max')) {
        parsed.githubUrl = defaultSettings.githubUrl;
        modified = true;
      }
      if (!parsed.email || parsed.email === 'YOUR_EMAIL') {
        parsed.email = defaultSettings.email;
        modified = true;
      }
      if (!parsed.name || parsed.name === 'Ansh') {
        parsed.name = defaultSettings.name;
        modified = true;
      }
      if (!parsed.role || parsed.role.includes('Software Engineer')) {
        parsed.role = defaultSettings.role;
        modified = true;
      }
      if (!parsed.brand || parsed.brand === 'Ansh') {
        parsed.brand = defaultSettings.brand;
        modified = true;
      }
      if (!parsed.positioning || parsed.positioning.includes('Software Engineer')) {
        parsed.positioning = defaultSettings.positioning;
        modified = true;
      }
      if (!parsed.instagramUrl) {
        parsed.instagramUrl = defaultSettings.instagramUrl;
        modified = true;
      }
      const merged = { ...defaultSettings, ...parsed };
      if (modified) {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(merged));
      }
      return merged;
    } catch {
      return defaultSettings;
    }
  },

  saveSettings(settings: SiteSettings): void {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  },

  resetToDefaults(): void {
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.SKILLS);
    localStorage.removeItem(STORAGE_KEYS.EXPERIENCE);
    localStorage.removeItem(STORAGE_KEYS.CERTIFICATES);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
  }
};
