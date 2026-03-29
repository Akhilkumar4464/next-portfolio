"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, Code, Terminal, Monitor, Database, Cpu, Layers } from "lucide-react";
import { staggerContainer, textVariant, pulseGlow } from "../utils/animations";
import { TypeAnimation } from "react-type-animation";

// Hero.jsx
export default function Hero() {
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
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-violet-50/50"
    >
      {/* Movable gradient blobs */}
      <motion.div 
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0], scale: [1, 1.2, 0.8, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[30rem] h-[30rem] bg-violet-300/40 rounded-full mix-blend-multiply filter blur-3xl z-0"
      ></motion.div>
      <motion.div 
        animate={{ x: [0, -80, 50, 0], y: [0, 70, -30, 0], scale: [1, 0.9, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] right-[-10%] w-[28rem] h-[28rem] bg-indigo-300/30 rounded-full mix-blend-multiply filter blur-3xl z-0"
      ></motion.div>
      <motion.div 
        animate={{ x: [0, 50, -60, 0], y: [0, -30, 70, 0], scale: [1, 1.3, 0.9, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] left-[20%] w-[35rem] h-[35rem] bg-pink-300/30 rounded-full mix-blend-multiply filter blur-3xl z-0"
      ></motion.div>

      {/* Floating 3D-like structural icons */}
      <motion.div animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute hidden md:block top-[20%] left-[15%] text-violet-400 opacity-40 z-0">
        <Code size={48} />
      </motion.div>
      <motion.div animate={{ y: [0, 30, 0], rotate: [0, -20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute hidden sm:block bottom-[25%] left-[10%] text-indigo-400 opacity-30 z-0">
        <Database size={56} />
      </motion.div>
      <motion.div animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute hidden lg:block top-[30%] right-[15%] text-pink-400 opacity-40 z-0">
        <Terminal size={52} />
      </motion.div>
      <motion.div animate={{ y: [0, 25, 0], rotate: [0, 10, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="absolute hidden sm:block bottom-[30%] right-[12%] text-violet-300 opacity-50 z-0">
        <Layers size={44} />
      </motion.div>
      <motion.div animate={{ y: [0, -15, 0], rotate: [0, 25, 0] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="absolute hidden md:block top-[10%] right-[35%] text-indigo-300 opacity-30 z-0">
        <Monitor size={40} />
      </motion.div>

      <motion.div variants={textVariant} className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 font-heading mb-4">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Akhil Kumar</span>
        </h1>

        <div className="h-[80px] sm:h-[60px] md:h-[80px] flex items-center justify-center w-full">
          <TypeAnimation
            sequence={[
              "I'm a Full Stack Developer",
              1500,
              "I'm a Problem Solver",
              1500,
              "I build Web Applications",
              1500,
            ]}
            wrapper="h2"
            speed={50}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-700 font-heading"
            repeat={Infinity}
          />
        </div>

        <motion.p
          variants={textVariant}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl px-4"
        >
          Dedicated to crafting state-of-the-art web experiences. I turn complex problems into beautiful, intuitive, and highly functional digital solutions.
        </motion.p>

        <motion.div
          variants={textVariant}
          className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(124, 58, 237, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            animate={pulseGlow}
            href="#projects"
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg shadow-[0_0_15px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)] transition-shadow duration-300"
          >
            Deploy Magic
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="px-8 py-3.5 rounded-full bg-white/80 backdrop-blur-md text-gray-800 font-semibold text-lg border border-gray-200 shadow-sm hover:bg-gray-50 hover:border-violet-200 transition-colors duration-300"
          >
            Let's Talk
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with click scroll logic */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 15, 0] }}
        transition={{ delay: 1.2, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={handleScroll}
        className="absolute bottom-10 flex flex-col items-center text-violet-500 cursor-pointer hover:text-violet-700 transition-colors z-10"
      >
        <span className="text-xs uppercase tracking-widest font-semibold mb-2">Scroll</span>
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </motion.section>
  );
}
