import { HERO_CONTENT } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { delay, duration: 0.5 },
  },
});

// ✅ HERO IMAGES (MUST be in public/decor)
const images = [
  "/decor/Aartii.jpeg",
  "/decor/guitar.jpeg",
  "/decor/Aarti3.jpeg",
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // 🔁 THIS is what changes the image
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // change every 3s

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-20">
      <div className="flex flex-wrap items-center max-w-7xl mx-auto">

        {/* ================= LEFT TEXT ================= */}
        <div className="w-full lg:w-1/2 px-6">
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-6 text-5xl md:text-6xl lg:text-7xl font-thin tracking-tight"
          >
            Aarti Babasaheb Navale
          </motion.h1>

          <motion.span
            variants={container(0.4)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl md:text-3xl tracking-tight text-transparent"
          >
            Data Science & Analytics | AI Analyst
          </motion.span>

          <motion.div
            variants={container(0.8)}
            initial="hidden"
            animate="visible"
            className="mt-6 max-w-xl text-lg leading-relaxed"
          >
            {HERO_CONTENT.split("\n\n").map((p, i) => (
              <p key={i} className="mb-4">
                {p}
              </p>
            ))}
          </motion.div>
        </div>

        {/* ================= RIGHT IMAGE CAROUSEL ================= */}
        <div className="w-full lg:w-1/2 flex justify-center mt-16 lg:mt-0">
          <div className="relative w-[420px] h-[560px]">

            <AnimatePresence mode="wait">
              <motion.img
                key={index} // 🔴 THIS is CRITICAL
                src={images[index]}
                className="absolute w-full h-full object-cover rounded-3xl border-4 border-purple-500 shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
