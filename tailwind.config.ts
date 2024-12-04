import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Use CSS Variable
        foreground: "var(--foreground)", // Use CSS Variable
        primary: "#FF5733",
        secondary: "#DEDEDE",
        accent: "#FF7043", // Example: Set a value for accent color (or leave empty if unnecessary)
        neutral: "#9E9E9E", // Example: Set a value for neutral color (or leave empty if unnecessary)
      },
      fontFamily: {
        Antonio: ["Antonio", "sans-serif"], // Fixed the font-family extension
      },
    },
  },
  plugins: [],
} satisfies Config;
