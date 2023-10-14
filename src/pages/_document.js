import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-148SJTXCS0" defer />
          <Script id="google-analytics" strategy="beforeInteractive" defer>
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
              
            gtag('config', 'G-148SJTXCS0');
            `}
          </Script>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
