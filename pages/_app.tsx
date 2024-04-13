import { HydrationBoundary } from '@tanstack/react-query';

import LibConfigProviders from '@app/providers/lib-config-provider';

import GlobalStyle from '../src/shared/ui/styles/GlobalStyle';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <LibConfigProviders>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </HydrationBoundary>
      </LibConfigProviders>
    </>
  );
}
