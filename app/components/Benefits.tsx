"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Layers,
  MessageSquare,
  Clock,
  Check,
  ChevronsLeftRightEllipsis,
} from "lucide-react";

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
    <section id="benefits" className="benefits-section relative mt-0   py-10 lg:py-32 md:py-24">
      {/* Title + Subtitle */}
      <div className=" mx-auto text-center mb-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto text-4xl sm:text-7xl font-bold text-[#39364A]"
        >
          Benefit’s from Using{" "}
          <span className="text-[#B69F72]">Our Services?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-4 mx-auto text-[#39364A] max-w-4xl"
        >
          We help startups, businesses, tech companies and agencies scale teams,
          accelerate projects, and bring ideas to life—all without the cost and
          complexity of permanent hiring.
        </motion.p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 gap-6 px-6">
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
             
              ease: "easeOut",
            }}
            className="p-8 min-h-60 overflow-hidden bg-white/100 backdrop-blur-xl border border-white/30 
            rounded-xl shadow-xl hover:shadow-2xl transition duration-300 ease-in-out hover:scale-105 "
          >
            <div className="flex  items-center  ">
              <div className="icon mr-4 bg-[#b69f7231] text-[#b4975ee5] p-2.5 rounded-md">
                <ChevronsLeftRightEllipsis size={35} />
              </div>
              <div className="heading text-xl font-semibold text-[#39364A]">
                Front Development
              </div>
            </div>

            <div className="tracking-wide max-w-xl text-left mt-4">
              {" "}
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero
              natus, sequi nam corrupti nemo debitis eos laboriosa
            </div>

            {/* Check list */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-3 mt-6">
              <div className="flex items-center text-[#39364A]">
                <Check size={18} className="mr-2 text-[#B69F72]" />
                Startup Support
              </div>
              <div className="flex items-center text-[#39364A]">
                <Check size={18} className="mr-2 text-[#B69F72]" />
                Innovation Focus
              </div>
              <div className="flex items-center text-[#39364A]">
                <Check size={18} className="mr-2 text-[#B69F72]" />
                Market Analysis
              </div>
              <div className="flex items-center text-[#39364A]">
                <Check size={18} className="mr-2 text-[#B69F72]" />
                Growth Strategy
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
