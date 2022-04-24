import React, { FC } from 'react';
import Navigation from 'modules/Navigation';
import BannerSection from 'modules/BannerSection';
import DetailSection from 'modules/DetailSection';
import LocationSection from 'modules/LocationSection';

const ClothingPage: FC<any> = () => {
  const baseURL = process.env.NEXT_PUBLIC_NUCLEUS_URL;

  return (
    <>
      <Navigation/>
      <BannerSection/>
      <DetailSection/>
      <LocationSection/>
    </>
  )
}

 export async function getStaticProps() {
  const baseURL = process.env.NEXT_PUBLIC_NUCLEUS_URL;
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  //const res = await fetch(`${baseURL}get-page-data?category=clothing`);
  //const data = await res.json();
  
  //if (!data) return <p>loading...</p>
  //const pageData: any = data.pageData;
  return {
        props: {
            category: 'clothing',
        },
        revalidate: 600, 
    };
}


export default ClothingPage;
