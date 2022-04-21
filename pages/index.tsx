import React, { FC } from 'react';
import Navigation from 'modules/Navigation';
import HomeSection from 'modules/HomeSection';
import HomeSlider from 'modules/HomeSlider';
import MiddleSection from 'modules/MiddleSection';
import LocationSection from 'modules/LocationSection';

const HomePage: FC<any> = () => {
  const baseURL = process.env.NEXT_PUBLIC_NUCLEUS_URL;

  return (
    <>
      <Navigation/>
      <HomeSection/>
      <HomeSlider/>
      <MiddleSection/>
      <LocationSection/>
    </>
  )
}

/* export async function getStaticProps() {
  const baseURL = process.env.NEXT_PUBLIC_NUCLEUS_URL;
  const hostUrl = process.env.NEXT_PUBLIC_HOST_URL;
  const res = await fetch(`${baseURL}/mock-test/v1/get-page-data?url=${hostUrl}/mock-annual-exams/`);
  const data = await res.json();
  
  if (!data) return <p>loading...</p>
  const pageData: any = data.pageData;
  return {
    props: {
      pageData,
    },
    revalidate: 600, 
}}*/


export default HomePage;
