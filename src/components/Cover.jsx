import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '../../lib/client'

const FILTER_PRESETS = {
  none: 'none',
  warm: 'brightness(1.03) contrast(1.02) saturate(1.12) sepia(0.08)',
  cool: 'brightness(1) contrast(1.03) saturate(0.96) hue-rotate(8deg)',
  blackWhite: 'grayscale(1) contrast(1.05)',
  softFade: 'brightness(1.08) contrast(0.92) saturate(0.9)',
}

const clampNumber = (value, min, max, fallback) => {
  const number = Number(value)

  if (Number.isNaN(number)) {
    return fallback
  }

  return Math.min(Math.max(number, min), max)
}

const getImageFilter = (settings) => {
  if (!settings?.enabled) {
    return 'none'
  }

  if (settings.preset && settings.preset !== 'custom') {
    return FILTER_PRESETS[settings.preset] || 'none'
  }

  const brightness = clampNumber(settings.brightness, 0, 200, 100) / 100
  const contrast = clampNumber(settings.contrast, 0, 200, 100) / 100
  const saturation = clampNumber(settings.saturation, 0, 200, 100) / 100
  const grayscale = clampNumber(settings.grayscale, 0, 100, 0) / 100
  const sepia = clampNumber(settings.sepia, 0, 100, 0) / 100
  const blur = clampNumber(settings.blur, 0, 20, 0)

  return [
    `brightness(${brightness})`,
    `contrast(${contrast})`,
    `saturate(${saturation})`,
    `grayscale(${grayscale})`,
    `sepia(${sepia})`,
    `blur(${blur}px)`,
  ].join(' ')
}

const isHexColor = (value) => /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value || '')

const getColorHex = (color, fallback) => {
  if (typeof color === 'string') {
    return isHexColor(color) ? color : fallback
  }

  if (isHexColor(color?.hex)) {
    return color.hex
  }

  return fallback
}

const Cover = ({ homeData }) => {
  const data = homeData?.[0] || {}
  const imageFilter = getImageFilter(data.imageFilterSettings)
  const overlayOpacityPercent = clampNumber(data.imageOverlay?.opacity, 0, 100, 0)
  const isOverlayVisible = data.imageOverlay?.enabled && overlayOpacityPercent > 0
  const overlayColor = getColorHex(data.imageOverlay?.color, '#ffffff')
  const secondaryButton = data.secondaryButton || {}
  const showSecondaryButton = secondaryButton.enabled !== false
  const secondaryButtonText = secondaryButton.text || 'Weddings&Proposals'
  const secondaryButtonUrl = secondaryButton.url || 'https://koyanamykonos.com/'
  const buttonGroupClass = showSecondaryButton
    ? 'grid w-full max-w-[520px] grid-cols-2 gap-3 px-4 sm:w-auto sm:max-w-none sm:px-0'
    : 'grid w-full max-w-[260px] grid-cols-1 gap-3 px-4 sm:w-auto sm:max-w-none sm:px-0'

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden font-display">
        {data.image && (
          <Image
            src={urlFor(data.image).width(1920).quality(84).auto('format').url()}
            alt={data.image.attribution || 'Background Image'}
            fill
            priority={true}
            sizes="100vw"
            className="object-cover"
            style={{ filter: imageFilter }}
          />
        )}

        {isOverlayVisible && (
          <div
            className="absolute inset-0"
            style={{
              backgroundColor: overlayColor,
              opacity: overlayOpacityPercent / 100,
            }}
          />
        )}

        <div className="absolute inset-0 z-10 flex flex-col justify-evenly items-center text-center text-tomatoes px-4 ">
          <h1 className="font-tomatoes text-2xl pb-8 md:text-4xl lg:text-5xl xl:text-6xl xl:mt-16 font-bold mb-4">
            {data.title}
          </h1>
          <p className="font-nanum uppercase text-sm md:text-base lg:text-lg ">
            {data.subtitle}
          </p>
          <div className={buttonGroupClass}>
            <Link
              href="mailto:yana.korobeinykphoto@gmail.com"
              aria-label="Contact me per email"
              className="flex min-h-[44px] items-center justify-center rounded border border-tomatoes bg-tomatoes px-3 py-3 text-center text-[10px] font-bold uppercase leading-tight text-light transition hover:border-transparent hover:bg-hover sm:px-6 sm:text-sm md:text-base"
            >
              {data.button || 'Book Now'}
            </Link>
            {showSecondaryButton && (
              <a
                href={secondaryButtonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[44px] items-center justify-center rounded border border-tomatoes bg-tomatoes px-3 py-3 text-center text-[10px] font-bold uppercase leading-tight text-light transition hover:border-transparent hover:bg-hover sm:px-6 sm:text-sm md:text-base"
              >
                {secondaryButtonText}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Cover
