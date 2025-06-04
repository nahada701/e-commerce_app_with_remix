import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors:{
        "primary_purple": "#a5b4fb",
        "secondary_purple": "#c7d2fe",
        "dark_purple":"#818cf8"

      }
    },
  },
  plugins: [],
} satisfies Config;
