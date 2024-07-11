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
          crimsonBackground: { value: '#5C1839' },
          crimsonTitle: { value: '#FDD3E8' },
          crimsonText: { value: '#FF92AD' },
          skyBackground: { value: '#154467' },
          skyTitle: { value: '#C2F3FF' },
          skyText: { value: '#75C7F0' },
          yellowBackground: { value: '#433500' },
          yellowTitle: { value: '#F6EEB4' },
          yellowText: { value: '#F5E147' },
          limeBackground: { value: '#CFF469' },
          limeTitle: { value: '#000000' },
          limeText: { value: '#503658' },
          tomatoBackground: { value: '#5E1C16' },
          tomatoTitle: { value: '#FBD3CB' },
          tomatoText: { value: '#FF977D' },
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
