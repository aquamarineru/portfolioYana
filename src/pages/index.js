import Cover from '@/components/Cover'
import About from '@/components/About'
import Selected from '@/components/Selected'
import { client, urlFor } from '../../lib/client'
import MyServices from '@/components/myServices/MyServices'
import Contact from '@/components/Contact'
import Cookies from '@/components/Cookies'
import Layout from '@/components/Layout'


export default function Home({ carouselData, homeData, servicesData, aboutData }) {

  return (
    <>
        <Cookies />
        <Cover homeData={homeData} />
        <About aboutData={aboutData} />
        <Selected carouselData={carouselData} />
        <MyServices servicesData={servicesData} />
        <Contact />

    </>
  )
}
export async function getStaticProps() {
  try {

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
    
    const aboutQuery = `
    *[_type == "about"]{
      title,
      subtitle,
      image,
      content
    }
  `;
    const aboutData = await client.fetch(aboutQuery);

    const carouselQuery = `
    *[_type == "carousel"] {
      image 
    }
  `;
    const carouselData = await client.fetch(carouselQuery);
    const servicesQuery = '*[_type == "service"]';
    const servicesData = await client.fetch(servicesQuery);


    return {
      props: {
        carouselData,
        homeData,
        aboutData,
        servicesData,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error(error);
    return { props: {} };
  }
};
