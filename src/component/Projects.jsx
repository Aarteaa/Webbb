import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-6xl"
      >
        Projects
      </motion.h2>

      {PROJECTS.map((project, index) => (
        <div key={index} className="mb-20 flex flex-wrap lg:justify-center">
          {/* IMAGE */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src={project.image}
              alt={project.title}
              className="mb-8 w-full max-w-xl rounded-2xl object-cover shadow-2xl"
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 px-6"
          >
            {/* CLICKABLE TITLE */}
            <a
              href={project.live || project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 inline-block text-3xl font-semibold text-purple-400 hover:underline hover:text-purple-300 transition"
            >
              {project.title}
            </a>

            <p className="mb-6 text-xl text-neutral-300">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="rounded bg-neutral-800/50 px-4 py-2 text-lg text-purple-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
