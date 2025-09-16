"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Over 15 years of industry experience",
    "Successful delivery of 500+ projects",
    "24/7 technical support and maintenance",
    "Team of 50+ certified IT professionals",
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-extrabold mb-6"
          >
            <span className="text-indigo-700">About</span>{" "}
            <span className="text-purple-600">Solutioneers</span>
          </motion.h2>

          {/* Paragraphs */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed mb-6"
          >
            Founded in 2008, Solutioneers has been at the forefront of
            technological innovation, helping businesses transform their
            operations through cutting-edge IT solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
            className="text-gray-700 leading-relaxed mb-8"
          >
            We pride ourselves on our client-centric approach, technical
            excellence, and commitment to delivering solutions that drive
            real business value.
          </motion.p>

          {/* Features List */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                viewport={{ once: true }}
                className="flex items-center gap-2"
              >
                <Check className="w-5 h-5 text-indigo-600 bg-indigo-100 rounded-full p-0.5" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2070&q=80"
            alt="About Solutioneers"
            initial={{ scale: 1.05 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="rounded-xl object-cover w-full h-full shadow-xl border border-gray-100"
          />
          {/* Glow effect with animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute inset-0 rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.25)] pointer-events-none"
          />
        </motion.div>
      </div>
    </section>
  );
}
