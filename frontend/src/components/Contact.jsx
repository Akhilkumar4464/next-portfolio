"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

// Contact.jsx (Next.js)
// - Contact section with form + info cards
// - Form submits to backend API for storing in MongoDB

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitMessage(result.error || 'Failed to send message.');
      }
    } catch (error) {
      setSubmitMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-violet-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center"
      >
        Get in <span className="text-violet-600">Touch</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 w-full">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
            <Mail className="w-6 h-6 text-violet-600" />
            <span className="text-gray-700">niteshsharma4464@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
            <Phone className="w-6 h-6 text-violet-600" />
            <span className="text-gray-700">+91 77423 04464</span>
          </div>
          <div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-md">
            <MapPin className="w-6 h-6 text-violet-600" />
            <span className="text-gray-700">Jaipur Rajasthan</span>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md flex flex-col gap-5 text-gray-800"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 bg-violet-600 text-white font-medium rounded-lg shadow hover:bg-violet-700 transition disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitMessage && <p className="text-center text-sm text-gray-600">{submitMessage}</p>}
        </motion.form>
      </div>
    </section>
  );
}
