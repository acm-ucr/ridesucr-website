import Image from "next/image";
import { galleryData } from "@/data/galleryData";

const CarsGrid = () => {
  return (
    <div className="grid h-fit grid-cols-1 gap-5 md:grid md:h-fit md:grid-cols-1 lg:h-[75rem] lg:grid-cols-3 lg:grid-rows-3 lg:gap-1.5">
      {galleryData.map((item, index) => (
        <div
          key={index}
          className={` ${index == 0 ? "lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2x flex items-center justify-center overflow-hidden rounded-xl border p-[5px] ring-1 backdrop-blur-md lg:rounded-none lg:rounded-tl-md lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0" : ""} ${index == 1 ? "lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center overflow-hidden rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0" : ""} ${index == 2 ? "lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center overflow-hidden rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:rounded-tr-md lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0" : ""} ${index == 3 ? "lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center overflow-hidden rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0" : ""} ${index == 4 ? "lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center overflow-hidden rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0" : ""} ${index == 5 ? "lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center overflow-hidden rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0" : ""} ${index == 6 ? "lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center overflow-hidden rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:rounded-bl-md lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0" : ""} ${index == 7 ? "lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center overflow-hidden rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0" : ""} ${index == 8 ? "lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center overflow-hidden rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:rounded-br-md lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0" : ""} `}
        >
          <Image
            className={`${"flex h-full w-full items-center justify-center rounded-xl object-cover lg:rounded-none"}`}
            src={item.Pictures}
            alt={item.Alt}
          />
        </div>
      ))}
    </div>
  );
};

export default CarsGrid;
