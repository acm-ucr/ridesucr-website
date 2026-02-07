import React from "react";
import { galleryData } from "@/data/galleryData";

const PicturesGrid = () => {
  return (
    <div className="grid h-[850px] grid-cols-3 grid-rows-3 gap-1.5">
      {galleryData.map((item, index) => (
        <div key={index} className={`${item.className}`}>
          <img
            className={`${item.ImgProperties || "flex h-full w-full items-center justify-center object-cover"}`}
            src={item.Pictures}
            alt={item.Alt}
          />
        </div>
      ))}
    </div>
  );
};

export default PicturesGrid;
