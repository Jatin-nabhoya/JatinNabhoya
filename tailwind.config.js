/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#282C33',
        'text': '#FFFFFF',
        'text-secondary': '#ABB2BF',
        'accent': '#C778DD',
        'border': '#ABB2BF',
        'card': '#282C33',
      },
      fontFamily: {
        'mono': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
} 