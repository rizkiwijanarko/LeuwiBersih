import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  points: number;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // In a real application, you would make an API call to verify credentials
    // For this example, we'll simulate a successful login
    const user: User = { 
      id: '1', 
      name: email === 'admin@example.com' ? 'Admin User' : 'John Doe', 
      email, 
      role: email === 'admin@example.com' ? 'admin' : 'user', 
      points: 100 
    };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    
    // Redirect based on user role
    if (user.role === 'admin') {
      navigate('/admin/dashboard');
    } else {
      navigate('/');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    // In a real application, you would make an API call to create a new user
    // For this example, we'll simulate a successful registration
    const user: User = { id: '1', name, email, role: 'user', points: 0 };
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};