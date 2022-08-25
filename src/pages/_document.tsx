import { Head, Html, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="en">
      <title>The DevelopersIndia Community</title>
      <Head>
        <meta
          name="description"
          content="The largest network for software & tech professions in India."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
