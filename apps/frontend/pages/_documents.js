import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
      <Head>
        {/* Add your external stylesheet here */}
        <link
          rel="stylesheet"
          href="https://use.typekit.net/wig7gea.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
    );
  }
}

export default MyDocument;