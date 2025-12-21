import aboutImg from "/decor/b9b43dfe29972b4b12134040e98b0f48.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";


const About = () => {
  return (
    <section className="py-24 px-4 lg:px-0 bg-background">
      {/* Heading */}
      <h1 className="mb-20 text-center text-5xl md:text-6xl font-serif text-textmain">
        About <span className="text-accent">Me</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-6xl mx-auto">

        {/* Image */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-3xl shadow-lg">
            <img
              className="w-full h-full object-cover"
              src={aboutImg}
              alt="About Aarti"
            />
            {/* Soft overlay */}
            <div className="absolute inset-0 bg-secondary/40"></div>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-10 shadow-lg">
            {ABOUT_TEXT.split("\n\n").map((paragraph, index) => {
              if (paragraph.includes("Check out my resume")) {
                return (
                  <div
                    key={index}
                    className="mt-6"
                    dangerouslySetInnerHTML={{ __html: paragraph }}
                  />
                );
              }
              return (
                <p
                  key={index}
                  className="text-textmain/80 mb-5 leading-relaxed text-[15px]"
                >
                  {paragraph}
                </p>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
