// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="bg-gray-800 dark:bg-gray-950 text-white sticky top-0 z-50 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold tracking-wider">Nehal C | Security Engineer</Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/about" className="hover:text-yellow-400">About</Link>
          <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
          <Link to="/resume" className="hover:text-yellow-400">Resume</Link>
          <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          <button onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
        </nav>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 dark:bg-gray-950 px-4 pb-4 flex flex-col gap-4">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/projects" onClick={toggleMenu}>Projects</Link>
          <Link to="/resume" onClick={toggleMenu}>Resume</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <button onClick={toggleDarkMode}>{darkMode ? <FaSun /> : <FaMoon />}</button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
