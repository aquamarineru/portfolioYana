import Cover from '@/components/Cover'
import About from '@/components/About'
import Selected from '@/components/Selected'
import { client, urlFor } from '../../lib/client'
import MyServices from '@/components/myServices/MyServices'
import Contact from '@/components/Contact'
import Cookies from '@/components/Cookies'
import Layout from '@/components/Layout'


export default function Home({ carouselData, homeData, servicesData }) {

  return (
    <>
        <Cookies />
        <Cover homeData={homeData} />
        <About />
        <Selected carouselData={carouselData} />
        <MyServices servicesData={servicesData} />
        <Contact />

    </>
  )
}
export async function getStaticProps() {
  try {
    const carouselQuery = `
      *[_type == "carousel"] {
        image 
      }
    `;
    const carouselData = await client.fetch(carouselQuery);

    const homeQuery = `
      *[_type == "home"]{
        seoTitle,
        seoDescription,
        seoImage,
        seoKeywords,
        title,
        subtitle,
        image,
        button,
        "videoFileUrl": videoAnimation.fallback.asset->url,
      }
    `;
    const homeData = await client.fetch(homeQuery);

    const servicesQuery = '*[_type == "service"]';
    const servicesData = await client.fetch(servicesQuery);


    return {
      props: {
        carouselData,
        homeData,
        servicesData,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};
