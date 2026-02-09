import React from "react";
import PicturesGrid from "./CarsGrid";

const Garage = () => {
  return (
    <div className="px-10 pb-10">
      <div className="ring-ridesucr-white/70 bg-ridesucr-gray/45 shadow-2x1 overflow-hidden rounded-xl p-2 ring-1 backdrop-blur-md">
        <PicturesGrid />
      </div>
    </div>
  );
};

export default Garage;
