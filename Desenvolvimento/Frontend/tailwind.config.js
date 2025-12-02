/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#fbbf24',
          black: '#1f2937',
          dark: '#111827',
        }
      }
    },
  },
  plugins: [],
}