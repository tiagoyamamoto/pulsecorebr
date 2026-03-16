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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#0047AB", // Cobalt Blue
          light: "#1A6BFF",
          dark: "#003087",
        },
        secondary: {
          DEFAULT: "#1C1C1E", // Space Gray
          light: "#2C2C2E",
          dark: "#000000",
        },
        accent: {
          DEFAULT: "#FF6700", // Vibrant Orange
          light: "#FF8E4D",
          dark: "#CC5200",
        },
        tech: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          900: "#0F172A",
        }
      },
      fontFamily: {
        syncopate: ["var(--font-syncopate)", "sans-serif"],
        space: ["var(--font-space-mono)", "monospace"],
      },
      backgroundImage: {
        "tech-gradient": "linear-gradient(to right, #0047AB, #1C1C1E)",
        "energy-gradient": "linear-gradient(to right, #FF6700, #FF8E4D)",
      },
    },
  },
  plugins: [],
};
export default config;
