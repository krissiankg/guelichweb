/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#2563EB", // Electric Blue
        secondary: "#1E40AF", // Deep Blue
        dark: "#0F172A", // Slate 900
        card: "#1E293B", // Slate 800
        light: "#F8FAFC", // Slate 50
      },
      screens: {
        xxs: "375px",
        xx: "425px",
        ss: "480px",
        xs: "576px",
        xl1440: "1440px",
        maxW1440H620: { raw: "(max-width: 1440px) and (max-height: 620px)" },
        minH800: { raw: "(min-height: 800px)" },
        minH900: { raw: "(min-height: 900px)" },
        minW1600: { raw: "(min-width: 1600px)" },
        minW1700: { raw: "(min-width: 1700px)" },
        minW2000: { raw: "(min-width: 2000px)" },
        minW2100: { raw: "(min-width: 2100px)" },
        minW2400: { raw: "(min-width: 2400px)" },
        ...defaultTheme.screens,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow":
          "conic-gradient(from 180deg at 50% 50%, #2a8af6 0deg, #a853ba 180deg, #e92a67 360deg)",
      },
    },
  },
  plugins: [],
};
