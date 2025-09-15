import React from "react";
import { CalendarDays, Rocket, Users } from "lucide-react";

export default function BookMeeting() {
  const benefits = [
    {
      icon: <CalendarDays className="w-8 h-8 text-orange-500" />,
      title: "Flexible Scheduling",
      desc: "Choose a time that works best for you without the hassle of back-and-forth emails.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "Tailored Solutions",
      desc: "Get personalized insights and strategies tailored to your business needs.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Direct Collaboration",
      desc: "Discuss your project goals in real time and explore ways we can work together.",
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Book a <span className="text-orange-500">Meeting</span> With Me
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Let’s connect and talk about how I can help bring your ideas to life.
          Schedule a quick meeting at your convenience.
        </p>

        {/* Benefits */}
        <div className="mt-12 grid sm:grid-cols-3 gap-8 text-left">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transform transition duration-300 hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="https://calendly.com/malikhussainahmed90/30min" // replace with your actual meeting link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 text-lg font-medium text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-600 hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Schedule a Meeting →
          </a>
        </div>
      </div>
    </section>
  );
}
