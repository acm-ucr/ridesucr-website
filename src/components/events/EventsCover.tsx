"use client";
import Image from "next/image";
import EventsBg from "@/../public/cars/car6.webp"; 

const EventsCover = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
      <Image
        src={EventsBg}
        alt=""
        fill
        priority
        className="object-cover blur-md scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black from-15% via-transparent via-50% to-black to-85%" />
    </div>
  );
};

export default EventsCover;