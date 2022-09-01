import { useState, useEffect } from 'react';

export const useViewPort = () => {
  const [size, setSize] = useState({ x: 0, y: 0});

  useEffect(() => {
    const resize = () => {
      setSize({
        x: window.innerWidth,
        y: window.innerHeight,
      });
    }

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);

  return size;
}