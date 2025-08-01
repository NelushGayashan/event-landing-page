// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffe500",
        "np-text": "#0c2a31",
        secondary: "#0a2342", 
      },
      fontFamily: {
        maison: ["Maison Neue Mono", "monospace"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
