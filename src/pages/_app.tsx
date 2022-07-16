import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";

function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;
