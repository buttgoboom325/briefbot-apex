/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        retro: ['"Press Start 2P"', 'monospace'],
      },
      colors: {
        neon: "#00ff99",
        darkbg: "#0a0a0a",
        neonRed: "#ff0055",
      },
    },
  },
  plugins: [],
};
