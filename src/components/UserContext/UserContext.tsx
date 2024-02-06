import React, { createContext, useContext, useEffect, useState } from 'react';
import { TProps, TUserContextType } from './types';
import { TUser } from '../../types/types';
import { authorized } from '../../api/browser-api/authorized';

export const UserContext = createContext<TUserContextType>({
  user: null,
  login: () => {},
  logout: () => {},
  getUser: () => ({ login: '', isAuthorized: false }),
});

export const UserProvider: React.FC<TProps> = ({ children }) => {
  const [user, setUser] = useState<TUser | null>(null);

  const login = (newUser: TUser) => {
    setUser(newUser);
    authorized.set(newUser);
  };

  const logout = () => {
    setUser(null);
    authorized.remove();
  };

  const getUser = () => authorized.get();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (Object.keys(context).length === 0) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
