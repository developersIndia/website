import { createTheme } from '@nextui-org/react';

export default createTheme({
  type: 'light',
  theme: {
    colors: {
      primary: '$red500',
      secondary: '$gray500'
    },
    fonts: {
      sans: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
      serif: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'",
      mono: "Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto'"
    }
  }
});
