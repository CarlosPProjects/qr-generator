import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        body: {
          DEFAULT: "var(--body)",
          muted: "var(--body-muted)",
        },
        accent: "var(--accent)",
        btn: {
          DEFAULT: "var(--btn)",
          muted: "var(--btn-muted)",
        },
        background: {
          DEFAULT: "var(--background)",
          muted: "var(--background-muted)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        sans: ["Inter", "sans-serif"],
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1440px",
        },
      },
    },
  },
  plugins: [],
};
export default config;
