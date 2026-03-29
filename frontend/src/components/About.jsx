"use client";

import React from "react";
import { motion } from "framer-motion";
import { textVariant, slideSpringFromLeft, slideSpringFromRight } from "../utils/animations";

// About.jsx
// - Tailwind-based About Me section
// - Profile image placeholder + bio + quick info

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-20 bg-white"
    >
      <motion.h2
        variants={textVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 text-center"
      >
        About <span className="text-violet-600">Me</span>
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Profile image */}
        <motion.div
          variants={slideSpringFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <motion.img
            whileHover={{ scale: 1.05, rotate: -2, transition: { type: "spring", stiffness: 300 } }}
            src="/akhil.jpg"
            alt="Profile"
            className="w-64 h-64 rounded-2xl object-cover shadow-xl cursor-pointer"
          />
        </motion.div>

        {/* Bio content */}
        <motion.div
          variants={slideSpringFromRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Hello! I'm <span className="font-semibold">Akhil Kumar </span>, a passionate
            web developer with a love for creating beautiful, user-friendly digital
            experiences. I specialize in modern web technologies and enjoy solving
            problems through clean and efficient code.
          </p>

          <ul className="grid grid-cols-2 gap-y-3 text-gray-700">
            <li><span className="font-semibold">Name:</span> Akhil Kumar </li>
            <li><span className="font-semibold">Role:</span> Full Stack Developer</li>
            <li><span className="font-semibold">Email:</span> niteshsharma4464@gmail.com</li>
            <li><span className="font-semibold">Location:</span> neemrana , India  </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}