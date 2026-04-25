import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const sectionRef = useRef(null);

  const experiences = [
   {
  role: "Full Stack Development Trainee",
  company: "QSpiders Software Training Institute",
  location: "Ahmedabad, Gujarat",
  date: "Aug 2025 – Jan 2026",
  description: [
    "Completed Full Stack Development training with a strong focus on the MERN stack (MongoDB, Express.js, React.js, Node.js) along with modern frontend technologies like HTML, CSS, JavaScript, and Tailwind CSS.",
    
    "Gained hands-on experience in React.js component-based architecture, state management, and backend development using Node.js with real-world mini projects."
  ]
}
   
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".experience-item",
        { x: -80, opacity: 0, scale: 0.9 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    });

    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6" ref={sectionRef}>
        
       
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

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-item relative mb-12 flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-black"></div>

              {/* Card */}
              <div className="ml-12 md:ml-0 md:w-1/2 px-4">
                <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl shadow-lg hover:scale-105 hover:bg-white/10 transition duration-300">
                  
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <h4 className="text-cyan-400 font-medium mb-2">
                    {exp.company}
                  </h4>

                  <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                    <Calendar size={14} />
                    <span>{exp.date}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;