import { motion } from "framer-motion";

const playSound = (src) => {
  const audio = new Audio(src);
  audio.volume = 0.4;
  audio.play();
};

export default function CuteIcon({ icon: Icon, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => playSound("/sounds/click.mp3")}
      className="flex flex-col items-center cursor-pointer"
    >
      <Icon className="text-4xl text-pink-500" />
      <span className="text-sm mt-1">{label}</span>
    </motion.div>
  );
}
