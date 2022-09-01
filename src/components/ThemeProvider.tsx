import { useState, createContext, useContext } from 'react';

// type ThemeName = 'light' | 'dark';
enum ThemeName {
  LIGHT = 'light',
  DARK = 'dark'
}

const useTheme = () => {
  // const [theme, setTheme] = useState<ThemeName>('light');
  const [theme, setTheme] = useState<ThemeName>(ThemeName.LIGHT);

  const toggleTheme = () => {
    // setTheme(theme === 'light' ? 'dark' : 'light');
    setTheme(theme === ThemeName.LIGHT ? ThemeName.DARK : ThemeName.LIGHT);
  }

  return { theme, toggleTheme };
}

type Theme = {
  theme: ThemeName;
  toggleTheme: () => void;
}

const ThemeContext = createContext<Theme | null>(null);
export const useThemeContext = () => useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <ThemeContext.Provider value={{
      theme,
      toggleTheme
    }}>
      {children}
    </ThemeContext.Provider>
  );
}