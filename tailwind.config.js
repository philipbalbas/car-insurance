module.exports = {
  purge: [
    './src/**/*.js',
  ],
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [],
  important: true,
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    extend: {
      colors: {
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121'
        }
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%'
      },
      minWidth: {
        '100': '100px'
      }
    },
  }
};