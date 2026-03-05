import CarsGrid from "@/components/gallery/CarsGrid";

const Garage = () => {
  return (
    <div className="lg:justify-center lg:pb-4">
      <div className="lg:ring-ridesucr-white/70 lg:bg-ridesucr-gray/45 lg:shadow-2x1 lg:rounded-xl lg:p-[5px] lg:ring-1 lg:backdrop-blur-md">
        <CarsGrid />
      </div>
    </div>
  );
};

export default Garage;
