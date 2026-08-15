/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amr: {
          dark: '#0f172a',      // Dark slate primary background
          navy: '#0c2340',      // Deep premium navy
          ocean: '#1e3a8a',     // Ocean blue
          orange: '#e25c00',    // Brand warm orange accent
          amber: '#f97316',     // Bright warning/highlight amber
          light: '#f8fafc',     // Off-white light background
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
