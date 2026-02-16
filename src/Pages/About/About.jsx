import AboutHero from "../../components/About/AboutHero";
import FullCapability from "../../components/About/FullCapability";
import MissionVision from "../../components/About/MissionVision";
import TeamSection from "../../components/About/TeamSection";
import TechStack from "../../components/About/TechStack";
import Testimonials from "../../components/About/Testimonials";
import WhyChooseUs from "../../components/About/WhyChooseUs";
import WorkProcess from "../../components/About/WorkProcess";


const About = () => {
  return (
    <div className=" text-white overflow-hidden max-w-6xl mx-auto">
      <AboutHero />
      <MissionVision />
      <WhyChooseUs />
      <WorkProcess />
      <TeamSection />
      <Testimonials />
      <TechStack></TechStack>
      <FullCapability></FullCapability>
    </div>
  );
};

export default About;