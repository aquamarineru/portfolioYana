import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Mykonos Love Photography</title>
        <meta property="og:title" name="title" content="Mykonos Love Photography" />
        <meta property="og:description" name="description" content="Yana Korobeinyk is a photographer based in Mykonos Island who specializes in wedding, love story, and portrait photography. Her photography captures the essence of love and the emotions that radiate happiness." />
        <meta property="og:image" content="/about.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
