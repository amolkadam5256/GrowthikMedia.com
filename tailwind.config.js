/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
        "primary-gradient": "linear-gradient(90deg, #D90B1C 0%, #F22E52 100%)",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in",
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
};
