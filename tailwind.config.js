/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
const colors = require("tailwindcss/colors");

export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-0": "0% 0%",
        "pos-100": "100% 100%",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
