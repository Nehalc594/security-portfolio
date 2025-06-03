// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Cybersecurity Projects</h2>
      <ul className="space-y-6">
        <li>
          <h3 className="text-xl font-bold">Zero Trust ZTNA Gateway</h3>
          <p>Built a WireGuard-based Zero Trust Gateway with OAuth2/JWT auth, dynamic IP management, and iptables-based access control using Go and Docker.</p>
        </li>
        <li>
          <h3 className="text-xl font-bold">Firewall Configuration Project</h3>
          <p>Configured a firewall that reduced unauthorized access attempts by 90%, implemented real-time logging and monitoring for rapid incident response.</p>
        </li>
        <li>
          <h3 className="text-xl font-bold">SIEM Threat Detection</h3>
          <p>Implemented Splunk-based monitoring and alerting rules for insider threats and suspicious login patterns, decreasing detection time by 70%.</p>
        </li>
      </ul>
    </section>
  );
};

export default Projects;