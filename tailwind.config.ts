import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#f2f0fb",
          900: "#e6e2f5",
          800: "#cfc9e6",
          700: "#b6afd4",
        },
        lilac: {
          700: "#a48bff",
          600: "#8b6cff",
          500: "#7a58ff",
          200: "#2a2350",
          100: "#1c1738",
        },
        mint: {
          700: "#3ed6e8",
          500: "#37c3d4",
          200: "#0e3a42",
          100: "#0a2a30",
        },
        apricot: {
          600: "#f5c14e",
          500: "#ffd98a",
          200: "#4a3a14",
          100: "#33280d",
          dark: "#ffd98a",
        },
      },
      fontFamily: {
        sans: ["var(--font-nunito)", "sans-serif"],
        display: ["var(--font-fredoka)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 46px rgba(34, 26, 74, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
