"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { textVariant, slideSpringFromLeft, slideSpringFromRight, hoverLift, staggerContainer } from "../utils/animations";

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
      const response = await fetch('https://backend-next-pt21.onrender.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitMessage('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitMessage(''), 5000);
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
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24 bg-gradient-to-tr from-violet-50 via-white to-indigo-50"
    >
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-heading">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Touch</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto px-4">
          Have a project in mind or just want to say hi? Feel free to reach out.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12 w-full">
        {/* Contact Info */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-2 flex flex-col gap-6"
        >
          <motion.div variants={slideSpringFromLeft} whileHover={hoverLift} className="group flex items-center gap-6 bg-white p-6 rounded-3xl shadow-sm hover:shadow-[0_15px_30px_rgba(124,58,237,0.1)] cursor-pointer border border-gray-100 transition-all duration-300">
            <div className="bg-violet-50 p-4 rounded-full group-hover:bg-violet-600 transition-colors duration-300">
              <Mail className="w-7 h-7 text-violet-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">Email</p>
              <h4 className="text-base font-semibold text-gray-800 break-all">niteshsharma4464@gmail.com</h4>
            </div>
          </motion.div>

          <motion.div variants={slideSpringFromLeft} whileHover={hoverLift} className="group flex items-center gap-6 bg-white p-6 rounded-3xl shadow-sm hover:shadow-[0_15px_30px_rgba(124,58,237,0.1)] cursor-pointer border border-gray-100 transition-all duration-300">
            <div className="bg-indigo-50 p-4 rounded-full group-hover:bg-indigo-600 transition-colors duration-300">
              <Phone className="w-7 h-7 text-indigo-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">Phone</p>
              <h4 className="text-base font-semibold text-gray-800">+91 77423 04464</h4>
            </div>
          </motion.div>

          <motion.div variants={slideSpringFromLeft} whileHover={hoverLift} className="group flex items-center gap-6 bg-white p-6 rounded-3xl shadow-sm hover:shadow-[0_15px_30px_rgba(124,58,237,0.1)] cursor-pointer border border-gray-100 transition-all duration-300">
            <div className="bg-emerald-50 p-4 rounded-full group-hover:bg-emerald-600 transition-colors duration-300">
              <MapPin className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-sm text-gray-400 font-medium mb-1">Location</p>
              <h4 className="text-base font-semibold text-gray-800">Jaipur, Rajasthan</h4>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={slideSpringFromRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-3 bg-white p-8 md:p-10 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gray-50 flex flex-col gap-6 w-full relative overflow-hidden"
        >
          {submitMessage && (
            <div className={`absolute top-4 right-4 left-4 p-4 rounded-2xl text-center font-medium animate-pulse ${submitMessage.includes('error') ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>
              {submitMessage}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600 ml-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white focus:border-transparent transition-all placeholder:text-gray-400"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-600 ml-1">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white focus:border-transparent transition-all placeholder:text-gray-400"
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-gray-600 ml-1">Your Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              rows="5"
              required
              className="w-full px-5 py-4 bg-gray-50/50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-500 focus:bg-white focus:border-transparent transition-all placeholder:text-gray-400 resize-none"
            ></textarea>
          </div>
          
          <motion.button
            whileHover={!isSubmitting ? hoverLift : {}}
            whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            type="submit"
            disabled={isSubmitting}
            className="group flex items-center justify-center gap-3 w-full sm:w-auto self-start mt-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg rounded-2xl shadow-[0_10px_20px_rgba(124,58,237,0.2)] hover:shadow-[0_15px_30px_rgba(124,58,237,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            {!isSubmitting && <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
