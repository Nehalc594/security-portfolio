// src/pages/Home.jsx
import React from 'react';

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <img
        src="/images/profile.png"
        alt="Nehal Chowhan"
        className="w-40 h-40 rounded-full shadow-lg mb-6 object-cover border-4 border-white"
      />
      
      <h1 className="text-5xl font-bold mb-4 tracking-tight">Nehal Chowhan</h1>

      <h2 className="text-2xl md:text-3xl font-medium mb-4 text-yellow-400">
        Security Engineer | App & Network Security | ZTNA | DevSecOps
      </h2>

      <p className="max-w-2xl text-lg text-gray-300 mb-8 leading-relaxed">
        I help organizations secure systems through threat modeling, zero-trust architecture, and security automation. Let's build a safer future — one layer at a time.
      </p>

      <a
        href="/#projects"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded shadow-lg transition duration-300"
      >
        View My Projects
      </a>
    </section>
  );
};

export default Home;
