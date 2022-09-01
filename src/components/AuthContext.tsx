import { createContext } from "react";

type User = {
  isLogged: boolean;
  nick: string;
}

export const AuthContext = createContext<User | null>(null);

// export const userContext = () => useContext(AuthContext);