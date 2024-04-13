import { HydrationBoundary } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from '../src/app/styles/GlobalStyle';
import theme from '../src/app/styles/theme/theme';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HydrationBoundary state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </HydrationBoundary>
    </ThemeProvider>
  );
}
