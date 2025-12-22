import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.jpg";
import project9 from "../assets/projects/project-9.jpg";


/* ===========================
   HERO SECTION
=========================== */

export const HERO_CONTENT = `I am a data-driven engineering student with a strong foundation in data analytics, machine learning, and business problem-solving. I enjoy transforming complex datasets into clear, actionable insights that support strategic and operational decision-making.

My experience spans Power BI dashboarding, SQL-based data analysis, Python-driven data processing, and ML-based forecasting. Alongside technical skills, I bring strong communication, leadership, and creative thinking developed through academic leadership roles and entrepreneurial experiences.

I am passionate about using data and technology to create measurable impact while continuously learning and growing in dynamic environments.`;


/* ===========================
   ABOUT SECTION
=========================== */

export const ABOUT_TEXT = `
Through internships and academic projects, I have worked on end-to-end data science and analytics workflows, including data collection, cleaning, exploratory analysis, and modeling. My experience spans building Power BI dashboards, conducting SQL-based analyses, and using Python for data preprocessing, feature engineering, and predictive modeling.

I have applied data science techniques to forecasting and performance-analysis use cases, translating complex datasets into structured insights and business-ready outputs. These experiences have strengthened my ability to combine analytical rigor with clear communication, ensuring insights are interpretable, actionable, and aligned with business objectives.

Check out my resume here:
<span style="display: inline-block;">
  <a href="https://drive.google.com/file/d/1YY7F7LJFBGDPAe9szekUPs7qIJ-4wot4/view?usp=sharing" target="_blank"
    style="text-decoration: underline; font-weight: bold;">
    Resume
  </a>
</span>
`;

 
/* ===========================
   EXPERIENCE SECTION
=========================== */

export const EXPERIENCES = [
  {
    year: "Jun 2025 – Jul 2025",
    role: "Business Development & Marketing Intern",
    company: "DLC Healthcare, Mumbai",
    description: `Conducted process analysis and market research to support strategic decision-making in healthcare operations. Delivered actionable insights to senior management, improving outreach efficiency by 15%. Collaborated with cross-functional teams and presented data-backed findings to key stakeholders.`,
    technologies: ["Market Research", "Excel", "Data Analysis"],
  },
  {
    year: "Jan 2025 – Feb 2025",
    role: "Data Analyst Intern",
    company: "Shrinath Pathsanstha (Small Finance Bank)",
    description: `Automated financial transaction and cash flow tracking using Power BI dashboards, reducing manual reporting time by 40%. Cleaned and validated datasets using SQL and Excel, reducing reporting errors by 20%. Analyzed loan, deposit, and customer data to identify growth opportunities.`,
    technologies: ["Power BI", "SQL", "Excel"],
  },
  {
    year: "Oct 2024 – Jul 2025",
    role: "Chairperson",
    company: "Women in Engineering (IEEE – VIT)",
    description: `Led a 20+ member committee, organized large-scale technical and professional events, and increased member engagement by 40%. Oversaw planning, coordination, and stakeholder communication.`,
    technologies: ["Leadership", "Communication", "Team Management"],
  },
  {
    year: "2022 – 2026",
    role: "Class Representative",
    company: "Vidyalankar Institute of Technology",
    description: `Elected Class Representative for four consecutive years. Acted as a liaison between faculty and students, coordinated academic communication, resolved concerns, and supported smooth execution of academic activities.`,
    technologies: ["Public Speaking", "Coordination", "Leadership"],
  },
];


/* ===========================
   PROJECTS SECTION
=========================== */

export const PROJECTS = [
  {
    title: "Finanseer",
    image: project7,
    description:
      "A full-stack personal finance management application that tracks expenses, manages budgets, and visualizes spending patterns. Includes an ML-based trend prediction module to forecast future expenses and support data-driven financial decision-making.",
    technologies: ["Python", "Machine Learning", "React", "MongoDB"],
  },
  {
    title: "Labor Supply Chain Management System",
    image: project5,
    description:
      "Developed an end-to-end labor forecasting and optimization workflow using Python and SQL. Performed data preprocessing, exploratory analysis, predictive modeling, and KPI reporting to improve workforce allocation and operational efficiency.",
    technologies: ["Python", "Pandas", "SQL", "Data Analytics"],
  },
  {
    title: "bank-stress-testing",
    image: project5,
    description:
      " Developed ML-based stress testing framework using Random Forest and Gradient Boosting (R² = 0.95).Predicted NPL ratios under 4 economic scenarios with Basel III compliance.Built interactive Streamlit dashboard deployed on cloud",
      "https://bank-stress-testing.streamlit.app/",
    technologies: ["Python", "ML", "Scikit-learn", "Streamlit"],
  },
];


/* ===========================
   CONTACT SECTION
=========================== */

export const CONTACT = {
  phoneNo: "+91 9324882076",
  email: "artinavale05@gmail.com",
};

