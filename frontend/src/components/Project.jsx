"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { staggerContainer, slideUpFade, textVariant, hoverLift } from "../utils/animations";

// Projects.jsx (Next.js version)
const projects = [
  {
    title: "DataVision-AI",
    description: "A web application to analyze Excel sheets with role-based access and interactive dashboards.",
    image: "/excelpn.png",
    github: "https://github.com/Akhilkumar4464/DataVision-Ai",
    demo: "https://data-vision-ai-zeta.vercel.app/",
    tags: ["Next.js","Mongodb","typescript", "Node.js", "Chart.js"],
  },
  {
    title: "GetYourDestination",
    description: "A tool that provides personalized resume recommendations based on job descriptions , self description using AI.",
    image: "/getyourDestination.png",
    github: "https://github.com/Akhilkumar4464/GetYourDestination",
    demo: "https://get-your-destination-8qb3.vercel.app/login",
    tags: ["MongoDb", "Express", "React", "Node.js"],
  },
  {
    title: "Daily-Hunt",
    description: "A dual-sided marketplace tailored for software freelancers and tech clients to connect successfully securely.",
    image: "/daily-Hunt.png",
    github: "https://github.com/Akhilkumar4464/Daily-Hunt-",
    demo: "https://daily-hunt-2ftg.vercel.app/",
    tags: ["Next.js","Mongodb","typeScipt","TailwindCSS"],
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 py-24 bg-white"
    >
      <motion.div
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-heading">
          Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Projects</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto px-4">
          A selection of my recent works highlighting my skills in full-stack development.
        </p>
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3 w-full"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            variants={slideUpFade}
            whileHover={hoverLift}
            className="group flex flex-col bg-white rounded-3xl overflow-hidden cursor-pointer border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(124,58,237,0.1)] transition-shadow duration-500"
          >
            <div className="w-full h-56 sm:h-64 relative overflow-hidden bg-gray-100">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-violet-100">
                  <Code className="w-16 h-16 text-violet-300" />
                </div>
              )}
              {/* Subtle gradient overlay to push image forward */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-heading group-hover:text-violet-600 transition-colors duration-300">
                {project.title}
              </h3>

              <div className="flex flex-wrap gap-2 mt-3 mb-4">
                {project.tags?.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-violet-50 text-violet-700 text-xs font-semibold rounded-full border border-violet-100">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                {project.description}
              </p>

              <div className="flex items-center justify-between gap-4 mt-auto border-t border-gray-100 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:text-gray-900 border border-transparent hover:border-gray-200 transition-all"
                >
                  <Github size={18} /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 flex-1 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md hover:shadow-lg hover:from-violet-700 hover:to-indigo-700 transition-all transform hover:-translate-y-0.5"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
