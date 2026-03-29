"use client"
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone } from "lucide-react";
import { staggerContainer, bounceItem, hoverBounce, textVariant } from "../utils/animations";

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
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center"
      >
        My <span className="text-violet-600">Skills</span>
      </motion.h2>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            variants={bounceItem}
            whileHover={hoverBounce}
            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center cursor-pointer transition-shadow hover:shadow-xl"
          >
            <motion.div 
              whileHover={{ rotate: [0, -10, 10, -10, 10, 0], transition: { duration: 0.5 } }}
              className="mb-2"
            >
              {skill.icon}
            </motion.div>
            <h3 className="mt-4 text-lg font-semibold text-gray-800">{skill.title}</h3>
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">{skill.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}