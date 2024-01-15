import { auth } from '@/util';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { ReactNode } from 'react';

const initialAuthContext = {
  user: null,
};

type AuthProps = {
  children: ReactNode;
};

export const AuthContext = createContext(initialAuthContext);

export const AuthProvider = ({ children }: AuthProps) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
};
