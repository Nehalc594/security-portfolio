// src/pages/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <motion.img
          src="/images/profile.png"
          alt="Nehal Chowhan"
          className="w-52 h-52 object-cover rounded-full border-4 border-blue-600 shadow-md"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />

        <div className="flex-1 text-lg leading-8 text-gray-700 dark:text-gray-300">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            I'm <strong>Nehal Chowhan</strong>, a passionate Security Engineer dedicated to helping businesses strengthen their digital defenses.
          </motion.p>

          <motion.p
            className="mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            I specialize in designing secure architectures, implementing Zero Trust principles, and building tools like a custom ZTNA Gateway using Go, Docker, and WireGuard. Let's collaborate and build a safer digital future.
          </motion.p>
        </div>
      </div>

      {/* Career Timeline */}
      <div className="mt-20">
        <motion.h3
          className="text-2xl font-semibold mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Career Journey
        </motion.h3>

        <div className="space-y-8 border-l-4 border-blue-600 pl-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold">2025 – Present</h4>
            <p>Founder & Security Engineer at Nexola Tech – Leading security projects including ZTNA design and firewall infrastructure deployments for clients.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold">2023 – 2024</h4>
            <p>Security Intern – Gained hands-on experience in threat detection, Splunk alert tuning, and vulnerability assessments using OWASP and NIST frameworks.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-xl font-bold">2021 – 2023</h4>
            <p>Master’s in Cybersecurity – Developed expertise in application security, cryptography, and secure cloud architecture while working on academic projects.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
