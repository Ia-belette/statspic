import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          midnightBackground: { value: '#503658' },
          midnightTitle: { value: '#E5AB8A' },
          midnightText: { value: '#CFF469' },
          blackBackground: { value: '#000000' },
          blackTitle: { value: '#E91229' },
          blackText: { value: '#F8D4D7' },
          cobaltBackground: { value: '#3C00E4' },
          cobaltTitle: { value: '#C0AFD0' },
          cobaltText: { value: '#9BEFE2' },
          mintBackground: { value: '#ABEDBB' },
          mintTitle: { value: '#22306D' },
          mintText: { value: '#000000' },
        },
      },
    },
  },
  staticCss: {
    recipes: '*',
  },
  // The output directory for your css system
  outdir: 'styled-system',
});
