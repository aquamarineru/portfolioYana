import React from 'react';
import { urlFor } from '../../lib/client';
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

// Custom Arrow components
const NextArrow = ({ onClick }) => {
  return (
    <BsArrowRight 
    style={{ 
      color: "#d93333", 
      fontSize: "25px", 
      position: "absolute",
      top: "50%",
      right: "0",
      transform: "translateY(-50%)",
      zIndex: "1"
   }} 
    onClick={onClick} />
  );
}

const PrevArrow = ({ onClick }) => {
  return (
    <BsArrowLeft 
    style={{ 
      color: "#d93333", 
      fontSize: "25px", 
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translateY(-50%)",
      zIndex: "1"
   }}  
    onClick={onClick} 
    />
  );
}


const Selected = ({ carouselData }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
  return (
    <div className="px-4 py-11 lg:px-14">
      <h2 className="font-ricordi text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase">
        Selected Work
      </h2>
      <h3 className='font-tomatoes text-xl text-dark dark:text-light text-center font-bold md:text-2xl'>my portfolio</h3>
      <Slider {...settings} className='mt-10 m-auto'>
        {carouselData.map((slide, index) => (
          <div className="flex flex-col items-center m-auto" key={index}>
            <Image
              src={urlFor(slide.image.asset).url()}
              alt={slide.image.caption || slide.meta_title}
              width={300}
              height={300}
              className="rounded m-auto object-cover w-[350px] h-[450px] z-0 items-center"
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center items-center mt-5">
        <button className="px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-ricordi uppercase">
          <Link href="/portfolio">View all</Link>
        </button>
      </div>
    </div>
  );
};

export default Selected;

