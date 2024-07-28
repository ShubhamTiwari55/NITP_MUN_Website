// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        colona: ['Colona', 'sans-serif'],
      },
      backgroundImage:{
        'gradient-to-t': 'linear-gradient(to top, #000829 , #38387C)',

      },
      colors:{
        'custom-underline': '#white',
      },
    },
  },
  plugins: [],
};
