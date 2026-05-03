import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../lib/client'

const getBlurProps = (image) => {
  const blurDataURL = image?.asset?.metadata?.lqip

  return blurDataURL ? {placeholder: 'blur', blurDataURL} : {}
}

const Photo = ({image, title, slug}) => {
  return (
    <Link href={`/portfolio/${encodeURIComponent(slug.current)}`} className='flex w-full flex-col items-center justify-center gap-4'>
        <Image 
        src={urlFor(image).width(700).height(700).quality(76).auto('format').url()}
        alt={image.caption}
        width={700}
        height={700}
        sizes="(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 360px"
        className='aspect-square w-full rounded-lg object-cover shadow-custom transition-transform duration-300 ease-in-out hover:scale-105'
        {...getBlurProps(image)}
        />
        <h2 className='font- text-dark dark:text-light font-bold text-center hover:text-hover'>{title}</h2>
    </Link>
  )
}

export default Photo
