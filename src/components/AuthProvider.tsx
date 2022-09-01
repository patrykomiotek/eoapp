  import React, { useState, createContext, MouseEvent, MouseEventHandler, useContext } from 'react';

type Auth = {
  isLogged: boolean;
  logIn: () => void;
  logOut: () => void;
  // logOut: MouseEvent<HTMLElement>;
  // nickname: string;
}

const AuthContext = createContext<Auth | null>(null);
export const useAuthContext = () => useContext(AuthContext);

const useAuth = () => {
  const [isLogged, setIsLogged] = useState(false);

  const logIn = () => {
    setIsLogged(true);
  }

  const logOut = () => {
    setIsLogged(false);
  }

  return { isLogged, logIn, logOut };
}

type AuthProviderProps = {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps ) => {
  const { isLogged, logIn, logOut } = useAuth();
  return (
    <AuthContext.Provider value={{
      isLogged,
      logIn,
      logOut
    }}>
      {children}
    </AuthContext.Provider>
  );
}
// AuthProvider.displayName = 'AuthProvider';