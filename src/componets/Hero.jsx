import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import profileImage from "../assets/rutvik.jpeg";
import resume from "../assets/Rutvik_parmar1's Resume.pdf";
import { Link } from "react-router-dom";

const Hero = () => {
  const heroRef = useRef(null);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 relative overflow-hidden bg-black text-white"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
      />

      <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-center md:text-left order-2 md:order-1 flex flex-col items-center md:items-start"
        >
          <div className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full">
            <span className="text-primary text-sm">
              Fintech Student & Developer
            </span>
          </div>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mt-6 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Rutvik Parmar
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-400 mt-6 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            MERN Stack Developer specializing in building responsive web
            applications and scalable backend solutions.
          </motion.p>

          <div className="flex gap-3 flex-wrap justify-center md:justify-start">
            <Link
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              to={"/projects"}
              className="px-6 py-2.5 bg-blue-400 text-white rounded-full flex items-center gap-2"
            >
              View Projects <ArrowRight size={16} />
            </Link>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href={resume}
              download
              className="px-6 py-2.5 border border-white/20 rounded-full flex items-center gap-2"
            >
              Download CV <Download size={16} />
            </motion.a>
          </div>
          <div className="pt-6 flex flex-col md:flex-row items-center gap-3 text-sm text-gray-500 justify-center md:justify-start">
            <span>📍 Ahmedabad, Gujarat</span>
            <span className="hidden md:block w-1 h-1 bg-gray-500 rounded-full"></span>
            <span>📱 +91-9824500654</span>
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center order-1 md:order-2"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            />

            {/* Image */}
            <motion.img
              src={profileImage}
              alt="rutvik parmar"
              className="w-full h-full rounded-full object-cover shadow-[0_0_150px_rgba(96,165,165,0.4)]"
              whileHover={{ scale: 1.05 }}
            />

            {/* Floating Skills (Smooth, not bounce) */}
            <motion.div
              className="absolute top-0 -right-3 border px-4 py-1 rounded-lg text-primary text-sm"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              React.js
            </motion.div>

            <motion.div
              className="absolute bottom-4 -left-6 border px-4  py-1 rounded-lg text-secondary text-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              Node js
            </motion.div>

            <motion.div
              className="absolute bottom-1 -right-4 border px-4 py-1 rounded-lg text-blue-400 text-sm"
              animate={{ x: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              MongoDB
            </motion.div>

            <motion.div
              className="absolute top-8 -left-6 border px-4 py-1 rounded-lg text-yellow-400 text-sm"
              animate={{ y: [0, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
            >
              #
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
