// src/pages/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Zero Trust ZTNA Gateway',
    description: 'Built a WireGuard-based Zero Trust Gateway with OAuth2/JWT authentication, dynamic IP allocation, and iptables-based access control using Go and Docker.',
    stack: ['Go', 'WireGuard', 'OAuth2', 'iptables', 'Docker'],
    impact: 'Enabled secure remote access with a lightweight, scalable gateway architecture.',
  },
  {
    title: 'Firewall Configuration Project',
    description: 'Configured a firewall that reduced unauthorized access attempts by 90% and improved response time with real-time logging and monitoring.',
    stack: ['pfSense', 'Syslog', 'Suricata', 'Grafana'],
    impact: 'Enhanced network perimeter defense and incident visibility.',
  },
  {
    title: 'SIEM Threat Detection',
    description: 'Implemented custom Splunk rules and dashboards for insider threat detection, credential misuse, and anomaly tracking.',
    stack: ['Splunk', 'Regex', 'Linux', 'Active Directory'],
    impact: 'Reduced threat detection time by 70% and automated alert triage.',
  },
];

const Projects = () => {
  return (
    <section className="px-6 py-20 max-w-6xl mx-auto">
      <motion.h2
        className="text-3xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Cybersecurity Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
            <p className="text-sm mb-2">
              <span className="font-semibold text-gray-600 dark:text-gray-400">Tech Stack:</span>{' '}
              {project.stack.join(', ')}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">{project.impact}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
