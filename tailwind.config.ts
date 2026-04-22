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
        primary: {
          DEFAULT: "#09357E",
          50:  "#e8eef8",
          100: "#c5d4ef",
          200: "#9eb8e4",
          300: "#769cd9",
          400: "#5887d1",
          500: "#3a72c9",
          600: "#2460b8",
          700: "#09357E",
          800: "#072a65",
          900: "#041e48",
        },
        secondary: {
          DEFAULT: "#9E7F2E",
          50:  "#faf5e8",
          100: "#f2e6c3",
          200: "#e8d49a",
          300: "#ddc270",
          400: "#d4b24f",
          500: "#cba332",
          600: "#b8921f",
          700: "#9E7F2E",
          800: "#7d6424",
          900: "#5a481a",
        },
        dark: "#0a0e1a",
        "dark-card": "#111827",
      },
      fontFamily: {
  heading: ["var(--font-cormorant)", "Georgia", "serif"],
  body: ["var(--font-poppins)", "system-ui", "sans-serif"],
},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
