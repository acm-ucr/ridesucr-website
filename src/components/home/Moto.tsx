import Image from "next/image";
import DownArrow from "@/public/Jump_Button.svg";
import Linkbox from "@/components/home/Linkbox";

const Moto = () => {
  return (
    <div className="text-ridesucr-white relative w-screen">
      <div className="flex items-center justify-center md:gap-x-[5vw] lg:gap-x-[10vw]">
        <div className="text-left">
          <div className="hidden md:block md:text-[7rem] lg:text-[12rem]">
            <p className="mb-[-0.5em]">Driven by</p>
            <p className="mb-[-0.2em]">Passion</p>
          </div>
          <div className="text-ridesucr-gray mt-4 hidden md:block md:text-5xl lg:text-6xl">
            We are rides @ ucr.
          </div>
        </div>

        <Linkbox />
      </div>

      <div className="my-12 flex justify-center pt-16 lg:pt-0">
        <button>
          <Image src={DownArrow} alt="Down Arrow" />
        </button>
      </div>

      <div className="from-ridesucr-white to-ridesucr-black absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-radial" />
    </div>
  );
};

export default Moto;
