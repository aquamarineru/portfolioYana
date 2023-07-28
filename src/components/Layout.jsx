import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

function Layout({children}) {
  return (
    <div>
        <Head>
        <title>Mykonos Love Photography | Yana Korobeinyk </title>
        <meta property="og:title" name="title" content="Mykonos Love Story Wedding Portrait Photography" />
        <meta property="og:description" name="description" content="Yana Korobeinyk is a photographer based in Mykonos Island who specializes in wedding, love story, and portrait photography. Her photography captures the essence of love and the emotions that radiate happiness." />
        <meta name="keywords" content="photography, fashion photography, weddings photography, mykonos photography, photographer, wedding photographer" />
        <meta property="og:image" content="/about.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="icon" href="/logo.png" />
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
