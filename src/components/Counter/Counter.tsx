import { useState, useEffect } from 'react';

import { useThemeContext } from '@components/Theme/ThemeProvider';

export const Counter = () => {
  const [count, setCount] = useState(0);
  const context = useThemeContext();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((value: number) => value + 1);
    }, 1000);

    document.body.style.background = '#3498db';
    // document.documentElement.style.setProperty('--primary', 'dark');

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // 1. inline styles
  const styles = {
    background: context?.theme === 'dark' ? 'black' : 'white',
    color: context?.theme === 'dark' ? 'white' : 'black',
  };
  // 2. css modules
  // 3. additional className
  // 4. styled componenty

  return <div style={styles}>{count}</div>;
};
