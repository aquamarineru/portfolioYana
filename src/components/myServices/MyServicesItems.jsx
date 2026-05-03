import React from 'react'
import Image from 'next/image'
import { urlFor } from "../../../lib/client"

function MyServicesItems({item}) {
  return (
    <div className='flex flex-col mt-5 items-center md:flex-row md:gap-5 lg:justify-around lg:gap-10'>
      
        {item.imageSrc && (
          <Image
          src={urlFor(item.imageSrc).width(720).quality(78).auto('format').url()}
          alt={item.title}
          className="h-auto w-full max-w-[360px] object-contain md:w-[260px] lg:w-[400px]"
          width={400}
          height={600}
          sizes="(max-width: 768px) 82vw, (max-width: 1024px) 260px, 400px"
          />
        )}
        <div className="flex flex-col text-center mt-5 gap-8 md:max-w-[200px] lg:max-w-[250px]">
            <h3 className="text-dark dark:text-light font-bold gap-5 font-nanum text-sm leading-snug uppercase md:text-base">
                  {item.title}
            </h3>
            <p className="text-dark dark:text-light text-sm md:text-left">{item.description}</p>
        </div>
    </div>
  )
}

export default MyServicesItems
