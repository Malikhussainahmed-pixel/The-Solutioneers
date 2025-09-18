"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "Project Management & Communication",
  "General Information",
  "Pricing & Engagement Models",
  "Talent & Expertise",
  "Onboarding & Hiring Process",
  "Support & Scalability",
];

const faqs = [
  {
    category: "Project Management & Communication",
    question: "How do your developers collaborate with our in-house team?",
    answer:
      "Our developers use modern tools and regular meetings to ensure seamless collaboration with your in-house team.",
  },
  {
    category: "Project Management & Communication",
    question: "What tools do you use for communication and reporting?",
    answer: "We use Slack, Jira, and weekly reports to keep you updated.",
  },
  {
    category: "General Information",
    question: "Will I have direct control over the developers?",
    answer:
      "Yes, you will have direct communication and control over the assigned developers.",
  },
  {
    category: "General Information",
    question: "How do you handle time zone differences?",
    answer:
      "We adjust our working hours to ensure at least 4 hours of overlap with your team.",
  },
];

export default function Frequentquestion() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section className="py-10 lg:py-32 md:py-24 relative">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-black">
          <span className="text-[#39364A]">Your </span>
          <span className="text-[#B69F72]" style={{ fontWeight: 900 }}>
            Questions
          </span>
          <span className="text-[#39364A]"> Answered</span>
        </h2>
        <p className="mt-4 text-gray-500">
          Find clear, concise answers to all your queries about our services and
          processes.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <motion.button
  key={cat}
  whileHover={{
    scale: 1.07, // slightly faster pop
    y: -3, // subtle lift
    boxShadow: "0px 8px 20px rgba(0,0,0,0.12)", // smooth shadow on hover
  }}
  whileTap={{ scale: 0.96 }}
  transition={{ duration: 0.18, ease: "easeOut" }} // faster + smooth
  onClick={() => {
    setActiveCategory(cat);
    setOpenIndex(null);
  }}
  className={`px-6 py-2 rounded-full font-semibold ${
    activeCategory === cat
      ? "bg-[#B69F72] text-white"
      : "bg-white border border-gray-200 text-gray-700"
  }`}
>
  {cat}
</motion.button>
        ))}
      </div>

      {/* FAQ Accordion */}
      <div className="space-y-4 max-w-2xl mx-auto px-6">
        {filteredFaqs.map((faq, idx) => (
          <div
            key={faq.question}
            className="rounded-2xl bg-white shadow-md overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-gray-800 focus:outline-none"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#B69F72]"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="px-6 overflow-hidden"
                >
                  <div className="py-1 text-gray-600">{faq.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
