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
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, letterSpacing: "0.2em" }}
        whileInView={{ opacity: 1, letterSpacing: "0em" }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
            Projects
          </span>
        </h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-4 text-gray-600"
        >
          A showcase of solutions I’ve built — blending creativity, technology,
          and innovation.
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, rotateY: idx % 2 === 0 ? -15 : 15, scale: 0.9 }}
            whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: idx * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gradient-to-r from-purple-400 to-purple-700 pt-[2px] pr-[2px] pl-[2px] pb-[15px] rounded-2xl shadow-xl hover:scale-[1.04] transition-transform duration-300"
          >
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col h-full">
              <motion.img
                src={project.image}
                alt={project.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 text-sm flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="mt-4 inline-block text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
