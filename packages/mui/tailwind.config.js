/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#5eead4", // Teal 400
          DEFAULT: "#14b8a6", // Teal 500
          dark: "#0f766e", // Teal 700
          darker: "#0d5a56", // Teal 800
        },
        success: {
          light: "#6ee7b7", // Green 400
          DEFAULT: "#10b981", // Green 500
          dark: "#047857", // Green 700
          darker: "#03664a", // Green 800
        },
        danger: {
          light: "#fca5a5", // Red 400
          DEFAULT: "#ef4444", // Red 500
          dark: "#b91c1c", // Red 700
          darker: "#991b1b", // Red 800
        },
        warning: {
          light: "#fde047", // Yellow 400
          DEFAULT: "#f59e0b", // Yellow 500
          dark: "#b45309", // Yellow 700
          darker: "#92400e", // Yellow 800
        },
      },
    },
  },
  plugins: [],
};
