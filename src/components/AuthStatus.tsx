import { useContext } from 'react';
import { AuthContext } from '../AuthContext';

export const AuthStatus = () => {
  const authContext = useContext(AuthContext);
  return (
    <div>
      Status: {authContext?.isLoggedIn ? "Yes" : "No"}
    </div>
  );
}