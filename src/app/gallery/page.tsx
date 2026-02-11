import GarageCover from "@/components/gallery/GarageCover";
import Gallery from "../../components/gallery/Garage";
import Title from "@/components/Title";

const OurGallery = () => {
  return (
    <main className="relative min-h-screen">
      <GarageCover />
    <div className="px-4 py-8">
      <Title text="Our Garage" />
      <Gallery />
    </div>
    </main>
  );
};

export default OurGallery;
