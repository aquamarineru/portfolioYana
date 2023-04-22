import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../lib/client'

const Photo = ({image, title, slug}) => {
  return (
    <Link href={`/portfolio/${encodeURIComponent(slug.current)}`} className='flex justify-center flex-col items-center gap-4'>
        <Image 
        src={urlFor(image).width(600).height(600).url()}
        alt={image.caption}
        width='200'
        height="200"
        className='hover:scale-105 ease-in-out duration-300'
        />
        <h2 className='font-ricordi text-dark dark:text-light font-bold text-center hover:text-hover'>{title}</h2>
    </Link>
  )
}

export default Photo
