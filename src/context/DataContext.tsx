import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { Project, Skill, Experience, Certificate, ContactMessage, SiteSettings, MessageStatus } from '../types';
import { storageService } from '../services/storage';

interface DataContextType {
  projects: Project[];
  skills: Skill[];
  experience: Experience[];
  certificates: Certificate[];
  messages: ContactMessage[];
  settings: SiteSettings;
  
  // Project operations
  addProject: (project: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  getProjectBySlug: (slug: string) => Project | undefined;
  
  // Skill operations
  addSkill: (skill: Omit<Skill, 'id'>) => void;
  updateSkill: (id: string, skill: Partial<Skill>) => void;
  deleteSkill: (id: string) => void;
  
  // Experience operations
  addExperience: (exp: Omit<Experience, 'id'>) => void;
  updateExperience: (id: string, exp: Partial<Experience>) => void;
  deleteExperience: (id: string) => void;
  
  // Certificate operations
  addCertificate: (cert: Omit<Certificate, 'id'>) => void;
  updateCertificate: (id: string, cert: Partial<Certificate>) => void;
  deleteCertificate: (id: string) => void;
  
  // Message operations
  addMessage: (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>) => Promise<boolean>;
  updateMessageStatus: (id: string, status: MessageStatus) => void;
  deleteMessage: (id: string) => void;
  
  // Settings operations
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  resetAllData: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [projects, setProjects] = useState<Project[]>(() => storageService.getProjects());
  const [skills, setSkills] = useState<Skill[]>(() => storageService.getSkills());
  const [experience, setExperience] = useState<Experience[]>(() => storageService.getExperience());
  const [certificates, setCertificates] = useState<Certificate[]>(() => storageService.getCertificates());
  const [messages, setMessages] = useState<ContactMessage[]>(() => storageService.getMessages());
  const [settings, setSettings] = useState<SiteSettings>(() => storageService.getSettings());

  useEffect(() => {
    storageService.saveProjects(projects);
  }, [projects]);

  useEffect(() => {
    storageService.saveSkills(skills);
  }, [skills]);

  useEffect(() => {
    storageService.saveExperience(experience);
  }, [experience]);

  useEffect(() => {
    storageService.saveCertificates(certificates);
  }, [certificates]);

  useEffect(() => {
    storageService.saveMessages(messages);
  }, [messages]);

  useEffect(() => {
    storageService.saveSettings(settings);
  }, [settings]);

  // Project handlers
  const addProject = useCallback((newProj: Omit<Project, 'id' | 'createdAt' | 'updatedAt'>) => {
    const created: Project = {
      ...newProj,
      id: `proj-${Date.now()}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setProjects((prev) => [created, ...prev]);
  }, []);

  const updateProject = useCallback((id: string, updatedFields: Partial<Project>) => {
    setProjects((prev) =>
      prev.map((proj) =>
        proj.id === id
          ? { ...proj, ...updatedFields, updatedAt: new Date().toISOString() }
          : proj
      )
    );
  }, []);

  const deleteProject = useCallback((id: string) => {
    setProjects((prev) => prev.filter((proj) => proj.id !== id));
  }, []);

  const getProjectBySlug = useCallback((slug: string) => {
    return projects.find((p) => p.slug === slug || p.id === slug);
  }, [projects]);

  // Skill handlers
  const addSkill = useCallback((newSkill: Omit<Skill, 'id'>) => {
    const created: Skill = {
      ...newSkill,
      id: `skill-${Date.now()}`,
    };
    setSkills((prev) => [...prev, created]);
  }, []);

  const updateSkill = useCallback((id: string, updatedFields: Partial<Skill>) => {
    setSkills((prev) =>
      prev.map((skill) => (skill.id === id ? { ...skill, ...updatedFields } : skill))
    );
  }, []);

  const deleteSkill = useCallback((id: string) => {
    setSkills((prev) => prev.filter((skill) => skill.id !== id));
  }, []);

  // Experience handlers
  const addExperience = useCallback((newExp: Omit<Experience, 'id'>) => {
    const created: Experience = {
      ...newExp,
      id: `exp-${Date.now()}`,
    };
    setExperience((prev) => [...prev, created]);
  }, []);

  const updateExperience = useCallback((id: string, updatedFields: Partial<Experience>) => {
    setExperience((prev) =>
      prev.map((exp) => (exp.id === id ? { ...exp, ...updatedFields } : exp))
    );
  }, []);

  const deleteExperience = useCallback((id: string) => {
    setExperience((prev) => prev.filter((exp) => exp.id !== id));
  }, []);

  // Certificate handlers
  const addCertificate = useCallback((newCert: Omit<Certificate, 'id'>) => {
    const created: Certificate = {
      ...newCert,
      id: `cert-${Date.now()}`,
    };
    setCertificates((prev) => [...prev, created]);
  }, []);

  const updateCertificate = useCallback((id: string, updatedFields: Partial<Certificate>) => {
    setCertificates((prev) =>
      prev.map((cert) => (cert.id === id ? { ...cert, ...updatedFields } : cert))
    );
  }, []);

  const deleteCertificate = useCallback((id: string) => {
    setCertificates((prev) => prev.filter((cert) => cert.id !== id));
  }, []);

  // Message handlers
  const addMessage = useCallback(async (msg: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): Promise<boolean> => {
    await new Promise((resolve) => setTimeout(resolve, 600));

    const newMessage: ContactMessage = {
      ...msg,
      id: `msg-${Date.now()}`,
      createdAt: new Date().toISOString(),
      status: 'unread',
    };

    setMessages((prev) => [newMessage, ...prev]);
    return true;
  }, []);

  const updateMessageStatus = useCallback((id: string, status: MessageStatus) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status } : m))
    );
  }, []);

  const deleteMessage = useCallback((id: string) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  }, []);

  // Settings handlers
  const updateSettings = useCallback((newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  }, []);

  const resetAllData = useCallback(() => {
    storageService.resetToDefaults();
    setProjects(storageService.getProjects());
    setSkills(storageService.getSkills());
    setExperience(storageService.getExperience());
    setCertificates(storageService.getCertificates());
    setSettings(storageService.getSettings());
  }, []);

  return (
    <DataContext.Provider
      value={{
        projects,
        skills,
        experience,
        certificates,
        messages,
        settings,
        addProject,
        updateProject,
        deleteProject,
        getProjectBySlug,
        addSkill,
        updateSkill,
        deleteSkill,
        addExperience,
        updateExperience,
        deleteExperience,
        addCertificate,
        updateCertificate,
        deleteCertificate,
        addMessage,
        updateMessageStatus,
        deleteMessage,
        updateSettings,
        resetAllData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
