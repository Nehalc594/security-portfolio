// src/pages/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section className="px-6 py-20 text-center">
      <h2 className="text-3xl font-semibold mb-4">My Resume</h2>
      <p className="mb-6">Download the PDF version of my resume for more details.</p>
      <a
        href="/resume.pdf"
        download
        className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;