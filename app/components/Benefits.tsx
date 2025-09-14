import React from "react";
import { Users, Layers, MessageSquare, Clock } from "lucide-react"; // example icons

export default function Benefits() {
  const items = [
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Startups & Entrepreneurs",
      desc: "Bring your business idea to life with skilled developers and AI engineers.",
    },
    {
      icon: <Layers className="w-8 h-8 text-orange-500" />,
      title: "Established Businesses",
      desc: "Scale your team efficiently without the overhead of permanent hiring.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: "Tech Companies",
      desc: "Expedite project timelines by integrating top-tier talent into your workforce.",
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Agencies & Enterprises",
      desc: "Augment your existing team with specialized skills and expertise.",
    },
  ];

  return (
    <section className="mt-25 relative bg-gradient-to-b from-orange-50 to-white py-16">
      {/* Title + Subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-12 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Who Can Benefit from{" "}
          <span className="text-orange-500">Our Services?</span>
        </h2>
        <p className="mt-4 text-gray-600">
          We help startups, businesses, tech companies and agencies scale
          teams, accelerate projects, and bring ideas to life—all without the
          cost and complexity of permanent hiring.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-12 px-6">
        {items.map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            {/* Icon */}
            <div className="bg-orange-100 p-4 rounded-xl">{item.icon}</div>
            {/* Text */}
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-1">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
