import Cover from '@/components/Cover'
import About from '@/components/About'
import Head from 'next/head'
import Selected from '@/components/Selected'
import { client } from '../../lib/client'
import MyServices from '@/components/myServices/MyServices'
import Contact from '@/components/Contact'
import Cookies from '@/components/Cookies'




export default function Home({ carouselData, homeData }) {
  return (
    <>
      <Cookies />
      <Cover homeData={homeData} />
      <About />
      <Selected carouselData={carouselData} />
      <MyServices />
      <Contact />

    </>
  )
}
export async function getServerSideProps() {
  try {
    const carouselQuery = `
      *[_type == "carousel"] {
        image 
      }
    `;
    const carouselData = await client.fetch(carouselQuery);

    const homeQuery = `
      *[_type == "home"]{
        content,
        "videoFileUrl": content.videoAnimation.fallback.asset->url,
      }
    `;
    const homeData = await client.fetch(homeQuery);

    return {
      props: {
        carouselData,
        homeData
      },
    };
  } catch (error) {
    // Log the error and return empty props or a 500 status, based on your requirements
    console.error(error);
    return { props: {} };
  }
};
