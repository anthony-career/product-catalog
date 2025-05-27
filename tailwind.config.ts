import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // or 'media' for system preference only
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#333333",
        accent: "#666666",
        light: "#F8F8F8",
        dark: "#1A1A1A",
        subtle: "#F0F0F0",
        highlight: "#E5E5E5",
        headerDark: "#1A1A1A",
        headerDarkHover: "#2A2A2A",
        footerDark: "#1A1A1A",
        footerLight: "#222222",
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
        soft: "0 2px 4px 0 rgba(0, 0, 0, 0.05)",
        hover: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "subtle-pattern": "linear-gradient(135deg, #f8f8f8 0%, #f0f0f0 100%)",
        "header-pattern":
          "linear-gradient(to bottom, #1A1A1A 0%, #222222 100%)",
        "footer-pattern": "linear-gradient(to top, #1A1A1A 0%, #222222 100%)",
        "main-pattern": "linear-gradient(120deg, #f8f8f8 0%, #f5f5f5 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
