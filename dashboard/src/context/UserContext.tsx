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
  loading: true
});

export function UserProvider({ children, email }: UserProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/auth/user/router?email=${email}`);
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

  return (
    <UserContext.Provider value={{ user, error, loading }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
