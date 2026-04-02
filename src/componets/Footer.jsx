import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400"
      : "hover:text-cyan-400 transition";

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
       
        <div>
          <h1 className="text-2xl font-bold text-cyan-400">Rutvik</h1>
          <p className="mt-3 text-gray-400">
            MERN Stack Developer passionate about building modern web apps.
          </p>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400">
            <li>
              <NavLink to="/" className={navLinkClass}>
               Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={navLinkClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" className={navLinkClass}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/skills" className={navLinkClass}>
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink to="/experience" className={navLinkClass}>
                Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/education" className={navLinkClass}>
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-3">Follow Me</h2>
          <div className="flex space-x-4 text-2xl">
            <a href="https://github.com/rutvik4500/" target="_blank"  className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rutvikparmar45/" target="_blank" rel="noreferrer" className="hover:text-cyan-400">
              <FaLinkedin />
            </a>
           
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center border-t border-gray-700 py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Rutvik. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;