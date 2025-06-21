/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "var(--font-geist-sans)",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        primary: {
          light: "#1FA4D2",
          DEFAULT: "#1C90C4",
          dark: "#1579A5",
        },
        secondary: {
          light: "#33D081",
          DEFAULT: "#29B36E",
          dark: "#1C8F57",
        },
        neutral: {
          light: "#E5E5E5",
          DEFAULT: "#BEBEBE",
          dark: "#4B4B4B",
        },
        background: {
          light: "#FFFFFF",
          dark: "#0F172A",
        },
        foreground: {
          light: "#1E293B",
          dark: "#F1F5F9",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};
