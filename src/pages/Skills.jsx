// src/pages/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';

const skills = {
  'Security Tools': ['Splunk', 'Burp Suite', 'Nmap', 'Wireshark', 'Metasploit'],
  'Programming & Scripting': ['Python', 'Go', 'Bash', 'JavaScript'],
  'Cloud & Infra': ['AWS', 'Docker', 'WireGuard', 'Linux', 'iptables'],
  'Frameworks & Practices': ['Zero Trust', 'MITRE ATT&CK', 'OWASP Top 10', 'NIST', 'ISO 27001'],
  'Soft Skills': ['Problem Solving', 'Collaboration', 'Communication', 'Adaptability', 'Critical Thinking'],
};

const Skills = () => {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Technical Skills
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {Object.entries(skills).map(([category, items], index) => (
          <motion.div
            key={category}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">{category}</h3>
            <ul className="flex flex-wrap gap-3 text-sm text-gray-700 dark:text-gray-200">
              {items.map(skill => (
                <li key={skill} className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full">
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
