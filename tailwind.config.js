/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{vue,js,ts,jsx,tsx}",
];
export const theme = {
  colors: {
    'main-color': '#F06C9B',
    'secondary': '#F5D491',
    'light': '#F9B9B7',
    'white': '#faf9f9',
    'dark': '#555b6e',
  },
  fontFamily: {
    
  },
  extend: {
    borderRadius: {
      '4xl': '2rem',
    }
  },
};
export const plugins = [];

