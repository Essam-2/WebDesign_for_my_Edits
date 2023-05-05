/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./try.html"],
  theme: {
    extend: {
      colors:{
        'main': '#002038',
        "selected-text": '6BBCF9'
      },
      fontFamily: {
        'poppins':["'Poppins' , 'sans-serif'"]
      },
      backgroundImage:{
        'main': "url('./Essam.design/blur-background-web-page2.jpg')"
      }
    },
  },
  plugins: [
    require('@kamona/tailwindcss-perspective')
  ],
}
