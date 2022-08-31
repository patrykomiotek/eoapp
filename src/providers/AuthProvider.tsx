import React, { useState, createContext, useContext, MouseEventHandler } from 'react';

export type Auth = {
  isLoggedIn: boolean;
  logIn: MouseEventHandler<HTMLElement>;
  logOut: MouseEventHandler<HTMLElement>;
}

export const AuthContext = createContext<Auth | null>(null);

export const useAuthContext = () => useContext(AuthContext);

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const logIn = () => {
    setIsLoggedIn(true);
  }

  const logOut = () => {
    setIsLoggedIn(false);
  }

  return { isLoggedIn, logIn, logOut };
}

type TAuthProvider = {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: TAuthProvider) => {
  const { isLoggedIn, logIn, logOut } = useAuth();

  return (
    <AuthContext.Provider value={{
      isLoggedIn,
      logIn,
      logOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };
