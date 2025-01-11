import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Optional: Define a custom config for Chakra UI
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// Extend the theme
const theme = extendTheme({
  config,
  colors: {
    brand: {
      100: '#f7c0ff',
      200: '#e17fff',
      300: '#c83fff',
      400: '#b007f9',
      500: '#8d00cc',
    },
  },
});

export default theme;
