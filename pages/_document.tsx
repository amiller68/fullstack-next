import Document, { Head, Html, Main, NextScript } from 'next/document';
// A custom Document is commonly used to augment our application's <html> and <body> tags.
// Preload fonts, inject critical CSS, and more here.
// For docs on using Custom Documents: https://nextjs.org/docs/advanced-features/custom-document
class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head title={'krondor'}></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
