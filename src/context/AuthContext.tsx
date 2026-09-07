import React, { createContext, useContext, useState, useEffect } from 'react';
import type { AdminUser } from '../types';

interface AuthContextType {
  user: AdminUser | null;
  isAuthenticated: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AUTH_STORAGE_KEY = 'ansh_dev_admin_session';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedSession = localStorage.getItem(AUTH_STORAGE_KEY);
      if (savedSession) {
        const parsed = JSON.parse(savedSession) as AdminUser;
        setUser(parsed);
      }
    } catch (err) {
      console.error('Failed to parse auth session:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, pass: string): Promise<boolean> => {
    const cleanEmail = email.trim().toLowerCase();
    
    if ((cleanEmail === 'admin@ansh.dev' || cleanEmail === 'admin') && pass === 'anshadmin2026') {
      const adminUser: AdminUser = {
        email: cleanEmail === 'admin' ? 'admin@ansh.dev' : cleanEmail,
        name: 'Ansh Admin',
        role: 'admin',
        token: `jwt_${Math.random().toString(36).substring(2)}_${Date.now()}`
      };
      setUser(adminUser);
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(adminUser));
      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(AUTH_STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
