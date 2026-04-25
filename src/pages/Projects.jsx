import React from "react";
import { motion } from "framer-motion";

const projectData = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio built using React.js and Tailwind CSS to showcase my projects and skills.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/rutvik4500/Portfolio-Web",
    live: "https://rutvikparmar.netlify.app",
    image: "../src/assets/portfoliobanner.png",
  },
  {
    title: "MyCaraShop (E-commerce)",
    description:
      "An e-commerce clothing website built using HTML, CSS, and JavaScript with cart and product features.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/rutvik4500/CaraShop",
    live: "https://mycara-ecommerce.netlify.app/",
    image: "../src/assets/myshop.png",
  },
  
];

const Projects = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <h2 className="text-transparent text-5xl font-bold bg-clip-text bg-gradient-to-r from-red-400 to-green-400">
          My Projects
        </h2>

        <motion.div
          className="h-1 w-40 mx-auto mt-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: "10rem" }}
        />
      </motion.div>

      {/* Flex Layout (NO GRID) */}
      <motion.div
        className="flex flex-wrap justify-center gap-10 max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="w-full sm:w-[45%] lg:w-[40%] bg-slate-800 rounded-[30px] overflow-hidden shadow-2xl group"
          >

            {/* Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-5 py-2 rounded-xl font-semibold hover:bg-gray-200"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 text-black px-5 py-2 rounded-xl font-semibold hover:bg-cyan-300"
                >
                  Live
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-3 text-cyan-300">
                {project.title}
              </h3>

              <p className="text-gray-300 mb-5 text-sm leading-relaxed">
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