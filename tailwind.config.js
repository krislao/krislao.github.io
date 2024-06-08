/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
    screens: {
      xs: "425px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
