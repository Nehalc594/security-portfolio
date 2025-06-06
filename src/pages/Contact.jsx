// src/pages/Contact.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="px-6 py-20 max-w-xl mx-auto text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-8 text-gray-600 dark:text-gray-300"
      >
        Let's connect. Whether you're a recruiter, collaborator, or just curious — drop a message below.
      </motion.p>

      <motion.form
        action="https://formspree.io/f/xwpbknae"
        method="POST"
        className="space-y-5 text-left"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-600"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-600"
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          rows="5"
          className="w-full p-3 rounded border dark:bg-gray-800 dark:border-gray-600"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-300"
        >
          Send Message
        </button>
      </motion.form>
    </motion.section>
  );
};

export default Contact;
