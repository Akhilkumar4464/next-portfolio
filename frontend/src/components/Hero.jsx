"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

// Hero.jsx
export default function Hero() {
  // Scroll handler
  const handleScroll = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-violet-50 to-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
      >
        Hi, I'm <span className="text-violet-600">Akhil Kumar</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        A passionate <span className="font-semibold">Full Stack Developer</span> who loves
        building beautiful web experiences and solving real-world problems with code.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-2xl bg-violet-600 text-white font-medium shadow-md hover:bg-violet-700 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-2xl bg-gray-100 text-gray-800 font-medium shadow hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Scroll indicator with click scroll logic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 0.6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        onClick={handleScroll}
        className="absolute bottom-10 flex flex-col items-center text-violet-600 cursor-pointer"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
        <span className="text-sm mt-1">Scroll</span>
      </motion.div>
    </section>
  );
}
