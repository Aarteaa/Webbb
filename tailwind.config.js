/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E8B4BC",
        secondary: "#F6E7EA",
        accent: "#C98B95",
        background: "#FFF8F9",
        textmain: "#772779ff",
      },
      borderRadius: {
        xl: "1.25rem",
        "2xl": "1.75rem",
      },
    },
  },
  plugins: [],
};
