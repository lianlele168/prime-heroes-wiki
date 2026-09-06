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
          950: "#171034",
          900: "#221a4a",
          800: "#372c66",
          700: "#524780",
        },
        lilac: {
          700: "#5636c9",
          600: "#6d4fe0",
          500: "#9279ec",
          200: "#d8cffa",
          100: "#eeebfd",
        },
        mint: {
          700: "#0e7280",
          500: "#17a0b0",
          200: "#b8e6ec",
          100: "#e2f5f8",
        },
        apricot: {
          600: "#b97f14",
          500: "#e0a12f",
          200: "#f7dda0",
          100: "#fdf4da",
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
