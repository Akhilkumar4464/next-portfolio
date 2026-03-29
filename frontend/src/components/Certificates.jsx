"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { staggerContainer, slideUpFade, textVariant, hoverLift } from "../utils/animations";

const certificates = [
  {
    title: "Data Analytics And Data Entry",
    issuer: "The Forage",
    desc: "Comprehensive training in data analysis, visualization, and entry techniques.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_chjS87aptFzEjawFk_1749387194043_completion_certificate.pdf",
    image: "/Screenshot 2025-11-18 210649.png",
  },
  {
    title: "Technology Job Simulation",
    issuer: " The Forage",
    desc: " Practical experience in technology roles through simulated tasks and projects.",
    link: "chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_chjS87aptFzEjawFk_1750845322367_completion_certificate.pdf",
    image: "/Screenshot 2025-11-18 210602.png",
  },
  {
    title: "Web development ",
    issuer: "Newton School",
    desc: "Extensive program covering front-end and back-end web development technologies.",
    link: "https://my.newtonschool.co/course/6z72zh12mgbt/certificate/f64lx4vhtpgw/verify",
    image: "/Screenshot 2025-11-18 210432.png",
  },
];

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section
      id="certificates"
      className="py-24 bg-gradient-to-b from-white to-violet-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 font-heading">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">Certifications</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto px-4">
            Continuous learning and professional growth validated by industry leaders.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={slideUpFade}
              whileHover={hoverLift}
              className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm hover:shadow-[0_20px_40px_rgba(124,58,237,0.1)] transition-all duration-500 group flex flex-col items-start"
            >
              {/* Image */}
              <div
                className="w-full h-52 overflow-hidden rounded-2xl mb-6 cursor-pointer relative"
                onClick={() => setSelectedImage(cert.image)}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500 rounded-2xl flex items-end justify-center pb-4">
                  <span className="text-white font-medium text-sm flex items-center gap-2"><ExternalLink size={16}/> View Full</span>
                </div>
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={800}
                  height={550}
                  className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700 ease-in-out relative z-0"
                />
              </div>

              <h3 className="text-xl font-bold font-heading text-gray-900 mb-2 group-hover:text-violet-600 transition-colors duration-300">
                {cert.title}
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-violet-600 mb-3 bg-violet-50 px-3 py-1 rounded-full">
                {cert.issuer}
              </p>
              <p className="text-sm text-gray-600 mb-6 flex-grow leading-relaxed">{cert.desc}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full justify-center items-center gap-2 text-white bg-gray-900 hover:bg-violet-600 font-semibold text-sm py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Verify Credential
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-gray-900/90 backdrop-blur-md flex items-center justify-center z-[100] p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative max-w-5xl w-full mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 md:-right-12 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full backdrop-blur-md transition-all"
            >
              <X size={28} />
            </button>

            {/* Fullscreen Certificate */}
            <Image
              src={selectedImage}
              alt="Certificate Fullscreen"
              width={1600}
              height={1200}
              className="rounded-2xl shadow-2xl w-full h-auto max-h-[85vh] object-contain bg-white/5"
            />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
