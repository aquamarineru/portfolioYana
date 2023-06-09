import Cover from '@/components/Cover'
import About from '@/components/About'
import Head from 'next/head'
import Selected from '@/components/Selected'
import { client } from '../../lib/client'
import MyServices from '@/components/myServices/MyServices'
import Contact from '@/components/Contact'
import Cookies from '@/components/Cookies'




export default function Home({ carouselData }) {
  return (
    <>
    <Head>
        <title>Mykonos Love Photography</title>
        <meta property="og:title" name="title" content="Mykonos Love Photography" />
        <meta property="og:description" name="description" content="Yana Korobeinyk is a photographer based in Mykonos Island who specializes in wedding, love story, and portrait photography. Her photography captures the essence of love and the emotions that radiate happiness." />
        <meta property="og:image" content="/about.jpg"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head> 
      <Cookies />
      <Cover />
      <About />
      <Selected carouselData={carouselData} />
      <MyServices />
      <Contact />

    </>
  )
}
export async function getServerSideProps() {
  const query = `
    *[_type == "carousel"] {
      image 
    }
  `;
  const carouselData = await  client.fetch(query);

  return {
    props: {
      carouselData,
    },
  };
};
