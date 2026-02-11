import AboutCover from "@/components/about/AboutCover";
import InfoSection from "@/components/about/InfoSection";
import Title from "@/components/Title";

const About = () => {
  return (

    <main className="relative min-h-screen">
      <AboutCover />

    <div>
      <Title text="About Us" />
      <InfoSection />
    </div>
    </main>
  );
};

export default About;
