import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase }) {
      addBase({        
        'input[type="date"]': {
          'color-scheme': 'dark',
          'color': '#e4e4e7',
        },
        'input[type="date"]::-webkit-calendar-picker-indicator': {
          'filter': 'invert(0.8)',
        },
       
        'select option': {
          'backgroundColor': '#281f37ff',
          'color': '#e5e7eb',
        },
      });
    }),
  ],
};