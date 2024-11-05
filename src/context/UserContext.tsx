"use client";

import { createContext, useState, useEffect, useContext } from 'react';

interface UserProviderProps {
  children: React.ReactNode;
  email: string;
}

interface UserContextValue {
  user: User | null;
  error: string | null;
  loading: boolean;
  updateUser: (updatedUser: Partial<User>) => void;
}

interface Transaction {
  id: string;
  type: string;
  value: number;
  label: string;
  date: string;
  userId: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  profession: string;
  fixedIncome: number;
  payOff: number;
  currency: string;
  transactions: Transaction[];
}

const UserContext = createContext<UserContextValue>({
  user: null,
  error: null,
  loading: true,
  updateUser: () => {},
});

export function UserProvider({ children, email }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/user?email=${email}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }
        const data = await response.json();
        setUser(data);
        setError(null);
      } catch (err) {
        setError((err as Error).message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    if (email) {
      fetchUserData();
    }
  }, [email]);

  const updateUser = (updatedUser: Partial<User> | { transactions: Transaction[] }) => {
    setUser((prevUser) => {
      if (!prevUser) return null;
  
      if ('transactions' in updatedUser) {
        return { ...prevUser, transactions: updatedUser.transactions ?? [] }; 
      }
  
      return { ...prevUser, ...updatedUser }; 
    });
  };
  

  return (
    <UserContext.Provider value={{ user, error, loading, updateUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
