import { motion } from "framer-motion";

const strengths = [
  "Stakeholder Communication",
  "Business Problem Structuring",
  "KPI Definition",
  "Data Storytelling",
  "Cross-functional Collaboration",
  "Leadership & Ownership",
];

const Professional = () => {
  return (
    <section className="border-b border-neutral-900 py-12">
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* ✨ Floating Sparkle */}
        <motion.div
          animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-2 right-6 text-lg"
        >
          ✨
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-light mb-6"
        >
          Professional Strengths
        </motion.h2>

        {/* Skills */}
        <div className="flex flex-wrap gap-4">
          {strengths.map((item, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1, y: -3 }}
              transition={{ type: "spring", stiffness: 250 }}
              className="px-5 py-2 text-sm rounded-full bg-neutral-100 text-neutral-800 cursor-default shadow-sm"
            >
              {item}
            </motion.span>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Professional;
