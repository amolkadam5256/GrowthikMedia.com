/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(217,11,28)", // Tailwind can generate shades
          light: "rgb(242,46,82)",
        },
        neutral: "rgb(151,157,166)",
        dark: "rgb(13,13,13)",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(90deg, #D90B1C 0%, #F22E52 100%)",
      },
    },
  },
  plugins: [],
};
