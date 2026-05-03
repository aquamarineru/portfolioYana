import React, { useState } from "react"
import { loadPhotos } from "./api/photos"
import PhotosGrid from "../components/PhotosGrid"
import Photo from "../components/Photo"
import Head from "next/head"
import Link from "next/link"
import { CgArrowLongLeft } from 'react-icons/cg'
import Header from "@/components/Header"

const LOAD_MORE = 6
export default function Portfolio({initialPhotos, total}) {
    const [photos, setPhotos] = useState(initialPhotos)
    const [loadedAmount, setLoadedAmount] = useState(LOAD_MORE)
    const [ loading, setLoading ] = useState(false)
    const visiblePhotos = photos.filter((photo) => photo?.slug?.current && photo.hideFromWebsite !== true)

    const isLoadButtonVisible = loadedAmount < total

    const getMorePhotos = async () => {
        setLoading(true)
        try{
            const data = await fetch(`/api/photos?start=${loadedAmount}&end=${loadedAmount + LOAD_MORE}`).then((res) => res.json())
            setLoadedAmount(loadedAmount + LOAD_MORE)
            setPhotos([...photos, ...data.photos])
            setLoading(false)

        }catch(error) {
            setLoading(false)
        }
    }
    return (
        <>
        <Header />
        <Head>
            <title>Photography Portfolio | Weddings, Love Story & Portraits in Mykonos Island</title>
            <meta property="og:title" name="title" content="Photography Portfolio | Weddings, Love Story & Portraits in Mykonos Island Greece" />
            <meta property="og:description" name="description" content="Yana Korobeinyk, a renowned photographer from Greece specializing in wedding, romance, and portrait photography, captures your most cherished moments with elegance and passion." />
        </Head>
        <div className="relative min-h-screen scroll-m-2 w-full pt-44 md:pt-48">
            <Link href={'/'} className="absolute left-0 top-32 flex items-center gap-3 px-3 text-sm font-bold uppercase text-tomatoes md:px-7 lg:pl-24 lg:text-xl">
               <CgArrowLongLeft className="text-tomatoes" size={20}/> Back
            </Link>
            <h2 className='font-nanum text-2xl text-tomatoes text-center md:text-4xl lg:text-5xl font-bold uppercase mb-10'>Portfolio</h2>
            <PhotosGrid >
                {visiblePhotos.map((photo) => (
                    <Photo key={photo.slug.current} {...photo} />
                ))}
            </PhotosGrid>
            {isLoadButtonVisible && (
                <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
                 onClick={getMorePhotos}
                 disabled={loading}>
                    <button className='px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-nanum uppercase mt-10'>Load More</button>
                 </div>
            )}
            </div>
        </>
    )
}
export const getServerSideProps = async () => {
    const { photos, total } = await loadPhotos(0, LOAD_MORE)

    return {
        props: {
            initialPhotos: photos,
            total
        }
    }
}

