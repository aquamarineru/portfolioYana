import React from 'react'
import { client } from '../../../lib/client'
import { format } from 'date-fns'
import Link from 'next/link'
import { CgArrowLongLeft } from 'react-icons/cg'
import Content from '@/components/Content'
import Head from 'next/head'



const Photo = ({ photo }) => {
    const date = format(new Date(photo.publishedDate), 'dd MMMM yyyy')
    return (
        <div>
            <Head>
                <title>{photo.meta_title}</title>
                <meta property="og:title" content={photo.meta_title} />
                <meta property="og:description" content={photo.meta_description} />
                {photo.meta_image && (
                    <meta property="og:image" content={photo.meta_image.asset.url} />
                )}
                <meta property="og:type" content="website" />
            </Head>  
            <Link href={'/portfolio'} className="flex items-center gap-3 text-tomatoes font-ricordi font-bold uppercase absolute top-24 left-0 px-3 text-sm md:top-28 md:px-7 lg:top-36 lg:pl-24 lg:text-xl">
               <CgArrowLongLeft className="text-tomatoes" size={20}/> Back
            </Link>
            <div className='pt-32 px-7'>
                <h2 className='text-tomatoes font-ricordi text-2xl text-center md:text-4xl md:w-[500px] md:mx-auto lg:text-5xl lg:w-[800px] font-bold uppercase '>{photo.title}</h2>
                <p className='text-right text-dark dark:text-light lg:text-lg mb-10'>{date}</p>
                <Content body={photo.body}/>
            </div>
        </div>
    )
}
export default Photo

/* export async function getStaticPaths() {
    const query = `*[_type == "photo"] {
        slug {
            current
        }
    }`
    const photos = await client.fetch(query)
    const paths = photos.map((photo) => ({
        params: { slug: photo.slug.current },
    
    }))
    return {
        paths,
        fallback: 'blocking'
    }
} */
export async function getStaticPaths() {
    const query = `*[_type == "photo" && defined(slug.current)] {
        'slug': slug.current
    }`
    const photos = await client.fetch(query)

    if (!photos) {
        // Handle the case where photos is null or undefined
        // You can return an appropriate fallback or error message
        return {
            notFound: true, // Return a 404 page or fallback component
        }
    }

    const paths = photos.map((photo) => ({
        params: { slug: String(photo.slug) },
    }))

    return {
        paths,
        fallback: 'blocking',
    }
}


export async function getStaticProps({ params: { slug } }) {
    const query = `*[_type == "photo" && slug.current == '${slug}'][0]`
    const photo = await client.fetch(query, { slug })

    return {
        props: {
            photo,
        },
        revalidate: 60,
    }
}