/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        "color-primary" : "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secoundary": "#ff7d3b",
        "color-blob": "#A427DF",
      },

      fontFamily:{
        "manrope" : ["Manrope", "sans-serif"],
        "Gray-Qo" : ["Grey Qo", "cursive"],
      }
    },
  },
  plugins: [],
}

