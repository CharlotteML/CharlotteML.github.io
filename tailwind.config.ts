import type { Config } from "tailwindcss";

export default {
  content: [
    "./app.vue",
    "./{pages,components,content}/**/*.{vue,js,ts,jsx,tsx,html,md}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ebfef4",
          100: "#cefde2",
          200: "#a1f9cb",
          300: "#64f1af",
          400: "#27e08f",
          500: "#02c777",
          600: "#00a262",
          700: "#008251",
          800: "#006641",
          900: "#005035", // light, dark
          950: "#003020",
        },
        secondary: {
          50: "#f6f5f5",
          100: "#e7e6e6", // light
          200: "#d1d0d0",
          300: "#b1afb0",
          400: "#8a8686",
          500: "#6f6b6b",
          600: "#5f5b5b",
          700: "#504e4f",
          800: "#464444",
          900: "#3d3c3c",
          950: "#212020", // dark
        },
        accent: {
          50: "#f8f7ee",
          100: "#edecd4",
          200: "#ddd9ab", // dark
          300: "#c9c17b",
          400: "#b9aa56",
          500: "#a08e44",
          600: "#927a3c", // light
          700: "#755d33",
          800: "#634d30",
          900: "#56422d",
          950: "#312317",
        },
        alert: {
          50: "#fcf4f4",
          100: "#fae6e6",
          200: "#f6d3d2",
          300: "#eeb4b3",
          400: "#e38886",
          500: "#d4625f",
          600: "#bf4643",
          700: "#a03835",
          800: "#802f2d", // light, dark
          900: "#702e2c",
          950: "#3c1413",
        },
        main: {
          50: "#f4f7fb", // bg (light), text (dark), or just use white
          100: "#e9eff5",
          200: "#cedde9",
          300: "#a2c1d7",
          400: "#709fc0",
          500: "#4e84a9",
          600: "#3c6a8d",
          700: "#315573",
          800: "#2c4960",
          900: "#293e51",
          950: "#0d131a", // bg (dark), text (light)
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
