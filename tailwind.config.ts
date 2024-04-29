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
        'primary': '#000000'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '2rem',
          sm: '1rem',
        },
        screens: {
          '2xl': '1440px'
        }
      }
    }
  },
  plugins: [],
};
export default config;
