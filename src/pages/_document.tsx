import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

import { CssBaseline } from "@nextui-org/react";
import { Children } from "react";

function MyDocument() {
  return (
    <Html lang="en">
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: Children.toArray([initialProps.styles]),
  };
};

export default MyDocument;
