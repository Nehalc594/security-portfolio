// src/Layout.jsx
import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import Footer from './components/Footer';

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;
    setDarkMode(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-800 dark:text-white flex flex-col">
      <header className="bg-[#0c1b3a] dark:bg-gray-900 shadow-md sticky top-0 z-50 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            
            <span className="text-2xl font-semibold"> </span>
          </Link>

          <nav className="hidden md:flex gap-6 items-center">
            <Link to="/" className="hover:text-yellow-400">Home</Link>
            <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
            <Link to="/resume" className="hover:text-yellow-400">Resume</Link>
            <Link to="/skills" className="hover:text-yellow-400">Skills</Link>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
            <button
              onClick={toggleTheme}
              className="ml-4 text-xl hover:text-yellow-300"
              title="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </nav>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-[#0c1b3a] px-4 py-2 space-y-3 text-center">
            <Link to="/" className="block" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/projects" className="block" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/resume" className="block" onClick={() => setMenuOpen(false)}>Resume</Link>
            <Link to="/skills" className="block" onClick={() => setMenuOpen(false)}>Skills</Link>
            <Link to="/contact" className="block" onClick={() => setMenuOpen(false)}>Contact</Link>
            <button
              onClick={toggleTheme}
              className="mt-2 text-xl"
              title="Toggle dark mode"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
