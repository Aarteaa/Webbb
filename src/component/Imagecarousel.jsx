import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "/decor/Aarti.jpg",
  "/decor/anime2.jpg",
  "/decor/Aarti3.jpg",
];

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500); // change every 2.5s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[380px] h-[480px]">
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          className="absolute w-full h-full object-cover rounded-3xl border-4 border-purple-400"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />
      </AnimatePresence>
    </div>
  );
}
