"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const mobileMenuRef = useRef(null);

  // Smooth scroll and set active
  const handleNavClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 64;
      const offsetTop = section.offsetTop - headerHeight;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
      setActive(id);
      setMobileOpen(false);
    }
  };

  // Observe sections for active nav highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Close mobile menu on ESC or outside click
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    const handleClickOutside = (e) => {
      if (
        mobileOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest(".menu-button")
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

return (
  <>
    <header className="fixed top-0 w-full h-16 bg-white backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4">
        <h1
          onClick={() => handleNavClick("home")}
          className="text-xl font-bold text-violet-600 cursor-pointer"
        >
          Akhil Kumar
        </h1>
        <nav className="hidden sm:flex gap-6" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              aria-current={active === link.id ? "page" : undefined}
              className={`transition-colors ${
                active === link.id
                  ? "text-violet-600 font-semibold"
                  : "text-gray-700 hover:text-violet-500"
              }`}
              type="button"
            >
              {link.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setMobileOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          className="menu-button p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-300 transition-colors sm:hidden"
          type="button"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={mobileOpen ? { x: 0, opacity: 1 } : { x: "100%", opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-64 sm:hidden bg-white/95 backdrop-blur-md shadow-lg z-50 mobile-menu"
      ref={mobileMenuRef}
    >
      <div className="flex flex-col h-full px-6 py-8">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-violet-300 transition-colors"
            type="button"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              aria-current={active === link.id ? "page" : undefined}
              className={`text-left w-full py-2 px-3 rounded-md font-medium transition-colors ${
                active === link.id
                  ? "bg-violet-50 text-violet-600 font-semibold"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
              type="button"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </motion.div>
  </>
  );
}
