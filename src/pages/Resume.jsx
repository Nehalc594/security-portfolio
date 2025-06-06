// src/pages/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section className="px-6 py-20 text-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold mb-6">My Resume</h2>
      <p className="mb-8 text-lg max-w-xl mx-auto">
        View or download the PDF version of my resume. You can also connect with me professionally on LinkedIn.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <a
          href="/resume.pdf"
          download
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded transition duration-300"
        >
          📄 Download Resume
        </a>
        <a
          href="https://www.linkedin.com/in/nehal-chowhan/"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 font-semibold px-6 py-3 rounded transition duration-300"
        >
          🔗 View LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Resume;
