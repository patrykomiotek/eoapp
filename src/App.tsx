import './App.css';

import { AuthProvider } from './components/AuthProvider';
import { ThemeProvider } from './components/ThemeProvider';
import { ThemeSwitcher } from './components/ThemeSwitcher';
import { AuthCredentials } from './components/AuthCredentials';
import { Clicker } from './components/Clicker';
import { Counter } from './components/Counter';
// import { Products } from './components/Products/Products';
import { ProductsQuery } from './components/Products/ProductsQuery';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()

const App = () => {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <AuthProvider>
            {/* <Products /> */}
            <ProductsQuery />
            {/* <ThemeSwitcher /> */}
            {/* <AuthCredentials /> */}
            {/* <Clicker /> */}
            {/* <Counter /> */}
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
