// theme.ts

import { createTheme, ThemeOptions } from '@mui/material/styles';

// Define your color palette and typography
const baseThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#9c27b0', // purple
    },
    error: {
      main: '#d32f2f',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  shape: {
    borderRadius: 8,
  },
};

// Create the theme
const theme = createTheme(baseThemeOptions);

export default theme;
