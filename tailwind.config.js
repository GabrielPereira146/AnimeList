/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Cinzel, sans-serif"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tailwind-gradient-mask-image"),
    
  ],
}

