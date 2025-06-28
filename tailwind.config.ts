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

      // --- ADD THIS ENTIRE BLOCK FOR THE ANIMATION ---
      animation: {
        'slide-up': 'slide-up 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) both',
      },
      keyframes: {
        'slide-up': {
          '0%': {
            transform: 'translateY(50px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
      // --- END OF BLOCK TO ADD ---
    },
  },
  plugins: [],
};
export default config;