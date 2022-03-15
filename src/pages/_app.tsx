import type { AppProps } from "next/app";
import { NextUIProvider, globalCss } from "@nextui-org/react";

// import "@styles/globals.css";
import { lightTheme } from "../styles/theme";

//Global styles can be added here
const globaStyles = globalCss({
  body: {
    fontFamily: "'Inter', sans-serif"
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  globaStyles();
  return (
    //theme props are passsed here to apply theme to the whole website.
    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
