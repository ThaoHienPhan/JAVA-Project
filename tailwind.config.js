/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          custom: '#EEEEEE',
        },
      },
      spacing: {
        22: '22%',
      },
    },
  },
  plugins: [],
};
