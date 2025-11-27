/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs", // Scan all EJS templates
    "./src/**/*.js", // Scan all JS files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "system-ui",
          "ui-sans-serif",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
