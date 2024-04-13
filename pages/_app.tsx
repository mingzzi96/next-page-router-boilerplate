import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import theme from '../src/app/styles/theme/theme';
import GlobalStyle from '../src/app/styles/GlobalStyle';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
