/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import api, { User } from '../api';


export type AuthContextType = {
  user: User|null;
  login: (email: string, password: string) => Promise<User | {error: string}>;
  logout: () => void;
  register: (username: string, email: string, password: string) => Promise<{message: string, error: string}>;
  isAuthenticated: () => boolean;
};

const AuthContext = createContext(
  {} as AuthContextType
);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: ReactNode}) => {
  const [user, setUser] = useState<User|null>(null);

  // Function to handle user login
  const login = async (email: string, password: string) => {
    try {
      console.log('Logging in user...', email, password);
      const response: User = await api.login({ email, password });
      setUser(response);
      localStorage.setItem('user', JSON.stringify(response));
      return response;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };


  // Function to handle user registration
  const register = async (username: string, email: string, password: string): Promise<{message: string, error: string}> => {
    try {
      const data = await api.register({username, email, password});
      // setUser(response.data.user);
      // localStorage.setItem('user', JSON.stringify(response.data.user));
      return data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  };

  // Function to handle user logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');

    console.log(user);
  };

  // Function to check if a user is authenticated
  const isAuthenticated = () => {
    const user = localStorage.getItem('user');
    return user !== null;
  };

  useEffect(() => {
    // Check if the user is already authenticated from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout, register, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};