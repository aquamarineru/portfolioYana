import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../lib/client'

const Cover = ({ homeData }) => {
  const content = homeData?.[0]?.content || {};
  const { image, banner, button, description } = content;

  return (
    <div className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat bg-light dark:bg-dark font-display'>
      <div className='absolute top-0 left-0 right-0 bottom-0 dark:bg-dark/10 z-[2]'>
      {image && (
        <div className='absolute  top-0 left-0 right-0 bottom-0 z-0'>
          <Image 
          src={urlFor(image).url()}  
          alt={banner} 
          width={1400} 
          height={800}
          sizes="(max-width: 600px)"
          priority={true} 
          className='object-cover w-full h-full' />
        </div>
      )}
        <h1 className='px-5 font-tomatoes text-tomatoes text-bold text-md text-center absolute top-[25%] left-[10%]  md:left-[30%] md:text-xl lg:left-[25%] lg:text-2xl xl:text-4xl xl:left-[30%]'>{banner}</h1>
        <p className='absolute font-ricordi top-[33%] uppercase left-[20%] md:left-[40%] md:top-[33%] text-sm  '>{description}</p>
        <div className='flex justify-center'>
            <Link href='mailto:yana.korobeinyk@gmail.com' aria-label="Contact me per email"  className='absolute bottom-10 z-[2] px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-bold uppercase'>{button} </Link>
        </div>
      </div>
    </div>
  )
}
export default Cover
