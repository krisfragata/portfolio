/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'background': '#FFF0E5',
        'headerText': '#004643',
        'paragraphText': '#427B78',
        'highlight': '#D22727',
        'hoverText': '#9E5A1B',
      }
    },

  },
  plugins: []
};