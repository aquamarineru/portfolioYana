import '@/styles/globals.css'
import { useState, useEffect } from 'react';



export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');
  const colorTheme = theme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
};

export default function App({ Component, pageProps }) {
  return (
    <div className="bg-light dark:bg-dark min-h-max">
        <Component {...pageProps} />

    </div>
    )
}
