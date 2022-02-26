import type { AppProps } from 'next/app';

import '@styles/globals.css';
import { NextUIProvider } from '@nextui-org/react';
import theme from '@styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
