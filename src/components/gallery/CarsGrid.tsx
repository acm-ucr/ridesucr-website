import Image from "next/image";
import { galleryData } from "@/data/galleryData";

const CarsGrid = () => {
  return (
    <div className="grid h-fit grid-cols-1 gap-5 lg:h-[75rem] lg:grid-cols-3 lg:grid-rows-3 lg:gap-1.5">
      {galleryData.map((item, index) => (
        <div
          key={index}
          className={`lg:border-ridesucr-white ring-ridesucr-white/70 bg-ridesucr-gray/45 flex items-center justify-center overflow-hidden rounded-xl border p-[5px] shadow-2xl ring-1 backdrop-blur-md lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none lg:ring-0 ${index == 0 ? "lg:rounded-tl-md" : ""} ${index == 1 ? "" : ""} ${index == 2 ? "lg:rounded-tr-md" : ""} ${index == 3 ? "" : ""} ${index == 4 ? "" : ""} ${index == 5 ? "" : ""} ${index == 6 ? "lg:rounded-bl-md" : ""} ${index == 7 ? "" : ""} ${index == 8 ? "lg:rounded-br-md" : ""} `}
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
