import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  const gtagScript = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-148SJTXCS0');
  `
  return (
    <div>
      <Head>
        <title>Mykonos Love Story Wedding Portrait Photography | Yana Korobeinyk </title>
        <meta property="og:description" name="description" content="Yana Korobeinyk is a photographer based in Mykonos Island who specializes in wedding, love story, and portrait photography. Her photography captures the essence of love and the emotions that radiate happiness." />
        <meta name="keywords" content="photography, fashion photography, weddings photography, mykonos photography, photographer, wedding photographer" />
        <meta property="og:image" content="/about.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="google-site-verification" content="HOQY6rh1u_zcAir9F2-Tizh8c_N3sndycb7INYWfDUg" />
        <meta name="p:domain_verify" content="f3749dab05bc8dee0e9227f67939b075"/>
        <link rel="icon" href="/logo.png" />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-148SJTXCS0"></script>
        <script dangerouslySetInnerHTML={{ __html: gtagScript }}></script>
      </Head> 
      <header>
        <Header />
      </header>
      <main>
        {children}
      </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout
