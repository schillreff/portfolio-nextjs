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
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96",
        primaryDark: "#58E6D9",
      },
      fontFamily: {
        mont: ["var(--font-mont)"],
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 100px);",
      },
    },
  },
  plugins: [],
};
export default config;
