import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Complimate-AI",
      description:
        "Easily create, customize, and manage privacy and cookie policies that align with global regulations and adapt to your business.",
      image: "/images/development.jpg",
      link: "#",
    },
    {
      title: "E-Commerce Store",
      description:
        "A modern furniture e-commerce platform with secure checkout and responsive UI.",
      image: "/images/development.jpg",
      link: "#",
    },
    {
      title: "Fitness App",
      description:
        "Track workouts, get posture correction, and manage diet plans with AI-driven features.",
      image: "/images/development.jpg",
      link: "#",
    },
    {
      title: "GIS Dashboard",
      description:
        "Interactive geographic information system with map visualizations and real-time data syncing.",
      image: "/images/development.jpg",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A sleek personal portfolio built with Next.js showcasing skills, projects, and contact info.",
      image: "/images/development.jpg",
      link: "#",
    },
    {
      title: "Cybersecurity Tool",
      description:
        "Lightweight tool to analyze and detect vulnerabilities in web applications.",
      image: "/images/development.jpg",
      link: "#",
    },
  ];

  return (
    <section>
      <div className="mx-auto max-w-6xl ">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            <span className="text-orange-500">Projects</span>
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Some of the projects I’ve worked on, showcasing my expertise in web
            and app development.
          </p>
        </div>

        <div className="projects mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6  p-16">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="min-h-100 bg-white rounded-xl overflow-hidden shadow-lg transform transition duration-300 ease-out hover:shadow-2xl hover:-translate-y-2 hover:scale-105 will-change-transform"
            >
              <img
                src={project.image}
                alt={project.title}
                className="max-h-60 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-block mt-3 text-orange-500 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
