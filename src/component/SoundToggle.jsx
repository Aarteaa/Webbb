import { motion } from "framer-motion";
import { useSound } from "./SoundContext";

const SoundToggle = () => {
  const { soundOn, setSoundOn } = useSound();

  return (
    <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => setSoundOn(!soundOn)}
      className="fixed top-5 right-5 z-[9999] rounded-full bg-white/70 backdrop-blur-md px-4 py-2 shadow-md"
      title="Toggle sound"
    >
      <motion.span
        key={soundOn ? "on" : "off"}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="text-xl"
      >
        {soundOn ? "🔊" : "🔇"}
      </motion.span>
    </motion.button>
  );
};

export default SoundToggle;
