// FILE: tailwind.config.js
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
        'brand-green': '#2f5823',
        'brand-gold': '#f1c27d',
        'brand-cream': '#fcf9f4',
        'text-dark': '#374151',
      },
      fontFamily: {
        heading: ['var(--font-playfair-display)', 'serif'],
        body: ['var(--font-cinzel)', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;

