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
        background: "var(--background)", // ใช้ CSS Variable
        foreground: "var(--foreground)", // ใช้ CSS Variable
        primary: "#FF5733",
        secondary: "#DEDEDE",
        accent: "", 
        neutral: "",
      },
    },
  },
  plugins: [],
} satisfies Config;
