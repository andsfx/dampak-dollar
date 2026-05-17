/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Source Serif 4', 'serif'],
      },
      colors: {
        warm: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F3EAD8',
          300: '#E7D9BD',
          800: '#433422',
          900: '#2A1F13',
        },
        accent: {
          50: '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          900: '#4C1D95',
        }
      }
    }
  },
  plugins: [],
}
