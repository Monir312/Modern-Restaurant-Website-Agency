import React from 'react';
import PortfolioHero from '../../components/Portfolio/PortfolioHero';
import CaseStudiesSection from '../../components/Portfolio/CaseStudiesSection';

const Portfolio = () => {
  return (
    <div className=" text-white overflow-hidden max-w-6xl mx-auto ">
      <PortfolioHero></PortfolioHero>
      <CaseStudiesSection></CaseStudiesSection>
    </div>
  );
};

export default Portfolio;