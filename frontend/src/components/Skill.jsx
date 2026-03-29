"use client"
import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Server, Layers } from "lucide-react";
import { staggerContainer, bounceItem, textVariant, hoverLift } from "../utils/animations";

// Skills.jsx
const skills = [
  {
    icon: <Code className="w-12 h-12 text-violet-500 group-hover:text-white transition-colors duration-300 relative z-10" />,
    title: "Frontend Engineering",
    description: "Building responsive UIs with React, Next.js, and modern CSS frameworks like Tailwind.",
    glow: "hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]",
    bgHover: "bg-violet-600",
  },
  {
    icon: <Database className="w-12 h-12 text-indigo-500 group-hover:text-white transition-colors duration-300 relative z-10" />,
    title: "Database Architecture",
    description: "Designing schemas and managing data with MongoDB, PostgreSQL, and Prisma ORM.",
    glow: "hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]",
    bgHover: "bg-indigo-600",
  },
  {
    icon: <Server className="w-12 h-12 text-blue-500 group-hover:text-white transition-colors duration-300 relative z-10" />,
    title: "Backend Development",
    description: "Creating robust REST APIs and microservices using Node.js, Express, and Serverless architectures.",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]",
    bgHover: "bg-blue-600",
  },
  {
    icon: <Globe className="w-12 h-12 text-emerald-500 group-hover:text-white transition-colors duration-300 relative z-10" />,
    title: "Web Optimization",
    description: "Implementing advanced caching strategies, SEO tuning, and high-performance Web Vitals.",
    glow: "hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]",
    bgHover: "bg-emerald-600",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24 bg-gray-50/50"
    >
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-heading">
          Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Arsenal</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto px-4">
          A full spectrum of web technologies to bring any digital product from conception to production.
        </p>
      </motion.div>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4 w-full"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            variants={bounceItem}
            whileHover={hoverLift}
            className={`group bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 p-8 flex flex-col items-start transition-all duration-500 ${skill.glow} relative overflow-hidden`}
          >
            {/* Hover background expanding circle */}
            <div className={`absolute top-0 right-0 w-16 h-16 rounded-full -mt-8 -mr-8 scale-0 group-hover:scale-[30] origin-center transition-transform duration-700 ease-in-out ${skill.bgHover} opacity-0 group-hover:opacity-100`}></div>
            
            <div className="mb-6 bg-gray-50 group-hover:bg-white/20 p-4 rounded-2xl transition-colors duration-300 shadow-inner group-hover:shadow-none inline-block relative z-10">
              {skill.icon}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 font-heading group-hover:text-white transition-colors duration-300 relative z-10">
              {skill.title}
            </h3>
            
            <p className="mt-3 text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300 relative z-10">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}