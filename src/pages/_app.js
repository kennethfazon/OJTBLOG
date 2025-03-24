// pages/_app.js
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme'; // Import the custom theme

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This provides a consistent baseline CSS reset */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
