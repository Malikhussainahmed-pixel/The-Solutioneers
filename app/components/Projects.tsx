"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Complimate-AI",
      description:
        "Easily create, customize, and manage privacy and cookie policies that align with global regulations and adapt to your business.",
      image: "/images/WatchesWebsite.jpeg",
      link: "#",
    },
    {
      title: "E-Commerce Store",
      description:
        "A modern furniture e-commerce platform with secure checkout and responsive UI.",
      image: "/images/development.jpg",
      link: "#",
    },
    {
      title: "Fitness App",
      description:
        "Track workouts, get posture correction, and manage diet plans with AI-driven features.",
      image: "/images/development.jpg",
      link: "#",
    },
    {
      title: "GIS Dashboard",
      description:
        "Interactive geographic information system with map visualizations and real-time data syncing.",
      image: "/images/development.jpg",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek personal portfolio built with Next.js showcasing skills, projects, and contact info.",
      image: "/images/development.jpg",
      link: "#",
    },
    {
      title: "Cybersecurity Tool",
      description:
        "Lightweight tool to analyze and detect vulnerabilities in web applications.",
      image: "/images/development.jpg",
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-10 lg:py-32 md:py-24 relative">
      <motion.img
        src="/thin-lin-wave-2.svg"
        alt="wave"
        className="absolute  bottom-0 left-1/2 -translate-x-1/2 w-full opacity-20 -z-10 hidden sm:block"
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/thin-lin-wave.svg"
        alt="wave"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full opacity-30 -z-10 hidden sm:block"
        animate={{ y: [80, 0, 80] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        whileInView={{ opacity: 1, letterSpacing: "0em" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#39364A]">
          Featured{" "}
          <span className="text-[#B69F72]">
            Projects
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-[#39364A] font-semibold"
        >
          A showcase of solutions I’ve built — blending creativity, technology,
          and innovation.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, idx) => (
          <div
           
            className="border-b-6 border-r-1 border-l-1 border-[#B69F72]  rounded-2xl shadow-xl hover:scale-[1.04] transition-transform duration-300 bg-white" // ✅ added bg-white here
          >
            <div className="rounded-2xl overflow-hidden flex flex-col h-full">
              <img
                src={project.image}
                alt={project.title}
                
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#39364A]">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm font-semibold flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-[#B69F72] font-semibold hover:text-[#39364A] transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
