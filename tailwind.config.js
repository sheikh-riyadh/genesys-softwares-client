/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
  ],

  theme: {
    extend: {
      backgroundImage: {
        'banner-1': "url('/src/banner-images/banner1.jpg')",
        'banner-2': "url('/src/banner-images/banner-2.jpg')",
        'banner-3': "url('/src/banner-images/banner-3.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}
