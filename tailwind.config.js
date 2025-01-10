/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        // Couleurs personnalisées
        gris: {
/*          light: "#63b3ed", // Version claire*/
          DEFAULT: "#3182ce", // Couleur par défaut
/*          dark: "#2c5282", // Version foncée*/
        },
        secondary: {
          light: "#f6ad55",
          DEFAULT: "#ed8936",
          dark: "#c05621",
        },
        customGreen: "#32a852", // Couleur unique sans déclinaisons
      },
    },
  },
  plugins: ['flowbite/plugin'],
}