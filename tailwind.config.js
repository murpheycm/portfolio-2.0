export const content = [
  "./src/**/*.{js,jsx,ts,tsx,html}",
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
];
export const theme = {
  container: {
    center: true,
  },
  extend: {
    fontFamily: {
      nunito: ['Nunito', 'sans-serif'],
      popins: ['Poppins', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      ubuntu: ['Ubuntu', 'sans-serif'],
      open: ['Open Sans', 'sans-serif']
    },
  },
};
export const plugins = [require('flowbite/plugin')];
export const darkMode = "class";
