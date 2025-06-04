/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        max1773: { raw: '(min-width: 1536px) and (max-width: 1773px)' },
        min1774: '1774px',
        fixWrapremoveButton: { raw: '(min-width: 1536px) and (max-width: 1676px)' }
      },
    },
  },
  plugins: [],
}