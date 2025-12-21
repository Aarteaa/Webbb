import { motion } from "framer-motion";

const techSections = [
  {
    title: "Data Analytics",
    items: ["Power BI", "SQL", "Excel", "Data Visualization", "KPI Tracking"],
  },
  {
    title: "Data Science",
    items: [
      "Python",
      "Exploratory Data Analysis (EDA)",
      "Feature Engineering",
      "Statistical Analysis",
      "Forecasting",
    ],
  },
  {
    title: "Machine Learning",
    items: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "Scikit-learn",
    ],
  },
  {
    title: "Deep Learning",
    items: [
      "Neural Networks",
      "Backpropagation",
      "CNN ",
      "Model Training Concepts",
    ],
  },
  {
    title: "Business Intelligence & Databases",
    items: ["Power BI", "MySQL", "PostgreSQL", "Data Warehousing Concepts"],
  },
  {
    title: "Programming, Cloud & Tools",
    items: ["java", "python", "AWS ", "Excel (Advanced)", "Git", "Git hub","Jupyter Notebook"],
  },
];

const Technologies = () => {
  return (
    <section className="border-b border-neutral-900 py-10">
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-light mb-6 text-center"
        >
          Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {techSections.map((section, idx) => (
            <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -6,
              scale: 1.02,
              }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-4 rounded-xl border border-neutral-800 hover:border-purple-400 shadow-sm hover:shadow-lg transition"
               >

              <h3 className="text-xl font-medium mb-4 text-purple-600">
                {section.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {section.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm bg-neutral-100 text-neutral-800"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;
