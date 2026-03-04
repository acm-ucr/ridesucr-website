import Info from "@/components/about/Info";
import Image from "next/image";
import car7 from "@/public/cars/car7.webp";
import car6 from "@/public/cars/car6.webp";

const InfoSection = () => {
  return (
    <div className="flex w-full justify-center px-4 pb-10">
      <div className="lg:backdrop-blur-0 w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 md:w-5/6 lg:w-2/3 lg:rounded-none lg:border-0 lg:bg-transparent">
        <div className="flex flex-col lg:hidden">
          <Info info="Rides @ UCR is a student-led club that aims to bring the car community together. We organize weekly events, such as car meets, with the purpose of fostering a community of enthusiasts." />

          <div className="relative aspect-[3/2] overflow-hidden">
            <Image src={car6} alt="Car6" fill className="object-cover" />
          </div>

          <Info info="Anyone is welcome to join our club, even if you're still learning about cars. We strive to be a beginner friendly club that can serve as your first steps into the car community as a whole. Joining the club is completely free, and most of our events are open to students as well as the general public." />

          <div className="relative aspect-[3/2] overflow-hidden">
            <Image src={car7} alt="Car7" fill className="object-cover" />
          </div>

          <Info info="Feel free to support us by buying our awesome merch or stopping at one of our meets!" />
        </div>

        <div className="hidden flex-col gap-6 lg:flex">
          <Info info="Rides @ UCR is a student-led club that aims to bring the car community together. We organize weekly events, such as car meets, with the purpose of fostering a community of enthusiasts." />

          <div className="relative h-4 w-full">
            <div className="absolute top-1/2 left-1/2 h-[1px] w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
          </div>

          <div className="relative flex w-full gap-6">
            <div className="flex flex-1">
              <Info info="Anyone is welcome to join our club, even if you're still learning about cars. We strive to be a beginner friendly club that can serve as your first steps into the car community as a whole. Joining the club is completely free, and most of our events are open to students as well as the general public." />
            </div>

            <div className="relative">
              <div className="absolute top-0 left-1/2 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-white to-transparent opacity-40" />
            </div>

            <div className="flex flex-1 flex-col gap-4">
              <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                <Image src={car6} alt="Car6" fill className="object-cover" />
              </div>

              <div className="relative h-3 w-full">
                <div className="absolute top-1/2 left-1/2 h-[1px] w-3/4 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-40" />
              </div>

              <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                <Image src={car7} alt="Car7" fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="relative h-4 w-full">
            <div className="absolute top-1/2 left-1/2 h-[1px] w-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
          </div>

          <Info info="Feel free to support us by buying our awesome merch or stopping at one of our meets!" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
