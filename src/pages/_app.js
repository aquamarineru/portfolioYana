import '@/styles/globals.css'
import Header from '@/components/Header'
import { useState, useEffect } from 'react';
import Footer from '@/components/Footer';

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
    )
}
