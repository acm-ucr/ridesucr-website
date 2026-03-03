import Info from "@/components/about/Info";
import Image from "next/image";
import car7 from "@/public/cars/car7.webp";
import car6 from "@/public/cars/car6.webp";
import Link from "next/link";
import upArrow from "@/public/Arrow_up.svg";

const InfoSection = () => {
  return (
    <div className="flex w-full justify-center pb-10">
      <div className="relative flex w-2/3 flex-col gap-6">
        <Info info="Rides @ UCR is a student-led club that aims to bring the car community together. We organize weekly events, such as car meets, with the purpose of fostering a community of enthusiasts." />

        <div className="relative h-4 w-full">
          <div className="absolute top-1/2 left-1/2 h-[1px] w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
        </div>

        <div className="relative flex w-full flex-row items-stretch gap-6">
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[1px] w-full -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 blur-sm" />

          <div className="flex flex-1">
            <Info info="Anyone is welcome to join our club, even if you're still learning about cars. We strive to be a beginner friendly club that can serve as your first steps into the car community as a whole. Joining the club is completely free, and most of our events are open to students as well as the general public." />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-1/2 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white to-transparent opacity-40" />
          </div>

          <div className="flex flex-1 flex-col gap-4">
            <div className="aspect-[3/2] overflow-hidden rounded-lg">
              <Image src={car6} alt="Car6" />
            </div>

            <div className="relative h-3 w-full">
              <div className="absolute top-1/2 left-1/2 h-[1px] w-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
            </div>

            <div className="aspect-[3/2] overflow-hidden rounded-lg">
              <Image src={car7} alt="Car7" />
            </div>
          </div>
        </div>

        <div className="relative h-4 w-full">
          <div className="absolute top-1/2 left-1/2 h-[1px] w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
        </div>

        <Info info="Feel free to support us by buying our awesome merch or visiting one of our meets!" />
      </div>

      <Link href="/#moto">
        <button className="absolute top-5/8 right-1/16 -translate-y-1/2 h-16 w-16 rounded-full border-[0.5px] border-white bg-white/15 backdrop-blur-lg items-center justify-center hidden lg:flex">
          <Image src={upArrow} alt="Up Arrow" />
        </button>
      </Link>
        
    </div>
  );
};

export default InfoSection;
