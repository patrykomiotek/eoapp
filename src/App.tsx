import './App.css';

import { AuthProvider } from '@components/Auth/AuthProvider';
import { ThemeProvider } from '@components/Theme/ThemeProvider';
import { ThemeSwitcher } from '@components/Theme/ThemeSwitcher';
import { AuthCredentials } from '@components/Auth/AuthCredentials';
import { Clicker } from '@components/Clicker/Clicker';
import { Counter } from '@components/Counter/Counter';
import { Products } from '@components/Products';
import { Orders } from '@components/Orders/Orders';
import { LoginForm } from '@components/LoginForm/LoginForm';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
            {/* <LoginForm /> */}
            <Products />
          </AuthProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
