"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

// Projects.jsx (Next.js version)
// - Uses next/image for optimized images
// - Tailwind-based projects section
// - Replace placeholder data with your real projects

const projects = [

  {
    title: "Excel Analyzer App",
    description: "A web application to analyze Excel sheets with role-based access and dashboards.",
    image: "/excel.png", // Ensure this image is in the public folder
    github: "https://github.com/yourusername/excel-analyzer",
    demo: "https://excel-analyzer-demo.com",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product listings, cart, and secure checkout.",
    image: "/store.png", // Ensure this image is in the public folder
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center"
      >
        My <span className="text-violet-600">Projects</span>
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="w-full h-48 relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-violet-600 transition"
                >
                  <Github size={16} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-violet-600 transition"
                >
                  <ExternalLink size={16} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
