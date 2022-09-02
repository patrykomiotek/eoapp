import './App.css';

import { AuthProvider } from './components/AuthProvider';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { AuthCredentials } from './components/AuthCredentials';
import { Clicker } from './components/Clicker';
import { Counter } from 'components/Counter';
import { Products } from './components/Products/Products';
import { Orders } from './components/Orders/Orders';
import { LoginForm } from './components/LoginForm/LoginForm';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient();

const App = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <AuthProvider>
            <ThemeSwitcher />
            {/* <AuthCredentials /> */}
            {/* <Clicker /> */}
            {/* <Counter /> */}
            {/* <Products /> */}
            {/* <Orders /> */}
            <LoginForm />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
