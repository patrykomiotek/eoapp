import './App.css';

import { AuthProvider } from './components/AuthProvider';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { AuthCredentials } from './components/AuthCredentials';
import { Clicker } from './components/Clicker';
import { Counter } from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <AuthProvider>
          <ThemeSwitcher />
          {/* <AuthCredentials /> */}
          {/* <Clicker /> */}
          <Counter />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
