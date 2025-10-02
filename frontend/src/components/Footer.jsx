"use client";

import { Github, Linkedin, Twitter } from "lucide-react";

// Footer.jsx (Next.js)
// - Simple footer with copyright + social links
// - Replace placeholders with your own links

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://github.com/akhilkumar4464"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/Akhilkumar4464"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-violet-400 transition"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}