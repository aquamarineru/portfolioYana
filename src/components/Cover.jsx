import React from 'react'
import Link from 'next/link'

const Cover = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-cover bg-center bg-no-repeat bg-light dark:bg-dark bg-main'>
      <div className='absolute top-0 left-0 right-0 bottom-0 dark:bg-dark/10 z-[2]'>
        <h1 className='px-5 font-tomatoes text-tomatoes text-bold text-md text-center absolute top-[25%] left-[10%]  md:left-[30%] md:text-xl lg:left-[25%] lg:text-2xl xl:text-4xl xl:'>Creating a visual story of your life</h1>
        <div className='flex justify-center'>
            <Link href='mailto:yana.korobeinyk@gmail.com' className='absolute bottom-10 z-[2] px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-ricordi uppercase'> Book now</Link>
        </div>
      </div>
    </div>
  )
}
export default Cover
