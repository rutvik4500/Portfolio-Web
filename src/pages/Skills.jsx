import React from "react";
import { motion } from "framer-motion";

// Icons
import htmlIcon from "../assets/icons/html.png";
import cssIcon from "../assets/icons/css.png";
import jsIcon from "../assets/icons/js.png";
import tailwindIcon from "../assets/icons/tailwind.png";
import reactIcon from "../assets/icons/react.png";
import figrmaIcons from "../assets/icons/figma11.png";

const skills = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: jsIcon },
  { name: "Tailwind CSS", icon: tailwindIcon },
  { name: "React JS", icon: reactIcon },
  { name: "Figma", icon: figrmaIcons },
];


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50},
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6 },
  },
};

const Skills = () => {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-16 overflow-hidden">
    

   <motion.div
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  className="text-center mb-18"
>
   <span className="text-transparent text-4xl font-bold bg-clip-text bg-linear-to-l from-red-400 to-green-400">My Skills</span>

  <motion.div
    className="h-1 w-24 mx-auto mt-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
    initial={{ width: 0 }}
    animate={{ width: "10rem" }}
    transition={{ duration: 0.8, delay: 0.3 }}
  />
</motion.div>

      {/* Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-3 gap-10 max-w-3xl mx-auto"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.1}}
            className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400"
          >
           
            <div
             className="absolute inset-0 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition duration-500 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-400"
             ></div>

          
            <div 
            className="relative bg-slate-900 rounded-2xl p-10 flex flex-col items-center justify-center text-center h-full transition duration-300 group-hover:bg-slate-800"
            >
              
          
              <motion.img
                src={skill.icon}
                alt={skill.name}
                className="w-16 h-16 mb-4"
                whileHover={{ scale: 1.2}}
                transition={{ type: "spring", stiffness: 200 }}
              />

            
              <h3 className="text-lg font-semibold tracking-wide">
                {skill.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;