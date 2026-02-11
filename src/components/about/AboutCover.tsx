"use client";
import Image from "next/image";
import AboutBg from "@/../public/cars/car4.webp";

const AboutCover = () => {
  return (
    <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden bg-black">
      <Image
        src={AboutBg}
        alt=""
        fill
        priority
        className="object-cover blur-sm scale-110 opacity-80" 
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black from-15% via-transparent via-50% to-black to-85%" />
    </div>
  );
};

export default AboutCover;