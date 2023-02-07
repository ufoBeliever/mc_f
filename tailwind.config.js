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
      red: "rgb(239 68 68)",
      "modal-bg-8": "rgba(0, 0, 0, 0.8)",
      "modal-bg-7": "rgba(0, 0, 0, 0.7)",
    },
  },
  plugins: [],
};
