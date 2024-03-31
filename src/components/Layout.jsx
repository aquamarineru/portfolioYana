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
      <link rel="canonical" href={data.canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={data.ogType || 'website'} />
      <meta property="og:title" content={data.ogTitle || data.pageTitle} />
      <meta property="og:description" content={data.ogDescription || data.metaDescription} />
      <meta property="og:image" content={urlFor(data.ogImage).url()} />
      <meta property="og:url" content={data.canonicalUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={urlFor(data.ogImage).url()} />
      <meta name="twitter:title" content={data.ogTitle || data.pageTitle} />
      <meta name="twitter:description" content={data.ogDescription || data.metaDescription} />
      <meta name="twitter:image" content={urlFor(data.ogImage).url()} />

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

       {/*  <meta property="og:title" content={data.ogTitle} />
        <meta  property="og:description" content={data.ogDescription} />
        <meta name="og:image" property="og:image" content={urlFor(data.ogImage).url()} />
        <meta name="og:type" property="og:type" content={data.ogType} />
        <meta name="robots" content={data.robotsDirective} />
        <meta name="url" content={data.canonicalUrl} />
        <meta name="keywords" content={data.metaKeywords} />
        <meta name="google-site-verification" content="HOQY6rh1u_zcAir9F2-Tizh8c_N3sndycb7INYWfDUg" />
        <meta name="p:domain_verify" content="f3749dab05bc8dee0e9227f67939b075"/>
        <link rel="icon" href="/logo.webp" /> */}
        {/* <meta property="og:title" content={seoData?.seoTitle || 'Greece Love Story Wedding Portrait Photography | Yana Korobeinyk'} />
        <meta property="description" name="description" content={seoData?.seoDescription} />
        <meta property="og:description" name="description" content={seoData.seoDescription} />
        <meta name="keywords" content="photography, fashion photography, weddings photography, mykonos photography, photographer, wedding photographer" />
        <meta property="og:image" content="/about.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="google-site-verification" content="HOQY6rh1u_zcAir9F2-Tizh8c_N3sndycb7INYWfDUg" />
        <meta name="p:domain_verify" content="f3749dab05bc8dee0e9227f67939b075"/>
        <link rel="icon" href="/logo.webp" /> */}
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
