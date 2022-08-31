import { AuthProvider } from '../providers/AuthProvider';
import { AuthChanger } from '../components/AuthChanger';

export const AuthContainer = () => {
  return (
    <AuthProvider>
      <AuthChanger />
    </AuthProvider>
  );
}
