import { useAuthContext } from '../providers/AuthProvider';

export const AuthChanger = () => {
  const context = useAuthContext();

  return (
    <div>
      <h2>Status: {context?.isLoggedIn ? 'Yes' : 'No' }</h2>
      <button onClick={context?.logIn}>Log in</button>
      <button onClick={context?.logOut}>Log out</button>
    </div>
  );
}
