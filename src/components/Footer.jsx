// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center py-6 text-sm text-gray-500 dark:text-gray-400">
      © {new Date().getFullYear()} Nehal Chowhan. All rights reserved.
    </footer>
  );
};

export default Footer;
