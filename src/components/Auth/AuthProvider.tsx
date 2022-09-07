import React, { useState, createContext, useContext } from 'react';

// 2.1 context type
type Auth = {
  isLogged: boolean;
  logIn: () => void;
  logOut: () => void;
  // logOut: MouseEvent<HTMLElement>;
  // nickname: string;
};

// 2.2 create context
const AuthContext = createContext<Auth | null>(null);
export const useAuthContext = () => useContext(AuthContext);

// 1. create hook
const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const logIn = () => {
    setIsLogged(true);
  };

  const logOut = () => {
    setIsLogged(false);
  };

  return { isLogged, logIn, logOut };
};

type AuthProviderProps = {
  children: React.ReactNode;
};

// 3. create provider
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const { isLogged, logIn, logOut } = useAuth();
  return (
    <AuthContext.Provider
      value={{
        isLogged,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
AuthProvider.displayName = 'AuthProvider222';
