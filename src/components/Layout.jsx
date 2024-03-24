import React from 'react'
import Header from './Header'
import Footer from './Footer'

function Layout({ children, seo }) {
  const { seoTitle, seoDescription, seoImage } = seo || {}

  return (
    <div>
  {/*     <Head>
        <title>{seo?.seoTitle || 'Greece Love Story Wedding Portrait Photography | Yana Korobeinyk '}  </title>
        <meta property="og:description" name="description" content={seoDescription} />
        <meta name="keywords" content="photography, fashion photography, weddings photography, mykonos photography, photographer, wedding photographer" />
        <meta property="og:image" content="/about.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="google-site-verification" content="HOQY6rh1u_zcAir9F2-Tizh8c_N3sndycb7INYWfDUg" />
        <meta name="p:domain_verify" content="f3749dab05bc8dee0e9227f67939b075"/>
        <link rel="icon" href="/logo.webp" />
      </Head>  */}
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
