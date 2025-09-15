"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Herosection() {
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 min-h-screen flex items-center justify-center px-6">
      <div className="text-center grid gap-6 sm:gap-7 sm:p-4">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-black text-5xl sm:text-7xl lg:text-8xl text-white"
        >
          The{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Solutioneers
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-black md:text-lg lg:text-xl max-w-4xl mx-auto text-white"
        >
          We automate business processes that won’t require you handing off
          paychecks and benefits on a monthly basis, an AI Agent will do that
          for you.
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Book a Call */}
          <motion.button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium px-6 py-3 rounded-md hover:shadow-lg hover:shadow-indigo-500/30 transition-all flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let’s Book A Call
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: 5 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 0.6,
              }}
            >
              <ArrowRight size={18} />
            </motion.span>
          </motion.button>

          {/* Services */}
          <motion.button
            onClick={scrollToServices}
            className="border border-indigo-300 text-white font-medium px-6 py-3 rounded-md hover:bg-white/10 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Our Services
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
