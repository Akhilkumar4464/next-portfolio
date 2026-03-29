"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { staggerContainer, textVariant, hoverBounce } from "../utils/animations";

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
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-violet-50 to-white"
    >
      <motion.h1
        variants={textVariant}
        className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
      >
        Hi, I'm <span className="text-violet-600">Akhil Kumar</span>
      </motion.h1>

      <motion.p
        variants={textVariant}
        className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl"
      >
        A passionate <span className="font-semibold">Full Stack Developer</span> who loves
        building beautiful web experiences and solving real-world problems with code.
      </motion.p>

      <motion.div
        variants={textVariant}
        className="mt-10 flex gap-4"
      >
        <motion.a
          whileHover={hoverBounce.scale ? { scale: hoverBounce.scale } : { scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#projects"
          className="px-6 py-3 rounded-2xl bg-violet-600 text-white font-medium shadow-md hover:bg-violet-700 transition"
        >
          View Projects
        </motion.a>
        <motion.a
          whileHover={hoverBounce.scale ? { scale: hoverBounce.scale } : { scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className="px-6 py-3 rounded-2xl bg-gray-100 text-gray-800 font-medium shadow hover:bg-gray-200 transition"
        >
          Contact Me
        </motion.a>
      </motion.div>

      {/* Scroll indicator with click scroll logic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.2,
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={handleScroll}
        className="absolute bottom-10 flex flex-col items-center text-violet-600 cursor-pointer"
      >
        <ArrowDown className="w-6 h-6" />
        <span className="text-sm mt-1">Scroll</span>
      </motion.div>
    </motion.section>
  );
}
