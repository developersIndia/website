import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <title>The developersIndia Community</title>
      <Head>
        <meta
          name="description"
          content="The largest network for software & tech professions in India."
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ce7546" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        {/* TODO: Add other stuff like Google Analytics & Search tag */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
