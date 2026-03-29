"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { staggerContainer, bounceItem, textVariant } from "../utils/animations";

const certificates = [
  {
    title: "Data Analytics And Data Entry",
    issuer: "The Forage",
    desc: "Comprehensive training in data analysis, visualization, and entry techniques.",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_chjS87aptFzEjawFk_1749387194043_completion_certificate.pdf",
    image: "/Screenshot 2025-11-18 210649.png",
  },
  {
    title: "Technology	Job	Simulation",
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
      className="py-20 bg-violet-50"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-14 text-gray-900"
        >
          My <span className="text-violet-600">Certifications</span>
        </motion.h2>

        {/* Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              variants={bounceItem}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:bg-white/20 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(255,255,255,0.2)]"
            >
              {/* Image */}
              <div
                className="w-full h-48 overflow-hidden rounded-2xl mb-4 cursor-pointer"
                onClick={() => setSelectedImage(cert.image)}
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  width={800}
                  height={550}
                  className="w-full h-full object-cover opacity-90 rounded-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              <h3 className="text-2xl font-semibold text-gray-900 mb-1">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-200 mb-2">Issued by: {cert.issuer}</p>
              <p className="text-gray-300 mb-4">{cert.desc}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 font-medium hover:text-indigo-200 transition"
              >
                View Credential
                <ExternalLink size={18} />
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
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.5, y: 100, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative max-w-4xl w-full mx-4"
              onClick={(e) => e.stopPropagation()}
            >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-red-300 transition"
            >
              <X size={32} />
            </button>

            {/* Fullscreen Certificate */}
            <Image
              src={selectedImage}
              alt="Certificate Fullscreen"
              width={1000}
              height={800}
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
