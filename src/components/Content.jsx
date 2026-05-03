import React, {useCallback, useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {urlFor} from '../../lib/client'

const getImageAlt = (image, index) =>
  image?.caption || image?.attribution || image?.alt || `Portfolio photo ${index + 1}`

const getBlurProps = (image) => {
  const blurDataURL = image?.asset?.metadata?.lqip

  return blurDataURL ? {placeholder: 'blur', blurDataURL} : {}
}

const getTileClass = (index) => {
  if (index % 9 === 0) {
    return 'sm:col-span-2 sm:row-span-2'
  }

  if (index % 7 === 0) {
    return 'lg:row-span-2'
  }

  if (index % 5 === 0) {
    return 'sm:col-span-2 lg:col-span-1'
  }

  return ''
}

const Content = ({body}) => {
  const images = Array.isArray(body) ? body.filter((item) => item?._type === 'image' && item.asset) : []
  const [activeIndex, setActiveIndex] = useState(null)
  const touchStartX = useRef(null)
  const activeImage = activeIndex === null ? null : images[activeIndex]

  const closeLightbox = useCallback(() => {
    setActiveIndex(null)
  }, [])

  const showPrevious = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex
      }

      return currentIndex === 0 ? images.length - 1 : currentIndex - 1
    })
  }, [images.length])

  const showNext = useCallback(() => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) {
        return currentIndex
      }

      return currentIndex === images.length - 1 ? 0 : currentIndex + 1
    })
  }, [images.length])

  useEffect(() => {
    if (activeIndex === null) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeLightbox()
      }

      if (event.key === 'ArrowLeft') {
        showPrevious()
      }

      if (event.key === 'ArrowRight') {
        showNext()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeIndex, closeLightbox, showNext, showPrevious])

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null) {
      return
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX.current
    const swipeDistance = touchEndX - touchStartX.current

    if (Math.abs(swipeDistance) > 50) {
      if (swipeDistance > 0) {
        showPrevious()
      } else {
        showNext()
      }
    }

    touchStartX.current = null
  }

  if (!images.length) {
    return null
  }

  return (
    <>
      <div className="mx-auto grid w-full max-w-[1280px] auto-rows-[260px] grid-cols-1 gap-4 sm:auto-rows-[280px] sm:grid-cols-2 lg:auto-rows-[300px] lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            type="button"
            aria-label={`Open ${getImageAlt(image, index)}`}
            className={`group relative min-h-[260px] overflow-hidden rounded-md bg-dark/5 shadow-custom outline-none transition duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-tomatoes dark:bg-light/5 ${getTileClass(index)}`}
            key={image._key || `${image.asset._ref}-${index}`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={urlFor(image).width(900).quality(72).auto('format').url()}
              alt={getImageAlt(image, index)}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition duration-500 group-hover:scale-105"
              {...getBlurProps(image)}
            />
            <span className="absolute inset-0 bg-dark/0 transition duration-300 group-hover:bg-dark/10" />
          </button>
        ))}
      </div>

      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 px-4 py-6"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            aria-label="Close gallery"
            className="absolute right-4 top-4 z-[102] flex h-11 w-11 items-center justify-center rounded-full border border-light/30 text-light transition hover:bg-light hover:text-dark md:right-8 md:top-8"
            onClick={closeLightbox}
          >
            <AiOutlineClose size={22} />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 z-[102] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-light/30 text-light transition hover:bg-light hover:text-dark md:left-8 md:h-14 md:w-14"
                onClick={(event) => {
                  event.stopPropagation()
                  showPrevious()
                }}
              >
                <BsChevronLeft size={28} />
              </button>
              <button
                type="button"
                aria-label="Next photo"
                className="absolute right-3 top-1/2 z-[102] flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-light/30 text-light transition hover:bg-light hover:text-dark md:right-8 md:h-14 md:w-14"
                onClick={(event) => {
                  event.stopPropagation()
                  showNext()
                }}
              >
                <BsChevronRight size={28} />
              </button>
            </>
          )}

          <div className="relative h-[86vh] w-full max-w-[1200px]" onClick={(event) => event.stopPropagation()}>
            <Image
              src={urlFor(activeImage).width(1800).quality(88).auto('format').url()}
              alt={getImageAlt(activeImage, activeIndex)}
              fill
              sizes="100vw"
              className="object-contain"
              priority
              {...getBlurProps(activeImage)}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Content
