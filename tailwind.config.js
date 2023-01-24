/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg_color: '#181F24',
        primary_color: '#65FF7E',
        icons_color: '#589B63',
        white_color: '#FFFFFF',
        black_color: '#000000',
        border_color: '#243038'
      }
    },
  },
  plugins: [],
}
