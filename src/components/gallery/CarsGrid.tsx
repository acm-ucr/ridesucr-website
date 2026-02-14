import Image from "next/image";
import { galleryData } from "@/data/galleryData";

const CarsGrid = () => {
  return (
    <div className="grid h-fit grid-cols-1 gap-5 md:grid md:h-fit md:grid-cols-1 lg:grid-cols-3 lg:grid-rows-3 lg:h-[75rem] lg:gap-1.5">
      {galleryData.map((item, index) => (
        <div
          key={index}
          className={` ${index == 0 ? "lg:border-ridesucr-white flex items-center justify-center lg:rounded-none lg:rounded-tl-md border lg:ring-0 lg:bg-transparent lg:shadow-none lg:p-0 ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2x overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md" : ""} ${index == 1 ? "lg:border-ridesucr-white flex items-center justify-center border lg:rounded-none lg:ring-0 lg:bg-transparent lg:shadow-none lg:p-0 ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2xl overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md" : ""} ${index == 2 ? "lg:border-ridesucr-white flex items-center justify-center border lg:rounded-none lg:rounded-tr-md lg:ring-0 lg:bg-transparent lg:shadow-none lg:p-0 ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2xl overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md" : ""} ${index == 3 ? "lg:border-ridesucr-white flex items-center justify-center border lg:rounded-none lg:ring-0 lg:bg-transparent lg:shadow-none lg:p-0 ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2xl overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md" : ""} ${index == 4 ? "lg:border-ridesucr-white flex items-center justify-center border lg:rounded-none lg:ring-0 lg:bg-transparent lg:shadow-none lg:p-0 ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2xl overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md" : ""} ${index == 5 ? "lg:border-ridesucr-white flex items-center justify-center border lg:rounded-none lg:ring-0 lg:bg-transparent lg:shadow-none lg:p-0 ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2xl overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md" : ""} ${index == 6 ? "lg:border-ridesucr-white flex items-center justify-center border lg:rounded-none lg:rounded-bl-md lg:ring-0 lg:bg-transparent lg:shadow-none lg:p-0 ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2xl overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md" : ""} ${index == 7 ? "lg:border-ridesucr-white flex items-center justify-center border lg:rounded-none lg:ring-0 lg:bg-transparent lg:shadow-none lg:p-0 ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2xl overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md" : ""} ${index == 8 ? "lg:border-ridesucr-white flex items-center justify-center border lg:rounded-none lg:rounded-br-md lg:ring-0 lg:bg-transparent lg:shadow-none lg:p-0 ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2xl overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md" : ""} `}
        >
          <Image
            className={`${"flex h-full w-full items-center justify-center object-cover lg:rounded-none rounded-xl"}`}
            src={item.Pictures}
            alt={item.Alt}
          />
        </div>
      ))}
    </div>
  );
};

export default CarsGrid;
