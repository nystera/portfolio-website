/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-bg': '#1fb6ff',
        'dark-bg': 'rgb(36,36,36)',
        'light-primary': '#ff49db',
        'light-secondary': '#000000',
        'dark-primary': '#ffffff',
        'dark-secondary': '#ffffff',
      }
    },
  },
  plugins: [],
}