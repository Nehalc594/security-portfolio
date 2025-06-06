// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-gray-900 to-black text-white"
    >
      <h1 className="text-5xl font-bold mb-6">Nehal C</h1>
      <h2 className="text-2xl mb-4">
        Security Engineer | Application & Network Security | ZTNA Architect
      </h2>
      <p className="max-w-2xl text-lg">
        I help organizations build secure systems through threat modeling, zero-trust architecture, and advanced defense tooling. Let’s secure the future — one system at a time.
      </p>
    </motion.section>
  );
};

export default Home;
