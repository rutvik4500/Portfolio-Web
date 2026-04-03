import React from "react";
import { motion } from "framer-motion";

// Import images
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import reactIcon from "../assets/icons/react.png";
import figrmaIcons from "../assets/icons/figma11.png"

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "React JS", icon: reactIcon },
  { name: "Figma", icon:  figrmaIcons},
];

const Skills = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">
      
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        My Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-3xl mx-auto">

        {skills.map((skill, index) => {
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="relative  p-[2px] rounded-2xl bg-gradient-to-r from-cyan-200 via-purple-500 to-pink-200 hover:cursor-pointer"
           
            >
              
        
              <div 
              className="bg-slate-900 rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full transition-all duration-300 group-hover:bg-slate-800"
              >

                {/* ICON */}
                <motion.img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-16 h-16 mb-4"
                  whileHover={{ scale: 1.4 }}
                />

                <h3 className="text-lg font-semibold">
                  {skill.name}
                </h3>
              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default Skills;