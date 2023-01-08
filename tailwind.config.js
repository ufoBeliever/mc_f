/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      primarydark: "#231F20",
      primarygreen: "#1D6434",
      secondarydark: "#918F8F",
      white: colors.white,
      transparent: colors.transparent,
      secondarygreen: "#0f381c",
    },
  },
  plugins: [],
};
