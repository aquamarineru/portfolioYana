import Cover from '@/components/Cover'
import About from '@/components/About'
import Selected from '@/components/Selected'
import { client, urlFor } from '../../lib/client'
import MyServices from '@/components/myServices/MyServices'
import Contact from '@/components/Contact'
import Cookies from '@/components/Cookies'
import Layout from '@/components/Layout'


export default function Home({ carouselData, homeData, servicesData, aboutData, seoData }) {

  return (
    <Layout seoData={seoData}>
        <Cookies />
        <Cover homeData={homeData} />
        <About aboutData={aboutData} />
        <Selected carouselData={carouselData} />
        <MyServices servicesData={servicesData} />
        <Contact />

    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const seoQuery = `
      *[_type == "seo"]{
        pageTitle,
        metaDescription,
        metaKeywords,
        robotsDirective,
        sitemapPriority,
        noFollowLinks,
        noIndexPage,
        canonicalUrl,
          ogTitle,
          ogDescription,
          "ogImage": ogImage.asset->url,
          ogType
        
      }`;
    const seoData = await client.fetch(seoQuery);

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
        seoData,
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
}
/* export async function getServerSideProps() {
  try{
    const seoQuery = `
    *[_type == "seo"]{
      pageTitle,
      metaDescription,
      metaKeywords,
      robotsDirective,
      sitemapPriority,
      noFollowLinks,
      noIndexPage,
      canonicalUrl,
        ogTitle,
        ogDescription,
        "ogImage": ogImage.asset->url,
        ogType
      
    }`;
  const seoData = await client.fetch(seoQuery);

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
      seoData,
      carouselData,
      homeData,
      aboutData,
      servicesData,
    },
  };
  }
  catch(error){
    console.error(error)
    return {
      props: {
        error: "Failed to fetch data."
      }
    };
  }
} */
/*  */
