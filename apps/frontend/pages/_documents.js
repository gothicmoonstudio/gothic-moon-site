import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/public/images/favicon.png" type="image/png" />
          <title>Gothic Moon</title>
          <meta name="description" content="Gothic Moon is a digital design studio specializing in product & web design." />
          <link rel="stylesheet" href="https://use.typekit.net/wig7gea.css" />
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