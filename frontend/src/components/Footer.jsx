"use client";

import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 text-gray-300 py-12 px-4 sm:px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="flex items-center gap-2 flex-col md:flex-row">
          <span className="text-xl font-bold font-heading text-white tracking-tight">Akhil.</span>
          <span className="hidden md:inline text-gray-600">|</span>
          <p className="text-sm text-center md:text-left text-gray-400">
            © {new Date().getFullYear()} Akhil Kumar. All rights reserved.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <motion.a
            whileHover={{ y: -3 }}
            href="https://github.com/akhilkumar4464"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-violet-600 hover:text-white transition-all text-gray-400 shadow-sm"
            aria-label="GitHub"
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://linkedin.com/in/Akhilkumar4464"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 hover:text-white transition-all text-gray-400 shadow-sm"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white transition-all text-gray-400 shadow-sm"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            href="mailto:niteshsharma4464@gmail.com"
            className="p-3 rounded-full bg-gray-800 hover:bg-pink-600 hover:text-white transition-all text-gray-400 shadow-sm"
            aria-label="Email"
          >
            <Mail size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}