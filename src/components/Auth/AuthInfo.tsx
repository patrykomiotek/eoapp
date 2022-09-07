// import { useContext } from 'react';
// import { AuthContext } from './AuthContext';
import { useAuthContext } from './AuthProvider';

export const AuthInfo = () => {
  const context = useAuthContext();

  const handleClick = () => {
    if (context?.isLogged) {
      context?.logOut();
    } else {
      context?.logIn();
    }
  };

  return (
    <div>
      <p>Logged in: {context?.isLogged ? 'YES' : 'No'}</p>
      <button onClick={handleClick}>Change me</button>
    </div>
  );
};
