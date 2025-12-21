import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSound } from "./SoundContext";

const ClickSparkle = () => {
  const [sparks, setSparks] = useState([]);
  const { soundOn } = useSound();

  useEffect(() => {
    const handleClick = (e) => {
      const id = Date.now();

      if (soundOn) {
        const audio = new Audio("/sounds/click.mp3");
        audio.volume = 0.25;
        audio.play();
      }

      setSparks((prev) => [
        ...prev,
        { id, x: e.clientX, y: e.clientY },
      ]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== id));
      }, 600);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [soundOn]);

  return (
    <AnimatePresence>
      {sparks.map((spark) => (
        <motion.span
          key={spark.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1.2 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: "fixed",
            left: spark.x,
            top: spark.y,
            pointerEvents: "none",
            zIndex: 9999,
          }}
          className="text-lg"
        >
          ✨
        </motion.span>
      ))}
    </AnimatePresence>
  );
};

export default ClickSparkle;
