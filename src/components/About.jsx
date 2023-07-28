import React from 'react'
import Image from 'next/image'
import Social from './Social'

const About = () => {
  return (
      <div className=' pt-24 md:m-0' id='about'>
        <h2 className='font-ricordi text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase'>About me</h2>
        <h3 className='font-tomatoes text-xl text-dark dark:text-light text-center font-bold md:text-2xl'>who I am</h3>
        
        <div className='p-7 py-16 flex flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-around lg:justify-center lg:gap-10'>
            <div className='m-auto flex flex-col items-center text-center gap-5 md:max-w-[400px] md:text-left md:m-0 '>
                <p className='text-dark dark:text-light '>
                Oh, hey! Nice to&nbsp;meet you! My&nbsp;name is&nbsp;Yana and I&rsquo;m photographer based in&nbsp;Mykonos.  
                </p>
                <p className='text-dark dark:text-light '>
                For me&nbsp;photography is&nbsp;all about keeping your best moments and smiles. I&nbsp;know how much memories mean to&nbsp;you and it&rsquo;s my&nbsp;goal to&nbsp;preserve them.
                </p>
                <p className='text-dark dark:text-light'>
                I&nbsp;am obsessed with photography and will do&nbsp;my&nbsp;best to&nbsp;make you feel beautiful, confident and themselves. I&nbsp;love chatting with customers before the photoshoot and give recommendations about outfits and details. 
                </p>
                <p className='text-dark dark:text-light'>
                Available for individual, couple, family and wedding shoots in&nbsp;Mykonos island. 
                </p>
                <p className='text-dark text-center dark:text-light'>
                Can&rsquo;t wait to&nbsp;create beautiful pictures with you!
                </p>
                <Social className="mt-5" />
            </div>
            <div className="flex flex-wrap justify-center mb-5 ">
            <Image
                src='/about.jpg'
                alt='about'
                width={200}
                height={400}
                className='rounded-full object-cover z-0 md:w-[280px] md:h-auto md:rounded-none lg:w-auto'
                priority
                />
            </div>
        </div>

      </div>
  )
}
export default About