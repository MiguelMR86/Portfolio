/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn .3s forwards;',
        'fade-out': 'fadeOut .3s forwards',
      },
      keyframes: {
        'fadeIn': { 'to': { opacity: '1' } },
        'fadeOut': { 'to': { display: 'none', opacity: '0' } },
      }
    },
  },
  plugins: [],
}

