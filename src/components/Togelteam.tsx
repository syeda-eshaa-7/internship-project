'use client'; // Mark this as a Client Component in Next.js 13+

import { useEffect, useState } from 'react';
import { BsSun, BsMoon } from 'react-icons/bs';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // On component mount, check the user's preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    }
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {darkMode ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
    </button>
  );
};

export default ThemeToggle;