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

const getBlurProps = (image) => {
  const blurDataURL = image?.asset?.metadata?.lqip

  return blurDataURL ? {placeholder: 'blur', blurDataURL} : {}
}


const Selected = ({ carouselData, sectionText }) => {
  const description = sectionText?.selectedWorkDescription ?? 'my portfolio';

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
if (!carouselData) {
  return <div>Loading...</div>;
} 
  return (
    <div className="px-4 py-11 lg:px-14">
      <h2 className="font-nanum text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase">
        Selected Work
      </h2>
      <h3 className='font-tomatoes text-xl text-dark dark:text-light text-center font-bold md:text-2xl'>{description}</h3>
      <Slider {...settings} className='mt-10 m-auto'>
        {carouselData.map((slide, index) => (
          <div className="flex flex-col items-center m-auto" key={index}>
            <Image
              src={urlFor(slide.image).width(520).height(680).quality(76).auto('format').url()}
              alt={slide.image.caption || slide.meta_title}
              width={350}
              height={450}
              sizes="(max-width: 480px) 88vw, (max-width: 800px) 44vw, 350px"
              className="rounded m-auto object-cover w-[350px] h-[450px] z-0 items-center"
              {...getBlurProps(slide.image)}
            />
          </div>
        ))}
      </Slider>
      <div className="flex justify-center items-center mt-5">
        <Link href="/portfolio">
          <button className="px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-nanum uppercase">
            View all
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Selected;

