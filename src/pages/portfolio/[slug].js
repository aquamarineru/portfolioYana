import React from 'react'
import { client } from '../../../lib/client'
import { format } from 'date-fns'
import Link from 'next/link'
import { CgArrowLongLeft } from 'react-icons/cg'
import Content from '@/components/Content'
import Head from 'next/head'
import Header from '@/components/Header'



const Photo = ({ photo }) => {

    const date = format(new Date(photo.publishedDate), 'dd MMMM yyyy')
    return (
        <div>
            <Header />
            <Head>
                <title>{photo.meta_title}</title>
                <meta property="og:title" content={photo.meta_title} />
                <meta property="og:description" content={photo.meta_description} />
                {photo.meta_image && (
                    <meta property="og:image" content={photo.meta_image.asset.url} />
                )}
                <meta property="og:type" content="website" />
            </Head>  
            <Link href={'/portfolio'} className="absolute left-0 top-32 flex items-center gap-3 px-3 text-sm font-bold uppercase text-tomatoes md:px-7 lg:pl-24 lg:text-xl">
               <CgArrowLongLeft className="text-tomatoes" size={20}/> Back
            </Link>
            <div className='px-7 pt-44 md:pt-48'>
                <h2 className='text-tomatoes font-nanum text-2xl text-center md:text-4xl md:w-[500px] md:mx-auto lg:text-5xl lg:w-[800px] font-bold uppercase '>{photo.title}</h2>
                <p className='text-right text-dark dark:text-light lg:text-lg mb-10'>{date}</p>
                <Content body={photo.body}/>
            </div>
        </div>
    )
}
export default Photo

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking',
    }
}


export async function getStaticProps({ params: { slug } }) {
    const decodedSlug = decodeURIComponent(slug)
    const query = `
      *[_type == "photo" && slug.current == $slug && hideFromWebsite != true][0]{
        ...,
        body[]{
          ...,
          asset->{
            _id,
            metadata{
              lqip
            }
          }
        }
      }
    `
    const photo = await client.fetch(query, { slug: decodedSlug })

    if (!photo) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            photo,
        },
        revalidate: 60,
    }
}
