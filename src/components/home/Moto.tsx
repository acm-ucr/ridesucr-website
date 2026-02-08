import Image from "next/image";
import DownArrow from "@/public/Polygon_1.svg";

const Moto = () => {
  return (
    <div className="relative w-screen text-ridesucr-white">
      <div className="pl-[15vw] flex items-center gap-5">
        <div className="text-left">
          <p className="text-[12rem] leading-none">
            Driven by
            <br />
            Passion
          </p>
          <p className="text-ridesucr-gray text-5xl">We are rides @ ucr.</p>
        </div>

        <div className="flex items-center justify-center w-96 p-8 bg-white/30 backdrop-blur-lg rounded-md text-2xl text-center text-ridesucr-white">
          Link 1
          <br />
          <br />
          Link 2
          <br />
          <br />
          Link 3
        </div>
      </div>

      <div className="w-full flex justify-center mt-8 mb-16">
        <button>
          <Image src={DownArrow} alt="Down Arrow" width={32} height={32} />
        </button>
      </div>

      <div className="absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-radial from-ridesucr-white to-ridesucr-black" />
    </div>
  );
};

export default Moto;