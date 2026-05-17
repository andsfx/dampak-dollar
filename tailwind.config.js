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
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          900: '#064E3B',
        }
      }
    }
  },
  plugins: [],
}
