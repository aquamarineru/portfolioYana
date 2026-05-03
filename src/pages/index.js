import Cover from '@/components/Cover'
import About from '@/components/About'
import Selected from '@/components/Selected'
import { client, urlFor } from '../../lib/client'
import MyServices from '@/components/myServices/MyServices'
import Contact from '@/components/Contact'
import Cookies from '@/components/Cookies'
import Layout from '@/components/Layout'


export default function Home({
  carouselData,
  contactData,
  homeData,
  servicesData,
  aboutData,
  seoData,
  socialSettings,
  sectionText,
}) {

  return (
    <Layout seoData={seoData}>
        <Cookies />
        <Cover homeData={homeData} />
        <About aboutData={aboutData} socialSettings={socialSettings} sectionText={sectionText} />
        <Selected carouselData={carouselData} sectionText={sectionText} />
        <MyServices servicesData={servicesData} sectionText={sectionText} />
        <Contact contactData={contactData} socialSettings={socialSettings} socialLinks={aboutData?.[0]?.socialLinks} sectionText={sectionText} />

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
        imageFilterSettings,
        imageOverlay,
        button,
        secondaryButton,
        "videoFileUrl": videoAnimation.fallback.asset->url,
      }
    `;
    const homeData = await client.fetch(homeQuery);
    
    const aboutQuery = `
    *[_type == "about"]{
      title,
      image,
      content,
      socialLinks
    }
  `;
    const aboutData = await client.fetch(aboutQuery);

    const contactQuery = `
    *[_type == "contact"]{
      title,
      imageSrc
    }
  `;
    const contactData = await client.fetch(contactQuery);

    const socialSettingsQuery = `
    *[_type == "socialSettings"][0]{
      instagram,
      tiktok,
      facebook,
      whatsapp,
      telegram,
      viber
    }
  `;
    const socialSettings = await client.fetch(socialSettingsQuery);

    const sectionTextQuery = `
    *[_type == "sectionText" && !(_id in path("drafts.**"))][0]{
      aboutDescription,
      selectedWorkDescription,
      myServicesDescription,
      contactDescription
    }
  `;
    const sectionText = await client.fetch(sectionTextQuery);

    const carouselQuery = `
    *[_type == "carousel" && !(_id in path("drafts.**")) && hideFromWebsite != true] | order(coalesce(orderRank, "zzzzzz") asc, _createdAt asc) {
      image{
        ...,
        asset->{
          _id,
          metadata{
            lqip
          }
        }
      }
    }
  `;
    const carouselData = await client.fetch(carouselQuery);
    const servicesQuery = '*[_type == "service" && !(_id in path("drafts.**")) && hideFromWebsite != true] | order(coalesce(orderRank, "zzzzzz") asc, _createdAt asc)';
    const servicesData = await client.fetch(servicesQuery);


    return {
      props: {
        seoData,
        carouselData,
        contactData,
        homeData,
        aboutData,
        servicesData,
        socialSettings,
        sectionText,
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
  const servicesQuery = '*[_type == "service" && !(_id in path("drafts.**"))]';
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
