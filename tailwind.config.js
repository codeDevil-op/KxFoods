/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "primary" : ["Poppins", "sans-serif"],
        "secondary" : ["Playfair Display", "sans-serif"],
      },
      colors: {
        'heroBg' : '#0e1122',
        'navBg': '#FAFAFA',
        'para' : '#302F3C',
        'primary' : '#FD9900' 
      }
    },
  },
  // plugins: [
  //   require('tailwind-scrollbar'),
  // ],
}

