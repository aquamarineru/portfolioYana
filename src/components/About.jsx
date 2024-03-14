import React from 'react'
import Image from 'next/image'
import Social from './Social'
import BlockContent from '@sanity/block-content-to-react'
import { clientConfig, urlFor } from '../../lib/client'

const About = ({aboutData}) => {
  const data = aboutData?.[0] || {};
  
  // Corrected serializers object
  const serializers = {
    types: {
      // Correct type name from 'blocks' to 'block'
      block: props => (
        // Added return statement
        <p className='mb-6'>{props.children}</p>
      ),
      // Add serializers for other types as needed, for example 'image'
      image: props => (
        <Image 
          src={urlFor(props.node.asset).url()} 
          alt={props.node.alt} 
          layout="responsive"
          width={props.node.asset.metadata.dimensions.width} 
          height={props.node.asset.metadata.dimensions.height}
        />
      ),
    },
  };

  return (
      <div className='pt-24 md:m-0 font-display' id='about'>
        <h2 className='font-ricordi text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase'>{data.title}</h2>
        <h3 className='font-tomatoes text-xl text-dark dark:text-light text-center font-bold md:text-2xl'>{data.subtitle}</h3>
        
        <div className='p-7 py-16 flex flex-col-reverse items-center justify-center md:flex-row md:items-start md:justify-around lg:justify-center lg:gap-10'>
            <div className='m-auto flex flex-col items-center text-center gap-5 md:max-w-[400px] md:text-left md:m-0 '>
                <BlockContent
                  blocks={data.content}
                  serializers={serializers}
                  projectId={clientConfig.projectId}
                  dataset={clientConfig.dataset}
                  className="text-dark dark:text-light block-content" />
                <Social className="mt-5" />
            </div>
            {data.image && (
                <div className="flex flex-wrap justify-center mb-5">
                  <Image
                    src={urlFor(data.image).url()} 
                    alt='about'
                    width={200}
                    height={400}
                    sizes='(max-width: 768px) 100vw, 400px'
                    className='rounded-full object-cover z-0 md:w-[280px] md:h-auto md:rounded-none lg:w-auto'
                    priority={true}
                  />
                </div>
            )}
        </div>
      </div>
  );
};

export default About;
