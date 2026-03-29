"use client";

import React from "react";
import { motion } from "framer-motion";
import { textVariant, slideSpringFromLeft, slideSpringFromRight } from "../utils/animations";

export default function About() {
  return (
    <section
      id="about"
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
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Me</span>
        </h2>
        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto px-4">
          A glimpse into who I am and what drives me in the world of technology.
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-16 items-center w-full">
        {/* Profile image */}
        <motion.div
          variants={slideSpringFromLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center relative group"
        >
          {/* Decorative background blob */}
          <div className="absolute inset-0 bg-violet-200 rounded-3xl transform rotate-6 scale-105 opacity-50 group-hover:rotate-12 group-hover:scale-110 group-hover:bg-indigo-300 transition-all duration-500 z-0"></div>
          
          <motion.img
            whileHover={{ scale: 1.02, transition: { type: "spring", stiffness: 300 } }}
            src="/akhil.jpg"
            alt="Profile"
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl object-cover shadow-[0_10px_40px_rgba(0,0,0,0.1)] cursor-pointer relative z-10 border-4 border-white transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)]"
          />
        </motion.div>

        {/* Bio content */}
        <motion.div
          variants={slideSpringFromRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-gray-50/50 p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm"
        >
          <h3 className="text-2xl font-bold font-heading text-gray-900 mb-4">
            Hello! I'm Akhil Kumar
          </h3>
          <p className="text-gray-600 text-[1.05rem] leading-relaxed mb-8">
            A passionate <span className="font-semibold text-violet-700">Full Stack Developer</span> with a love for creating beautiful, user-friendly digital experiences. I specialize in modern web technologies and enjoy solving complex problems through clean, efficient, and scalable code.
          </p>

          <ul className="grid sm:grid-cols-2 gap-y-5 gap-x-4 text-gray-700">
            <li className="flex flex-col">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Name</span> 
              <span className="font-medium text-gray-900">Akhil Kumar</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Role</span> 
              <span className="font-medium text-gray-900">Full Stack Developer</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Email</span> 
              <span className="font-medium text-gray-900 break-all">niteshsharma4464@gmail.com</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Location</span> 
              <span className="font-medium text-gray-900">Neemrana, India</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}