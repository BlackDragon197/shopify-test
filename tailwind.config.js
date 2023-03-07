module.exports = {
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.json',
    './templates/*.liquid',
    './templates/customers/*.liquid',
  ],
  theme: {
    minWidth: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        's4-block': '#F9F6F6',
      },
    },
  },
  plugins: [],
}
