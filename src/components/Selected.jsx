import React from 'react';
import { urlFor } from '../../lib/client';
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 2000, min: 1000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1000, min: 800 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 800, min: 450 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 450, min: 0 },
    items: 1,
  },
};

const Selected = ({ carouselData }) => {
  console.log(carouselData);
  return (
    <div className="min-h-max">
      <h2 className="font-ricordi text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase">
        Selected Work
      </h2>
      <h3 className='font-tomatoes text-xl text-dark dark:text-light text-center font-bold md:text-2xl'>my portfolio</h3>

      <Carousel
        swipeable
        draggable
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
/*         removeArrowOnDeviceType={["tablet", "mobile"]} */
        itemClass="carousel-item-padding-40-px"
        className="inline-block py-16"
      >
        {carouselData.map((slide, index) => (
          <div key={index} className="flex justify-center items-center w-full">
            <Image
              src={urlFor(slide.image.asset).url()}
              alt={slide.image.caption || slide.meta_title}
              width={300}
              height={300}
              className="object-cover rounded-lg w-[300px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 md:w-[500px]"
            />
          </div>
        ))}
      </Carousel>
      <div className="flex justify-center items-center mt-7">
      <button className="px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-ricordi uppercase">
        <Link href="/portfolio">View all</Link>
      </button>
      </div>
    </div>
  );
};

export default Selected;

