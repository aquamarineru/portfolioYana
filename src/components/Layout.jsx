import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
import { urlFor } from '../../lib/client'

function Layout({ children, seoData }) {

const data = Array.isArray(seoData) ? seoData[0] || {} : {};
  return (
    <div>
    <Head>
      <title>{data.pageTitle}</title>
      <meta name="description" content={data.metaDescription} />
      <meta name="keywords" content={Array.isArray(data.metaKeywords) ? data.metaKeywords.join(', ') : data.metaKeywords} />
      <meta name="author" content="Yana Korobeinyk" />
      <meta name="image" content={urlFor(data.ogImage).width(630).height(630).quality(100).url()} />
      <link rel="canonical" href={data.canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={data.ogType || 'website'} />
      <meta property="og:title" content={data.ogTitle || data.pageTitle} />
      <meta property="og:description" content={data.ogDescription || data.metaDescription} />
      <meta property="og:image" content={urlFor(data.ogImage).width(630).height(630).quality(100).url()} alt={data.ogImage.alt}  />
      <meta property="og:url" content={data.canonicalUrl} />
      <meta property="fb:app_id" content="" />
      <meta property="og:site_name" content="Yana Korobeinyk Photography" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@" /> 
      <meta name="twitter:title" content={data.ogTitle || data.pageTitle} />
      <meta name="twitter:description" content={data.ogDescription || data.metaDescription} />
      <meta name="twitter:image" content={urlFor(data.ogImage).width(630).height(630).quality(100).url()} />

      {/* Additional tags for enhancing discoverability and web standards */}
      <meta name="robots" content={data.robotsDirective || 'index, follow'} />
      <meta name="google-site-verification" content="HOQY6rh1u_zcAir9F2-Tizh8c_N3sndycb7INYWfDUg" />
      <meta name="p:domain_verify" content="f3749dab05bc8dee0e9227f67939b075"/>
      <link rel="icon" href="/logo.webp" />

      {/* Mobile Specific */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      {/* Web App Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* iOS Web App */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={data.pageTitle} />
      <link rel="apple-touch-icon" href="/logo.webp" />
        
      {/* Windows */}
      <meta name="msapplication-TileColor" content="#f5f5f5" />
      <meta name="msapplication-TileImage" content="/logo.webp" />
      <meta name="theme-color" content="#f5f5f5" />
        
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
