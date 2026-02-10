import Title from "@/components/Title";
const Gallery = () => {
  return (
    <div>
      <Title text="Our Garage" />
      <div className="p-8">
        <Gallery />
      </div>
    </div>
  );
};
export default Gallery;
