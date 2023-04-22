import Cover from '@/components/Cover'
import About from '@/components/About'
import Head from 'next/head'
import Selected from '@/components/Selected'
import { client } from '../../lib/client'
import MyServices from '@/components/myServices/MyServices'
import Contact from '@/components/Contact'



export default function Home({ carouselData }) {
  return (
    <>
    <Head>
        <title>Greek Love Photography</title>
        <meta property="og:title" name="title" content="Greek Love Photography" />
        <meta property="og:description" name="description" content="Yana Korobeinyk, a renowned photographer from Greece specializing in wedding, romance, and portrait photography, captures your most cherished moments with elegance and passion." />
        <meta property="og:image" content="/about.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="" />
      </Head>
      <Cover />
      <About />
      <Selected carouselData={carouselData} />
      <MyServices />
      <Contact />

    </>
  )
}
export const getStaticProps = async () => {
  const query = `
    *[_type == "carousel"] {
      image 
    }
  `;
  const carouselData = await client.fetch(query);
  console.log(carouselData); 

  return {
    props: {
      carouselData,
    },
  };
};
