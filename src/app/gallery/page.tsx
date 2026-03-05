import GarageCover from "@/components/gallery/GarageCover";
import Gallery from "@/components/gallery/Garage";
import Title from "@/components/Title";

const OurGallery = () => {
  return (
    <div className="relative min-h-screen px-4 py-8">
      <GarageCover />
      <Title text="Our Garage" />
      <Gallery />
    </div>
  );
};

export default OurGallery;
