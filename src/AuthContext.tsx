import { createContext } from 'react';

export type Auth = {
  isLoggedIn: boolean;
  username: string;
}

export const AuthContext = createContext<Auth | null>(null);
