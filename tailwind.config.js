/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'dark-blue': {
        900: '#1a202c',
        800: '#2d3748',
      },
      'accent-blue': '#63b3ed',
      'accent-purple': '#a78bfa',
    },
    extend: {},
  },
  plugins: [],
}