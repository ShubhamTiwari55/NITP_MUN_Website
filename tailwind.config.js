// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        colona: ['Colona', 'sans-serif'],
      },
      backgroundImage:{
        'gradient-to-t': 'linear-gradient(to top, #000829 , #011564)',

      },
      colors:{
        'custom-underline': '#white',
      },
    },
  },
  plugins: [],
};
