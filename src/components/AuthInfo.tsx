import { Auth, AuthContext } from '../AuthContext';
import { AuthStatus } from './AuthStatus';

const contextValue: Auth = {
  isLoggedIn: false,
  username: '',
};

export const AuthInfo = () => {
  return (
    <AuthContext.Provider value={contextValue}>
      <AuthStatus />
    </AuthContext.Provider>
  );
}