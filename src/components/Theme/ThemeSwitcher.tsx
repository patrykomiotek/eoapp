import { useThemeContext } from '@components/Theme/ThemeProvider';

export const ThemeSwitcher = () => {
  const context = useThemeContext();

  const handleClick = () => {
    context?.toggleTheme();
  };

  return (
    <div>
      <button onClick={handleClick}>Toggle</button>
    </div>
  );
};
