import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/rutvik.jpeg";
import resume from "../assets/Rutvik_parmar1's Resume.pdf";

const About = () => {
  return (
  <section className="min-h-screen bg-black text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img
            src={profileImage}
            alt="Rutvik Parmar"
            className="w-100 h-100 rounded-2xl object-cover border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.3)]"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed mb-4">
            Hello! I'm <span className="text-white font-semibold">Rutvik Parmar</span>, 
            a passionate MERN Stack Developer. I love building modern, responsive 
            web applications and solving real-world problems using technology.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            I specialize in React.js, Node.js, Express, and MongoDB. 
            I focus on writing clean, scalable code and creating user-friendly designs.
          </p>

          {/* INFO */}
          <div className="grid grid-cols-2 gap-4 text-sm mb-6">
            <div>
              <span className="text-gray-500">Name:</span>
              <p>Rutvik Parmar</p>
            </div>
            <div>
              <span className="text-gray-500">Location:</span>
              <p>ahmedabad , gujarat </p>
            </div>
            <div>
              <span className="text-gray-500">Experience:</span>
              <p>Fresher</p>
            </div>
            <div>
              <span className="text-gray-500">Email:</span>
              <p>  rutvikparmar4500@gmail.com</p>
           
            </div>
          </div>

          {/* BUTTON */}
           <motion.a
              whileHover={{ scale: 1.05 }}
              href={resume}
              download
            className="border rounded-full text-blue-300 px-10 py-2 hover:bg-blue-200 hover:text-black hover:font-semibold hover:border-0"
            >
              Download CV
            </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;