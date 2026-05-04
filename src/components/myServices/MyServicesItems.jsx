import React, {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import {urlFor} from '../../../lib/client'

const getImageAlt = (image, title, index) =>
  image?.caption || image?.attribution || `${title || 'Service'} photo ${index + 1}`

const COLLAGE_LAYOUTS = {
  1: [
    'left-[8%] top-[8%] h-[84%] w-[84%]',
  ],
  2: [
    'left-[3%] top-[4%] h-[58%] w-[58%]',
    'right-[3%] bottom-[4%] h-[58%] w-[58%]',
  ],
  3: [
    'left-[3%] top-[0%] h-[48%] w-[54%]',
    'right-[0%] top-[28%] h-[44%] w-[54%]',
    'left-[12%] bottom-[0%] h-[36%] w-[54%]',
  ],
  4: [
    'left-[0%] top-[0%] h-[44%] w-[50%]',
    'right-[0%] top-[14%] h-[38%] w-[50%]',
    'left-[8%] bottom-[6%] h-[38%] w-[48%]',
    'right-[8%] bottom-[0%] h-[34%] w-[42%]',
  ],
}

const PHOTO_3D_STYLES = [
  {
    '--service-rotate-x': '7deg',
    '--service-rotate-y': '-9deg',
    '--service-rotate-z': '-2.5deg',
    '--service-rotate-x-to': '2deg',
    '--service-rotate-y-to': '-4deg',
    '--service-rotate-z-to': '-1deg',
    '--service-depth': '18px',
    '--service-depth-to': '38px',
    '--service-float-from': '-9px',
    '--service-float-to': '10px',
    '--service-float-duration': '6.4s',
  },
  {
    '--service-rotate-x': '-4deg',
    '--service-rotate-y': '8deg',
    '--service-rotate-z': '2deg',
    '--service-rotate-x-to': '-8deg',
    '--service-rotate-y-to': '3deg',
    '--service-rotate-z-to': '3.4deg',
    '--service-depth': '34px',
    '--service-depth-to': '52px',
    '--service-float-from': '8px',
    '--service-float-to': '-12px',
    '--service-float-duration': '7.2s',
  },
  {
    '--service-rotate-x': '6deg',
    '--service-rotate-y': '5deg',
    '--service-rotate-z': '-1deg',
    '--service-rotate-x-to': '1deg',
    '--service-rotate-y-to': '10deg',
    '--service-rotate-z-to': '1.8deg',
    '--service-depth': '10px',
    '--service-depth-to': '30px',
    '--service-float-from': '-6px',
    '--service-float-to': '14px',
    '--service-float-duration': '6.8s',
  },
  {
    '--service-rotate-x': '-7deg',
    '--service-rotate-y': '-5deg',
    '--service-rotate-z': '3deg',
    '--service-rotate-x-to': '-2deg',
    '--service-rotate-y-to': '-10deg',
    '--service-rotate-z-to': '0.8deg',
    '--service-depth': '26px',
    '--service-depth-to': '44px',
    '--service-float-from': '10px',
    '--service-float-to': '-8px',
    '--service-float-duration': '7.6s',
  },
]

const clamp = (value, min, max) => Math.min(Math.max(value, min), max)

const ServiceImageCollage = ({images, title}) => {
  const collageImages = images.slice(0, 4)
  const collageCount = collageImages.length
  const collageKey = collageImages.map((image, index) => image._key || image.asset?._ref || index).join('|')
  const layout = COLLAGE_LAYOUTS[collageImages.length] || COLLAGE_LAYOUTS[1]
  const dragState = useRef(null)
  const [activeIndex, setActiveIndex] = useState(collageCount - 1)
  const [draggingIndex, setDraggingIndex] = useState(null)
  const [positions, setPositions] = useState(() =>
    Array.from({length: collageCount}, () => ({
      x: 0,
      y: 0,
    })),
  )

  useEffect(() => {
    setPositions(
      Array.from({length: collageCount}, () => ({
        x: 0,
        y: 0,
      })),
    )
    setActiveIndex(collageCount - 1)
    setDraggingIndex(null)
    dragState.current = null
  }, [collageCount, collageKey, title])

  const handlePointerDown = (event, index) => {
    const currentPosition = positions[index] || {x: 0, y: 0}

    event.currentTarget.setPointerCapture(event.pointerId)
    setActiveIndex(index)
    setDraggingIndex(index)

    dragState.current = {
      index,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: currentPosition.x,
      originY: currentPosition.y,
    }
  }

  const handlePointerMove = (event) => {
    if (!dragState.current || dragState.current.pointerId !== event.pointerId) {
      return
    }

    event.preventDefault()

    const {index, startX, startY, originX, originY} = dragState.current
    const nextX = clamp(originX + event.clientX - startX, -120, 120)
    const nextY = clamp(originY + event.clientY - startY, -140, 140)

    setPositions((currentPositions) =>
      currentPositions.map((position, positionIndex) =>
        positionIndex === index
          ? {
              x: nextX,
              y: nextY,
            }
          : position,
      ),
    )
  }

  const handlePointerUp = (event) => {
    if (dragState.current?.pointerId === event.pointerId) {
      dragState.current = null
      setDraggingIndex(null)
    }
  }

  return (
    <div className="service-collage-stage relative h-[500px] w-full max-w-[360px] shrink-0 md:h-[560px] md:w-[360px] lg:h-[600px] lg:w-[430px]">
      {collageImages.map((image, index) => (
        <button
          type="button"
          aria-label={`Move ${getImageAlt(image, title, index)}`}
          className={`service-collage-item absolute appearance-none border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-tomatoes focus-visible:ring-offset-4 focus-visible:ring-offset-light dark:focus-visible:ring-offset-dark ${
            activeIndex === index ? 'service-collage-item-active' : ''
          } ${draggingIndex === index ? 'service-collage-item-dragging' : ''} ${layout[index]}`}
          key={image._key || image.asset?._ref || index}
          onPointerDown={(event) => handlePointerDown(event, index)}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{
            transform: `translate3d(${positions[index]?.x || 0}px, ${positions[index]?.y || 0}px, 0)`,
            zIndex: activeIndex === index ? 20 : index + 1,
            ...PHOTO_3D_STYLES[index],
          }}
        >
          <span
            className={`service-collage-float relative block h-full w-full ${
              draggingIndex === index ? 'service-collage-float-paused' : ''
            }`}
            style={{'--service-photo-index': index}}
          >
            <span
              className={`service-collage-frame relative block h-full w-full overflow-hidden bg-light shadow-sm dark:bg-dark ${
                activeIndex === index ? 'service-collage-frame-active' : ''
              } ${draggingIndex === index ? 'service-collage-frame-dragging' : ''}`}
            >
              <span className="service-collage-shine" />
              <Image
                src={urlFor(image).width(760).quality(78).auto('format').url()}
                alt={getImageAlt(image, title, index)}
                fill
                draggable={false}
                sizes="(max-width: 768px) 58vw, (max-width: 1024px) 260px, 340px"
                className="pointer-events-none select-none object-cover transition duration-700 ease-out hover:scale-105"
              />
            </span>
          </span>
        </button>
      ))}
    </div>
  )
}

function MyServicesItems({item}) {
  const serviceImages = Array.isArray(item.serviceImages)
    ? item.serviceImages.filter((image) => image?.asset).slice(0, 4)
    : []

  return (
    <div className="service-panel-enter mt-5 flex flex-col items-center md:flex-row md:gap-5 lg:justify-around lg:gap-10">
      {serviceImages.length > 0 ? (
        <ServiceImageCollage images={serviceImages} title={item.title} />
      ) : (
        item.imageSrc && (
          <Image
            src={urlFor(item.imageSrc).width(720).quality(78).auto('format').url()}
            alt={item.title}
            className="service-single-image h-auto w-full max-w-[360px] object-contain md:w-[260px] lg:w-[400px]"
            width={400}
            height={600}
            sizes="(max-width: 768px) 82vw, (max-width: 1024px) 260px, 400px"
          />
        )
      )}
      <div className="service-copy-enter mt-5 flex flex-col gap-8 text-center md:max-w-[200px] lg:max-w-[250px]">
        <h3 className="gap-5 font-nanum text-sm font-bold uppercase leading-snug text-dark dark:text-light md:text-base">
          {item.title}
        </h3>
        <p className="text-sm text-dark dark:text-light md:text-left">{item.description}</p>
      </div>
    </div>
  )
}

export default MyServicesItems
