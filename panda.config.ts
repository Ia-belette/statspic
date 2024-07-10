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
          midnights: { value: '#503658' },
          'midnights-title': { value: '#E5AB8A' },
          'midnights-text': { value: '#CFF469' },
          'like-that': { value: '#000000' },
          'like-that-title': { value: '#E91229' },
          'like-that-text': { value: '#F8D4D7' },
          gobalt: { value: '#3C00E4' },
          'gobalt-title': { value: '#C0AFD0' },
          'gobalt-text': { value: '#9BEFE2' },
          minty: { value: '#ABEDBB' },
          'minty-title': { value: '#22306D' },
          'minty-text': { value: '#000000' },
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
