const defaultTheme = require('tailwindcss/defaultConfig');

module.exports = {
  content: [
    "pages/**/*.{js,ts,jsx,tsx}",
    "components/**/*.{js,ts,jsx,tsx}",
    '/app/**/*.{js,ts,jsx,tsx}',
  ],
  important: true,
  theme: {
    ...defaultTheme,
    colors: {
      ...defaultTheme.colors,
      primary: "#daa420",
      secondary: "#f5e7c5",
      tertiary: "#e2b852",
      white: '#ffffff',
      black: '#000000',
      grey:'#9e9e9e',
      greytwo: '#fafafa',
      greythree: '#f5f5f5',
      greyfour: '#eeeeee',
      greyfive: '#e0e0e0',

      text: {
        DEFAULT: "#1F2937",
        light: "#bdbdbd",
        primary: "#daa420",
      },
      light: {
        DEFAULT: "#FAFBFC",
        lighter: "#F3F4F6",
        secondary: "#f5e7c5",
        tertiary: "#e2b852",
      },
    },
    extend: {
    },
  },
  variants: {
    fill: ['hover', 'focus']
  },
  plugins: [],
}
