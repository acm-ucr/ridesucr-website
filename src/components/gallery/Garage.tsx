import React from "react";
import PicturesGrid from "./PicturesGrid";

const Garage = () => {
  return (
    <div className="w-[77rem] pr-10 pb-10 pl-10">
      <div className="ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2x1 overflow-hidden rounded-xl p-[5px] ring-1 backdrop-blur-md">
        <PicturesGrid />
      </div>
    </div>
  );
};

export default Garage;
