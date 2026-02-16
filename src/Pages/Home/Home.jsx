import React from 'react';
import Banner from '../../components/Banner/Banner';
import VideoReviews from '../../components/VideoReviews';
import SoftwareSection from '../../components/Header/SoftwareSection';
import FAQSection from '../../components/FAQSections';




const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <VideoReviews></VideoReviews>
      <SoftwareSection></SoftwareSection>
      <FAQSection></FAQSection>
    </div>
  );
};

export default Home;


