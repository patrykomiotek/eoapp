import './App.css';

import { AuthProvider } from './components/AuthProvider';
import { AuthCredentials } from './components/AuthCredentials';

const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <AuthCredentials />
      </AuthProvider>
    </div>
  );
}

export default App;
