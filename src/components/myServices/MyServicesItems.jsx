import React from 'react'
import Image from 'next/image'

function MyServicesItems({item}) {
  return (
    <div className='flex flex-col mt-5 items-center md:flex-row md:gap-5 lg:justify-around lg:gap-10'>
        <Image
        src={item.imageSrc}
        alt={item.title}
        className="object-cov-auto md:object-cover md:w-[230px] lg:w-[400px]"
        width={400}
        height='600'
        />
        <div className="flex flex-col text-center mt-5 gap-8 md:max-w-[200px] lg:max-w-[250px]">
            <h3 className="text-dark dark:text-light font-bold gap-5 font-ricordi text-sm leading-snug uppercase md:text-base">
                  {item.title}
            </h3>
            <p className="text-dark dark:text-light text-sm md:text-left">{item.description}</p>
        </div>
      
    </div>
  )
}

export default MyServicesItems