
import MiniProcess from "../../components/Services/MiniProcess";
import PricingPreview from "../../components/Services/PricingPreview";
import ServiceCard from "../../components/Services/ServiceCard";
import ServicesCTA from "../../components/Services/ServicesCTA";
import ServicesGrid from "../../components/Services/ServicesGrid";
import ServicesHero from "../../components/Services/ServicesHero";
import TechStack from "../../components/Services/TechStack";



const Services = () => {
  return (
    <div className=" text-white overflow-hidden max-w-6xl mx-auto">
      <ServicesHero></ServicesHero>
      <ServiceCard></ServiceCard>
      <ServicesGrid></ServicesGrid>
      <ServicesCTA></ServicesCTA>
      <PricingPreview></PricingPreview>
      <TechStack></TechStack>
      <MiniProcess></MiniProcess>
      
    </div>
  );
};

export default Services;