import AboutCover from "@/components/about/AboutCover";
import InfoSection from "@/components/about/InfoSection";
import Title from "@/components/Title";

const About = () => {
  return (
    <div className="relative min-h-screen">
    <AboutCover />
    <Title text="About Us" />
    <InfoSection />
  </div>
  );
};

export default About;
