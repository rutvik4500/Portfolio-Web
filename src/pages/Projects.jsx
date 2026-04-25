import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React.js and Tailwind CSS to showcase my projects and skills.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/your-username/portfolio",
    live: "https://your-portfolio-link.com",
  },
  {
    title: "MyCaraShop (E-commerce)",
    description:
      "An e-commerce clothing website built using HTML, CSS, and JavaScript with cart and product features.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/your-username/mycarashop",
    live: "https://your-ecommerce-link.com",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section className="relative min-h-screen bg-black text-white px-6 py-16 overflow-hidden">
      
      {/* Heading Animation */}
       <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
         <span className="text-transparent text-4xl font-bold bg-clip-text bg-linear-to-l from-red-400 to-green-400">My Projects</span>
      
        <motion.div
          className="h-1 w-24 mx-auto mt-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "10rem" }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </motion.div>

   <motion.div
      className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {projectData.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg group"
        >
          {/* Image Section */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition duration-300">
              <a
                href={project.github}
                target="_blank"
                className="bg-white text-black px-4 py-2 rounded"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                className="bg-cyan-400 text-black px-4 py-2 rounded"
              >
                Live
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-cyan-300">
              {project.title}
            </h3>

            <p className="text-gray-300 mb-4 text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-cyan-600 px-3 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
    </section>
  );
};

export default Projects;