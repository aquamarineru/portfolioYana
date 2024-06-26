import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../lib/client'

const Cover = ({ homeData }) => {
  /* const content = homeData?.[0]?.content || {};
  const { image, banner, button, description } = content; */
  const data = homeData?.[0] || {};
  const seoKeywords = data.seoKeywords?.join(', ') || 'photography, fashion photography, weddings photography, greece photography, photographer, wedding photographer';
return (
  <>
    <div className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat bg-light dark:bg-dark font-display'>
    <div className='absolute top-0 left-0 right-0 bottom-0 dark:bg-dark/10 z-[2]'>
    {data.image && (
      <div className='absolute top-0 left-0 right-0 bottom-0 z-0'>
        <Image 
        src={urlFor(data.image).url()}  
        alt={data.image.attribution} 
        width={1920}
        height={1080}
        quality={100}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={true} 
        className='object-cover w-full h-full' />
      </div>
    )}
      <h1 className='px-5 font-tomatoes text-tomatoes text-bold text-md text-center absolute top-[25%] left-[10%] md:left-[30%] md:text-xl lg:left-[25%] lg:text-2xl xl:text-4xl xl:left-[30%]'>{data.title}</h1>
      <p className='absolute font-nanum top-[33%] uppercase text-center left-[12%] md:left-[40%] md:top-[33%] text-sm'>{data.subtitle}</p>
      <div className='flex justify-center'>
          <Link href='mailto:yana.korobeinyk@gmail.com' aria-label="Contact me per email"  className='absolute bottom-10 z-[2] px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-bold uppercase'>{data.button} </Link>
      </div>
    </div>
  </div>
  </>
  
)
}
export default Cover
