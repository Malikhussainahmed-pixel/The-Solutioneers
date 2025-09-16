"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users, Layers, MessageSquare, Clock } from "lucide-react";

export default function Benefits() {
  const items = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Startups & Entrepreneurs",
      desc: "Bring your business idea to life with skilled developers and AI engineers.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Established Businesses",
      desc: "Scale your team efficiently without the overhead of permanent hiring.",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Tech Companies",
      desc: "Expedite project timelines by integrating top-tier talent into your workforce.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Agencies & Enterprises",
      desc: "Augment your existing team with specialized skills and expertise.",
    },
  ];

  return (
    <section
      id="benefits"
      className="mt-0 bg-gradient-to-b from-slate-50 to-slate-100 py-30"
    >
      {/* Title + Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Benefit’s from Using{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Our Services?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 text-gray-600"
        >
          We help startups, businesses, tech companies and agencies scale teams,
          accelerate projects, and bring ideas to life—all without the cost and
          complexity of permanent hiring.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12 px-6">
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              scale: 0.9, // starts smaller
              y: 40, // slides up a bit
            }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: i * 0.15,
              ease: "easeOut",
            }}
            className="flex gap-4 items-start"
          >
            {/* Icon */}
            <div className="text-white bg-gradient-to-r from-indigo-600 to-purple-600 p-4 rounded-xl">
              {item.icon}
            </div>
            {/* Text */}
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
