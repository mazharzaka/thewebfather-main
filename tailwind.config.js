/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      blue: {
        100: "#03a9f4",
        200: "#4ab2f5",
        300: "#6abcf7",
        400: "#84c5f8",
        500: "#9bcefa",
        600: "#b1d8fb",
      },

      black: {
        /** CSS DARK THEME MIXED SURFACE COLORS */
        100: "#191f25",
        200: "#2e3439",
        300: "#454a4f",
        400: "#5d6166",
        500: "#76797e",
        600: "#8f9396",
      },
      dark: {
        /** CSS DARK THEME SURFACE COLORS */
        100: "#121212",
        200: "#282828",
        300: "#3f3f3f",
        400: "#575757",
        500: "#717171",
        600: "#8b8b8b",
      },
      white: "#ffff",
      transparent: "transparent",
      current: "currentColor",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#cbd5e11a",
      bubble: "#ff77e9",
      bermuda: "#78dcca",
    },
    night: {
      100: "#061d45",
      200: "#33085e",
    },
    dolphin: {
      100: "#006699",
      200: "#6699cc",
      300: "#99ccff",
      400: "#99e6ff",
    },
  },
  plugins: [],
};
