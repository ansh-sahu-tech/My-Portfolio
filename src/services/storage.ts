import type { Project, Skill, Experience, Certificate, ContactMessage, SiteSettings } from '../types';
import { initialProjects } from '../data/initialProjects';
import { initialSkills } from '../data/initialSkills';
import { initialExperience } from '../data/initialExperience';
import { initialCertificates } from '../data/initialCertificates';
import { defaultSettings } from '../data/defaultSettings';

const STORAGE_KEYS = {
  PROJECTS: 'ansh_dev_projects_v1',
  SKILLS: 'ansh_dev_skills_v1',
  EXPERIENCE: 'ansh_dev_experience_v1',
  CERTIFICATES: 'ansh_dev_certificates_v1',
  MESSAGES: 'ansh_dev_messages_v1',
  SETTINGS: 'ansh_dev_settings_v1',
  THEME: 'ansh_dev_theme_v1',
  AUTH: 'ansh_dev_auth_v1',
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
      return parsed.map((p) => ({
        ...p,
        githubUrl: !p.githubUrl || p.githubUrl === 'YOUR_GITHUB_URL' ? 'https://github.com/Anshsahu275-max' : p.githubUrl
      }));
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
      // Ensure verified updated contact details are applied if previous placeholders were saved
      if (!parsed.linkedinUrl || parsed.linkedinUrl === 'YOUR_LINKEDIN_URL') {
        parsed.linkedinUrl = defaultSettings.linkedinUrl;
      }
      if (!parsed.githubUrl || parsed.githubUrl === 'YOUR_GITHUB_URL') {
        parsed.githubUrl = defaultSettings.githubUrl;
      }
      if (!parsed.email || parsed.email === 'YOUR_EMAIL') {
        parsed.email = defaultSettings.email;
      }
      if (!parsed.phone || parsed.phone === 'YOUR_PHONE') {
        parsed.phone = defaultSettings.phone;
      }
      return { ...defaultSettings, ...parsed };
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
