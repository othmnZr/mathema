import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUserPayment: () => void;
  updateProgress: (level: 'beginner' | 'intermediate' | 'advanced', score: number) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('mathMasteryUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const users = JSON.parse(localStorage.getItem('mathMasteryUsers') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userWithoutPassword = { ...foundUser };
      delete userWithoutPassword.password;
      setUser(userWithoutPassword);
      localStorage.setItem('mathMasteryUser', JSON.stringify(userWithoutPassword));
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    const users = JSON.parse(localStorage.getItem('mathMasteryUsers') || '[]');
    const existingUser = users.find((u: any) => u.email === email);
    
    if (existingUser) {
      return false;
    }

    const newUser = {
      id: Date.now().toString(),
      name,
      email,
      password,
      hasPaid: false,
      progress: {
        beginner: 0,
        intermediate: 0,
        advanced: 0
      }
    };

    users.push(newUser);
    localStorage.setItem('mathMasteryUsers', JSON.stringify(users));
    
    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;
    setUser(userWithoutPassword);
    localStorage.setItem('mathMasteryUser', JSON.stringify(userWithoutPassword));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('mathMasteryUser');
  };

  const updateUserPayment = () => {
    if (user) {
      const updatedUser = { ...user, hasPaid: true };
      setUser(updatedUser);
      localStorage.setItem('mathMasteryUser', JSON.stringify(updatedUser));
      
      // Update in users array
      const users = JSON.parse(localStorage.getItem('mathMasteryUsers') || '[]');
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex].hasPaid = true;
        localStorage.setItem('mathMasteryUsers', JSON.stringify(users));
      }
    }
  };

  const updateProgress = (level: 'beginner' | 'intermediate' | 'advanced', score: number) => {
    if (user) {
      const currentProgress = user.progress[level];
      const newProgress = Math.max(currentProgress, score);
      const updatedUser = {
        ...user,
        progress: {
          ...user.progress,
          [level]: newProgress
        }
      };
      setUser(updatedUser);
      localStorage.setItem('mathMasteryUser', JSON.stringify(updatedUser));
      
      // Update in users array
      const users = JSON.parse(localStorage.getItem('mathMasteryUsers') || '[]');
      const userIndex = users.findIndex((u: any) => u.id === user.id);
      if (userIndex !== -1) {
        users[userIndex].progress[level] = newProgress;
        localStorage.setItem('mathMasteryUsers', JSON.stringify(users));
      }
    }
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      register,
      logout,
      updateUserPayment,
      updateProgress
    }}>
      {children}
    </AuthContext.Provider>
  );
};