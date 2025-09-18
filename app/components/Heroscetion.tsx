"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Herosection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero-section relative  min-h-screen flex items-center justify-center px-6 overflow-hidden ">
               
      {/* Wave SVG Background */}
      {/* Left Circle */}
      <motion.div
        className="absolute left-[-50px] top-1/2 md:w-90 md:h-90 w-85 h-85 rounded-full bg-[#39364a1c]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />

      {/* Right Circle */}
      <motion.div
        className="absolute right-[-100px] top-1/6 w-96 h-96 rounded-full bg-[#b69f721c]"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
      />
      
      

      {/* Content */}
      <div className="relative text-center grid gap-6 sm:gap-7 sm:p-4 z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-black text-6xl sm:text-8xl lg:text-8xl text-[#39364A]"
        >
         Solutions{" "}
          <span className="bg-gradient-to-r from-[#B69F72] to-black  bg-clip-text text-transparent">
         That Work
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-black md:text-lg lg:text-xl max-w-4xl mx-auto text-[#39364A]"
        >
          We bring creativity, technology, and expertise together to build solutions that solve real challenges and drive your success.
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-[#B69F72] to-black text-white font-medium px-6 py-3 rounded-md shadow-xl/30 transition-all flex items-center group"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="https://calendly.com/malikhussainahmed90/30min">
              Let’s Book A Call
            </a>
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: 6 }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.6 }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>

          <motion.button
            onClick={scrollToServices}
            className="border-2 border-[#B69F72] text-[#39364A] font-bold px-6 py-3 rounded-md hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
