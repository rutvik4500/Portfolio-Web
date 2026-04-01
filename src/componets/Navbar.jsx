import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-cyan-400"
      : "hover:text-cyan-400 transition";

  return (
  <nav className="sticky top-0 z-50 bg-slate-900 backdrop-blur-md text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <span className="text-transparent text-2xl font-semibold bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Rutvik Parmar
            </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><NavLink to="/" className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/projects" className={navLinkClass}>Projects</NavLink></li>
          <li><NavLink to="/skills" className={navLinkClass}>Skills</NavLink></li>
          <li><NavLink to="/experience" className={navLinkClass}>Experience</NavLink></li>
          <li><NavLink to="/education" className={navLinkClass}>Education</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col bg-slate-800 px-6 py-4 space-y-4 font-medium">
          <li><NavLink to="/" onClick={()=>setOpen(false)}>About</NavLink></li>
          <li><NavLink to="/projects" onClick={()=>setOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/skills" onClick={()=>setOpen(false)}>Skills</NavLink></li>
          <li><NavLink to="/experience" onClick={()=>setOpen(false)}>Experience</NavLink></li>
          <li><NavLink to="/education" onClick={()=>setOpen(false)}>Education</NavLink></li>
          <li><NavLink to="/contact" onClick={()=>setOpen(false)}>Contact</NavLink></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;