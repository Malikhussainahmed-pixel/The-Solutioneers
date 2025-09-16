"use client";
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Rocket, Users } from "lucide-react";

export default function BookMeeting() {
  const benefits = [
    {
      icon: <CalendarDays className="w-8 h-8 text-purple-600" />,
      title: "Flexible Scheduling",
      desc: "Choose a time that works best for you without the hassle of back-and-forth emails.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-600" />,
      title: "Tailored Solutions",
      desc: "Get personalized insights and strategies tailored to your business needs.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Direct Collaboration",
      desc: "Discuss your project goals in real time and explore ways we can work together.",
    },
  ];

  return (
    <section
      id="book-meeting"
      className="relative py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900"
        >
          Book a{" "}
          <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
            Meeting
          </span>{" "}
          With Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Let’s connect and talk about how I can help bring your ideas to life.
          Schedule a quick meeting at your convenience.
        </motion.p>

        {/* Benefits */}
        <div className="mt-12 grid sm:grid-cols-3 gap-8 text-left">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                scale: 0.9,
                x: idx === 0 ? -80 : idx === 2 ? 80 : 0,
                y: idx === 1 ? 80 : 0,
              }}
              whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.7,
                delay: idx * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true }}
              className="p-[2px] rounded-2xl bg-gradient-to-r from-purple-400 to-purple-700 shadow-lg hover:scale-[1.03] transition-transform"
            >
              <div className="bg-white rounded-2xl p-6 h-full flex flex-col">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 flex-grow">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="https://calendly.com/malikhussainahmed90/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transform transition-all duration-300"
          >
            Schedule a Meeting →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
