import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../lib/client'
import Head from 'next/head'

const Cover = ({ homeData }) => {
  /* const content = homeData?.[0]?.content || {};
  const { image, banner, button, description } = content; */
  const data = homeData?.[0] || {};
  const seoKeywords = data.seoKeywords?.join(', ') || 'photography, fashion photography, weddings photography, greece photography, photographer, wedding photographer';
return (
  <>
    <Head>
    <title>{data.seoTitle ? data.seoTitle : 'Greece Love Story Wedding Portrait Photography | Yana Korobeinyk'}  </title>
    <meta property="og:title" content={data.seoTitle || 'Greece Love Story Wedding Portrait Photography | Yana Korobeinyk'} />
    <meta property="og:description" name="description" content={data.seoDescription} />
    <meta name="description" content={data.seoDescription || 'Wedding Photographer Greece, Mykonos, Santorini, Paros, '} />
    <meta name="keywords" content={seoKeywords} />
    <meta property="og:image" content={urlFor(data.seoImage).url()} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="google-site-verification" content="HOQY6rh1u_zcAir9F2-Tizh8c_N3sndycb7INYWfDUg" />
        <meta name="p:domain_verify" content="f3749dab05bc8dee0e9227f67939b075"/>
        <link rel="icon" href="/logo.webp" />

    </Head>
    <div className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat bg-light dark:bg-dark font-display'>
    <div className='absolute top-0 left-0 right-0 bottom-0 dark:bg-dark/10 z-[2]'>
    {data.image && (
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0'>
        <Image 
        src={urlFor(data.image).url()}  
        alt={data.image.attribution} 
        width={1400} 
        height={800}
        sizes="(max-width: 600px)"
        priority={true} 
        className='object-cover w-full h-full' />
      </div>
    )}
      <h1 className='px-5 font-tomatoes text-tomatoes text-bold text-md text-center absolute top-[25%] left-[10%] md:left-[30%] md:text-xl lg:left-[25%] lg:text-2xl xl:text-4xl xl:left-[30%]'>{data.title}</h1>
      <p className='absolute font-ricordi top-[33%] uppercase left-[20%] md:left-[40%] md:top-[33%] text-sm'>{data.subtitle}</p>
      <div className='flex justify-center'>
          <Link href='mailto:yana.korobeinyk@gmail.com' aria-label="Contact me per email"  className='absolute bottom-10 z-[2] px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-bold uppercase'>{data.button} </Link>
      </div>
    </div>
  </div>
  </>
  
)
}
export default Cover
