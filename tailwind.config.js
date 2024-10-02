/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridAutoRows : {
        '14': '14rem'
      }, 
      gridTemplateColumns : {
        'auto-fill': 'repeat(auto-fill, 18rem)'
      }
    },
  },
  plugins: [],
}

