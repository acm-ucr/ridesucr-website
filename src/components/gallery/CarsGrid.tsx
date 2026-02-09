import Image from "next/image";
import { galleryData } from "@/data/galleryData";

const PicturesGrid = () => {
  return (
    <div className="grid h-[75rem] grid-cols-3 grid-rows-3 gap-1.5">
      {galleryData.map((item, index) => (
        <div
          key={index}
          className={` ${index == 0 ? "border-ridesucr-white flex items-center justify-center overflow-hidden rounded-tl-md border" : ""} ${index == 1 ? "border-ridesucr-white flex items-center justify-center border" : ""} ${index == 2 ? "border-ridesucr-white flex items-center justify-center overflow-hidden rounded-tr-md border" : ""} ${index == 3 ? "border-ridesucr-white flex items-center justify-center border" : ""} ${index == 4 ? "border-ridesucr-white flex items-center justify-center border" : ""} ${index == 5 ? "border-ridesucr-white flex items-center justify-center border" : ""} ${index == 6 ? "border-ridesucr-white flex items-center justify-center overflow-hidden rounded-bl-md border" : ""} ${index == 7 ? "border-ridesucr-white flex items-center justify-center border" : ""} ${index == 8 ? "border-ridesucr-white flex items-center justify-center overflow-hidden rounded-br-md border" : ""} `}
        >
          <Image
            className={`${"flex h-full w-full items-center justify-center object-cover"}`}
            src={item.Pictures}
            width={500}
            height={500}
            alt={item.Alt}
          />
        </div>
      ))}
    </div>
  );
};

export default PicturesGrid;
