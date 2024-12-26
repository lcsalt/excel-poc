import React, { useState, useEffect, useContext, createContext } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
}

export type AuthContextType = {
  user: User | null;
  signin: (email: string, password: string) => Promise<User | null>;
  register: (email: string, password: string) => Promise<User | null>;
  signout: () => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  confirmPasswordReset: (code: string, password: string) => Promise<void>;
};

const authContext = createContext<AuthContextType | undefined>(undefined);

export function ProvideAuth({ children }: { children: React.ReactNode }) {
  const _auth = useProvideAuth();
  return <authContext.Provider value={_auth}>{children}</authContext.Provider>;
}

export default function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  const signin = async (email: string, password: string): Promise<User | null> => {
    // Replace with sign-in
    const response = await fakeSignInApi(email, password);
    if (response) {
      setUser(response);
      sessionStorage.setItem('user', JSON.stringify(response));
      return response;
    }
    return null;
  };

  const register = async (email: string, password: string): Promise<User | null> => {
    // Replace with register
    const response = await fakeRegisterApi(email, password);
    if (response) {
      setUser(response);
      return response;
    }
    return null;
  };

  const signout = async () => {
    // Replace with signout
    setUser(null);
    sessionStorage.clear();
  };

  const sendPasswordResetEmail = async (email: string): Promise<void> => {
    // Replace with password reset
    await fakePasswordResetApi(email);
  };

  const confirmPasswordReset = async (code: string, password: string): Promise<void> => {
    // Replace with password reset confirmation
    await fakeConfirmPasswordResetApi(code, password);
  };

  // Example for automatic user retrieval from session storage
  useEffect(() => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return {
    user,
    signin,
    register,
    signout,
    sendPasswordResetEmail,
    confirmPasswordReset
  };
}

// Example fake API functions
async function fakeSignInApi(email: string, password: string): Promise<User | null> {
  // Simulate an API call
  return { id: '1', name: 'John Doe', email };
}

async function fakeRegisterApi(email: string, password: string): Promise<User | null> {
  // Simulate an API call
  return { id: '1', name: 'John Doe', email };
}

async function fakePasswordResetApi(email: string): Promise<void> {
  // Simulate an API call
}

async function fakeConfirmPasswordResetApi(code: string, password: string): Promise<void> {
  // Simulate an API call
}
