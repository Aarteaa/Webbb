import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* 🌸 Decorative elements */}
      <img
        src="/decor/comp.jpg"
        className="absolute top-5 left-0 w-48 opacity-50 z-10 border-4 border-pink-500 "
        alt=""
      />

     

     

      {/* Heading */}
      <h2 className="mb-24 text-center text-5xl md:text-6xl font-serif text-textmain">
        Experience
      </h2>
      {/* 🌸 Decorative elements */}
      
      

      <div className="relative bg-white/85 rounded-3xl p-10 shadow-xl">

        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Paper Card */}
            <div className="bg-white/85 backdrop-blur-md rounded-3xl p-10 shadow-xl">

              <p className="text-sm text-accent mb-2">
                {exp.year}
              </p>

              <h3 className="text-2xl font-semibold text-textmain">
                {exp.role}
              </h3>

              <p className="mt-1 text-textmain/70">
                {exp.company}
              </p>

              <p className="mt-6 text-textmain/80 leading-relaxed text-[15px]">
                {exp.description}
              </p>

              {/* Skill pills */}
              <div className="mt-6 flex flex-wrap gap-3">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-secondary px-4 py-2 text-sm text-textmain shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Divider */}
            {index !== EXPERIENCES.length - 1 && (
              <div className="my-16 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            )}
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Experience;
