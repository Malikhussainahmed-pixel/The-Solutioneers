import React from "react";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-extrabold bg-gradient-to-r from-purple-400 to-purple-700 bg-clip-text text-transparent">
            Solutioneers
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Delivering world-class software solutions that help businesses grow
            and succeed in the digital era.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-purple-400 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="hover:text-purple-400 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Email: hello@solutioneers.com</li>
            <li>Phone: +92 300 1234567</li>
            <li>Location: Lahore, Pakistan</li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="mt-4 flex space-x-4">
            {[
              { Icon: Github, href: "https://github.com/" },
              { Icon: Linkedin, href: "https://linkedin.com/" },
              { Icon: Twitter, href: "https://twitter.com/" },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-700 transition"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Solutioneers. All rights reserved.
      </div>
    </footer>
  );
}
