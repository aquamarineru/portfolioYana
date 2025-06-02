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
  <div className="relative w-full h-screen overflow-hidden font-display">
      {/* Фоновое изображение на весь экран */}
      {data.image && (
        <Image
          src={urlFor(data.image).url()}
          alt={data.image.attribution || 'Background Image'}
          fill
          priority={true}
          quality={100}
          sizes="100vw"
          className="object-cover"
        />
      )}

      {/* Полупрозрачный оверлей */}
      <div className="absolute inset-0 bg-white/10 " />

      {/* Контент по центру экрана */}
      <div className="absolute inset-0 z-10 flex flex-col justify-evenly items-center text-center text-tomatoes px-4 ">
        <h1 className="font-tomatoes text-2xl pb-8 md:text-4xl lg:text-5xl xl:text-6xl xl:mt-16 font-bold mb-4">
          {data.title}
        </h1>
        <p className="font-nanum uppercase text-sm md:text-base lg:text-lg ">
          {data.subtitle}
        </p>
        <Link
          href="mailto:yana.korobeinykphoto@gmail.com"
          aria-label="Contact me per email"
          className="px-6 py-3 bg-tomatoes border border-tomatoes rounded hover:bg-hover hover:border-transparent font-bold uppercase text-light transition"
        >
          {data.button}
        </Link>
      </div>
    </div>
  </>
  
)
}
export default Cover
