/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#9c365f', // Rouge
          light: '#b55b80',   // Lightened Rouge for hover
          dark: '#7a2848',    // Darkened Rouge for active
        },
        secondary: {
          DEFAULT: '#F9F5F0', // Warm Cream (Replaces Lily)
          light: '#ffffff',   // White for hover
          dark: '#e6e0d9',    // Darkened Cream
        },
        dark: {
          DEFAULT: '#4A3B32', // Warm Espresso (Replaces Martinique)
          light: '#6b584d',   // Lightened Espresso
        },
        accent: {
          DEFAULT: '#E6D0C5', // Pale Blush (Replaces Bouquet)
          light: '#f5e6de',   // Lightened Blush
        }
      }
    },
  },
  plugins: [],
};
