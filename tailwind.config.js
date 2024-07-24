/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ejs,jsx}", // Incluye tus directorios fuente
    "./node_modules/flowbite/**/*.js" // Incluye los archivos de Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}