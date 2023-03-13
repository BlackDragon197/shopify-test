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
    fontFamily:{
      "moderat": "Moderat",
      "moderat-c": "Moderat Condensed",
      "space" : "Space Mono"
    },
    extend: {
      colors: {
        's4-block': '#F9F6F6',
        'white' : '#F9F6F6',
        'soft-black': '#242424',
      },
      margin: {
        'no': '0 !important',
      }
    },
  },
  plugins: [],
}
