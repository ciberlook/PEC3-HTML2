/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      invert:{
        '28': '.28',
      },
      sepia:{
        '33': '.33',
      },
      brightness:{
        '106': '1.06',
      },
      contrast:{
        '82': '.82',
      },
      hueRotate:{
        '352': '352deg',
      },
      saturate:{
        '2694': '26.94',
      },
      fontFamily:{
        sans: ['"Helvetica Neue"','sans-serif'],
        mono: ['SFMono-Regular','Menlo','Monaco','Consolas','"Liberation Mono"','"Courier New"','monospace'],
        display: ['Roboto','sans-serif'],
          
      },
    },
  },
  plugins: [],
}

