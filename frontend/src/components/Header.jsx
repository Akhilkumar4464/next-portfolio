"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { staggerContainer, slideSpringFromRight } from "../utils/animations";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
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

  // Observe sections for active nav highlight and scroll state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    links.forEach((link) => {
      const section = document.getElementById(link.id);
      if (section) observer.observe(section);
    });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
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
      <header className={`fixed top-0 w-full h-16 sm:h-20 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-gray-100" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-full">
          <h1
            onClick={() => handleNavClick("home")}
            className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 cursor-pointer font-heading tracking-tight"
          >
            Akhil<span className="text-violet-400">.</span>
          </h1>
          <nav className="hidden md:flex items-center gap-1 relative" aria-label="Main navigation">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                aria-current={active === link.id ? "page" : undefined}
                className={`relative px-4 py-2 transition-colors z-10 text-sm font-semibold rounded-full ${
                  active === link.id
                    ? "text-violet-700"
                    : "text-gray-500 hover:text-violet-600"
                }`}
                type="button"
              >
                {active === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-violet-100 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("contact")}
              className="ml-4 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.5)] transition-all hover:scale-105 active:scale-95 border-none"
            >
              Hire Me
            </button>
          </nav>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="menu-button p-2 text-violet-600 hover:text-violet-800 hover:bg-violet-50 rounded-lg focus:outline-none transition-all md:hidden border-none"
            type="button"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
      {mobileOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-indigo-900/10 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
          />
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 mobile-menu flex flex-col md:hidden border-l border-gray-100"
            ref={mobileMenuRef}
          >
            <div className="flex flex-col h-full px-6 py-8">
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-xl font-bold font-heading text-violet-900">Menu</h2>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                  className="p-2 rounded-full bg-violet-50 text-violet-600 hover:bg-violet-100 transition-colors"
                  type="button"
                >
                  <X size={20} />
                </button>
              </div>
              <motion.nav 
                variants={staggerContainer}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-2 flex-grow" 
                aria-label="Mobile navigation"
              >
                {links.map((link) => (
                  <motion.button
                    variants={slideSpringFromRight}
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    aria-current={active === link.id ? "page" : undefined}
                    className={`text-left w-full py-4 px-5 rounded-2xl font-semibold text-lg transition-colors ${
                      active === link.id
                        ? "bg-gradient-to-r from-violet-50 to-indigo-50 text-violet-700 shadow-sm border border-violet-100"
                        : "text-gray-600 hover:text-violet-600 hover:bg-gray-50"
                    }`}
                    type="button"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </motion.nav>
              <div className="mt-auto pt-6 border-t border-gray-100">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-lg shadow-[0_4px_14px_0_rgba(124,58,237,0.39)] hover:shadow-[0_6px_20px_rgba(124,58,237,0.5)] transition-all active:scale-95 border-none"
                >
                  Hire Me
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
      </AnimatePresence>
    </>
  );
}
