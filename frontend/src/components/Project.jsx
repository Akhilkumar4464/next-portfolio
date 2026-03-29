"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { staggerContainer, bounceItem, textVariant } from "../utils/animations";

// Projects.jsx (Next.js version)
// - Uses next/image for optimized images
// - Tailwind-based projects section
// - Replace placeholder data with your real projects

const projects = [

  {
    title: "Excel Analyzer App",
    description: "A web application to analyze Excel sheets with role-based access and dashboards.",
    image: "/excelpn.png", // Ensure this image is in the public folder
    github: "https://github.com/Akhilkumar4464/frontend-excel",
    demo: "https://excel-analyzer-demo.com",
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product listings, cart, and secure checkout.",
    image: "/store.png", // Ensure this image is in the public folder
    github: "https://github.com/Akhilkumar4464/PRO_Ecommerce",
    demo: "https://pro-ecommerce-theta.vercel.app/",
  },
  {
     title: "Freelance-platform By Akhil",
    description: "A full-stack freelance project that helps freshers to find work through freelancing and client find experienced devs on this platform",
    image: "/ff.png", // Ensure this image is in the public folder
    github: "https://github.com/Akhilkumar4464/freelance-platform",
    demo: "https://google.com",
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white"
    >
      <motion.h2
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-14 text-center"
      >
        My <span className="text-violet-600">Projects</span>
      </motion.h2>

      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={bounceItem}
            whileHover={{ y: -10, scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all cursor-pointer border border-gray-100/50"
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
      </motion.div>
    </section>
  );
}
