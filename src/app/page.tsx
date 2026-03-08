import HomeCover from "@/components/home/HomeCover";
import Moto from "@/components/home/Moto";
import AboutCover from "@/components/about/AboutCover";
import Title from "@/components/Title";
import InfoSection from "@/components/about/InfoSection";

const Home = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden pt-6">
      <HomeCover />
      <div className="-mt-10 flex h-screen w-full flex-col items-center justify-center">
        <Moto />
      </div>
      <div id="about" className="relative pt-20">
        <AboutCover />
        <Title text="About Us" />
        <InfoSection />
      </div>
    </div>
  );
};

export default Home;
