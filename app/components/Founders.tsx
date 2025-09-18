"use client";
import React from "react";
import { motion } from "framer-motion";
export default function Founders() {
  const founders = [
    {
      name: "Abdullah Farooq",
      role: "Co-Founder",
      image: "/images/abdullah.jpeg",
      desc: "Visionary leader with expertise in technology strategy and business development. Driving innovation and building impactful solutions.",
    },
    {
      name: "Malik Hussain Ahmed",
      role: "Co-Founder",
      image: "/images/hussain.jpg",
      desc: "Passionate software engineer with strong experience in web, AI, and product development. Dedicated to delivering client-focused solutions.",
    },
  ];

  return (
    <section
      className="relative py-10 lg:py-32 md:py-24 "
      id="founders"
    >
      {/* Background Waves */}
      <motion.img
        src="/thin-lin-wave-2.svg"
        alt="wave"
        className="absolute  bottom-0 left-1/2 -translate-x-1/2 w-full opacity-20 hidden sm:block"
        animate={{ y: [0, 80, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.img
        src="/thin-lin-wave.svg"
        alt="wave"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full opacity-30 hidden sm:block"
        animate={{ y: [80, 0, 80] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#39364A]">
          Meet the{" "}
          <span className="text-[#B69F72]">
            Founders
          </span>
        </h2>
        <p className="mt-4 text-[#39364A] font-semibold">
          The minds behind Solutioneers — combining innovation, experience, and
          a passion for building transformative technology.
        </p>
      </div>

      {/* Founders Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8 px-6">
        {founders.map((founder, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-r from-[#B69F72] to-black  pt-[2px] pr-[2px] pl-[2px] pb-[15px] rounded-2xl shadow-xl hover:scale-[1.02] transition-transform"
          >
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center h-full">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-md border-4 border-[#B69F72]"
              />
              <h3 className="mt-6 font-bold text-2xl text-gray-900">
                {founder.name}
              </h3>
              <p className="text-[#39364A] font-semibold">{founder.role}</p>
              <p className="mt-4 text-[#39364A] leading-relaxed">
                {founder.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
