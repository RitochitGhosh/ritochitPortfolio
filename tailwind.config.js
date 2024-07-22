/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'screen-minus-70': 'calc(100vh - 100px)',
        'screen-small': 'calc(100vh - 60px)'
      },
    },
  },
  plugins: [],
}
