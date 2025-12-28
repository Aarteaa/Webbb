import color from "../assets/color.png";
import Bank from "../assets/bank.png";
import project7 from "../assets/finanseer.png";
import chain from "../assets/chain.png";

export const PROJECTS = [
  {
    title: "PaletteIQ",
    image: color,
    live: "https://paletteiq.streamlit.app",
    github: "https://github.com/Aarteaa/PaletteIQ",
    description:
      "AI-powered fashion color analysis platform using MediaPipe and OpenCV. Implements lighting-robust skin tone analysis using HSV/LAB color spaces and Hue–Value–Chroma theory.",
    technologies: [
      "MediaPipe",
      "OpenCV",
      "HSV/LAB",
      "K-Means",
      "Computer Vision",
      "Streamlit",
    ],
  },
  {
    title: "Bank Stress Testing ML Model",
    image: Bank,
    live: "https://bank-stress-testing.streamlit.app",
    github: "https://github.com/Aarteaa/bank-stress-testing",
    description:
      "ML-based stress testing framework using Random Forest and Gradient Boosting (R² = 0.95), simulating NPL ratios under Basel III aligned macroeconomic scenarios.",
    technologies: [
      "Random Forest",
      "Gradient Boosting",
      "ML",
      "Basel III",
      "Streamlit",
    ],
  },
  {
    title: "Finanseer",
    image: project7,
    github: null, // no public link yet
    live: null,
    description:
      "Full-stack personal finance management application with expense tracking, budgeting, and ML-based expense trend forecasting.",
    technologies: ["React", "Python", "Machine Learning", "MongoDB"],
  },
  {
    title: "Labor Supply Chain Management",
    image: chain,
    live: "https://github.com/Aarteaa/labor-supply-chain-management",
    github: "https://github.com/Aarteaa/labor-supply-chain-management",
    description:
      "End-to-end labor forecasting and optimization system using Python, SQL, and analytics-driven KPI reporting.",
    technologies: ["Python", "Pandas", "SQL", "Data Analytics"],
  },
];
