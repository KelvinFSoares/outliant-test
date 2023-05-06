module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  darkMode: 'class',
  mode: 'jit',
  important: true, // important in prod is must be
  theme: {
    extend: {
      colors: {
        gray: '#c4c4c4',
        bggray: '#ECECEC',
        image1: '#C4C4C4',
        image2: '#9D9D9D',
        black: '#000000',
      },
      spacing: {
        110: '28rem',
        124: '32rem',
        138: '36rem',
        152: '44rem',
      },
    },
  },
  plugins: [],
};
