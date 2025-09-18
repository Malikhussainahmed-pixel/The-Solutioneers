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
   <section id="about" className="about-section py-10 lg:py-32 md:py-24">
  {/* Main Section Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="text-4xl sm:text-7xl font-bold mb-2 text-center"
  >
    <span className="text-white"> Innovation</span>{" "}
    <span className="text-[#39364A]">Hub</span>{" "}

  </motion.h2>
 <motion.h2
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className=" max-w-4xl mx-auto font-semibold mb-12 text-center"
  >
   Experience the power of our offshore development hub in Pakistan,delivering cutting-edge software solutions with unparalleled efficiency and innovation.

  </motion.h2>

  <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    {/* Left Content */}
    <motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className=" shadow-xl p-6 bg-white rounded-2xl border-[#39364A] border-t-6 ">
      {/* Subheading */}
      <h3 className="text-2xl font-bold text-[#39364A] mb-4">
        About Solutioneers
      </h3>

      {/* Paragraphs */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-[#39364A] leading-relaxed font-semibold mb-6"
      >
        Founded in 2008, Solutioneers has been at the forefront of technological
        innovation, helping businesses transform their operations through
        cutting-edge IT solutions.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        viewport={{ once: true }}
        className="text-[#39364A] leading-relaxed font-semibold mb-8"
      >
        We pride ourselves on our client-centric approach, technical excellence,
        and commitment to delivering solutions that drive real business value.
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
            <Check className="w-5 h-5 text-[#B69F72]" />
            <span className="text-[#39364A] font-semibold">{feature}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>

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
        className="rounded-2xl object-cover w-full h-full "
      />
    </motion.div>
  </div>
</section>

  );
}
