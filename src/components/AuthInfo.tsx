import { useContext } from 'react';
import { AuthContext } from './AuthContext';

export const AuthInfo = () => {
  const context = useContext(AuthContext);

  return (
    <p>Logged in: {context?.isLogged ? 'YES' : 'No'}</p>
  );
}
