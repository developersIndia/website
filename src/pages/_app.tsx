import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import "@styles/globals.css";
import { lightTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //theme props are passsed here to apply theme to the whole website.
    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
