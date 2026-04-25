import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    college: "Adarsh Bca College Botad",
    year: "2022 - 2025",
  },
  {
    degree: "Higher Secondary (12th)",
    college: "Vivekanand School Botad",
    year: "2021 - 2022",
  },
  {
    degree: "Secondary (10th)",
    college: "Vivekanand School Botad",
    year: "2019 - 2020",
  },
];

const cardAnim = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2 },
  }),
};

const Education = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-16">

   
      <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
       <span className="text-transparent text-4xl font-bold bg-clip-text bg-linear-to-l from-red-400 to-green-400">My Education </span>
    
      <motion.div
        className="h-1 w-24 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "12rem" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>

      <div className="max-w-4xl mx-auto space-y-8">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardAnim}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.02 }}
            className="relative bg-slate-900 border border-white/10 
            rounded-2xl p-6 flex items-start gap-4 
            hover:border-cyan-400 transition duration-300"
          >

            {/* LEFT ICON */}
            <div className="bg-slate-800 p-3 rounded-xl">
              <GraduationCap className="text-cyan-400" />
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold">
                {edu.degree}
              </h3>
              <p className="text-gray-400 text-sm">
                {edu.college}
              </p>
            </div>

            {/* DATE BADGE */}
            <div className="absolute top-14 right-2 text-xs px-3 py-1 
            bg-slate-800 rounded-full text-gray-300">
              {edu.year}
            </div>

          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;