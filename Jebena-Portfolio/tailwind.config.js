/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'coffee-pattern': "url('/src/assets/images/coffee.jpg')",
        'coffee-bean': "url('/src/assets/images/coffee-beans.jpg')",
        'Jebena': "url('/src/assets/images/hands-holding-raw-beans-of-ethiopian-coffee.jpg')",
        'wave': "url('/src/assets/images/wave.svg')",
      },
    },
  },
  plugins: [],
}