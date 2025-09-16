import React from "react";

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
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
      id="founders"
    >
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
          Meet the{" "}
          <span className="bg-gradient-to-r from-purple-500 to-purple-700 text-transparent bg-clip-text">
            Founders
          </span>
        </h2>
        <p className="mt-4 text-gray-600">
          The minds behind Solutioneers — combining innovation, experience, and
          a passion for building transformative technology.
        </p>
      </div>

      {/* Founders Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-8 px-6">
        {founders.map((founder, i) => (
          <div
            key={i}
            className="relative bg-gradient-to-r from-purple-400 to-purple-700 pt-[2px] pr-[2px] pl-[2px] pb-[15px] rounded-2xl shadow-xl hover:scale-[1.02] transition-transform"
          >
            <div className="bg-white rounded-2xl p-6 flex flex-col items-center text-center h-full">
              <img
                src={founder.image}
                alt={founder.name}
                className="w-32 h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-md border-4 border-white"
              />
              <h3 className="mt-6 font-bold text-2xl text-gray-900">
                {founder.name}
              </h3>
              <p className="text-purple-600 font-semibold">{founder.role}</p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {founder.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
