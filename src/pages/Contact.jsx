// src/pages/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section className="px-6 py-20 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-3 rounded border" required />
        <input type="email" placeholder="Email" className="w-full p-3 rounded border" required />
        <textarea placeholder="Message" className="w-full p-3 rounded border" rows="5" required></textarea>
        <button
          type="submit"
          className="w-full bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
