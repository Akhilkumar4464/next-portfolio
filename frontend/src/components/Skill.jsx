"use client"
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone } from "lucide-react";

// Skills.jsx
// - Tailwind-based skills section
// - Animated skill cards with icons
// - Replace text with your actual skills

const skills = [
  {
    icon: <Code className="w-10 h-10 text-violet-600" />,
    title: "Frontend Development",
    description: "Building responsive UIs with React, Next.js, Tailwind CSS, and modern JavaScript.",
  },
  {
    icon: <Database className="w-10 h-10 text-violet-600" />,
    title: "Backend Development",
    description: "Experience with Node.js, Express, REST APIs, and database management (MongoDB, SQL).",
  },
  {
    icon: <Globe className="w-10 h-10 text-violet-600" />,
    title: "Web Technologies",
    description: "Knowledge of HTML5, CSS3, JavaScript (ES6+), and responsive web design principles.",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-violet-600" />,
    title: "Mobile Friendly Design",
    description: "Creating mobile-first, cross-platform user experiences that work seamlessly on all devices.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-violet-50"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center"
      >
        My <span className="text-violet-600">Skills</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition"
          >
            {skill.icon}
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{skill.title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}