import Image from "next/image";
import DownArrow from "@/public/Polygon_1.svg";

const Moto = () => {
  return (
    <div className="text-ridesucr-white relative w-screen">
      <div className="flex items-center gap-5 pl-[15vw]">
        <div className="text-left">
          <p className="text-[12rem] leading-none">
            Driven by
            <br />
            Passion
          </p>
          <p className="text-ridesucr-gray text-5xl">We are rides @ ucr.</p>
        </div>

        <div className="text-ridesucr-white flex w-96 items-center justify-center rounded-md bg-white/30 p-8 text-center text-2xl backdrop-blur-lg">
          Link 1
          <br />
          <br />
          Link 2
          <br />
          <br />
          Link 3
        </div>
      </div>

      <div className="mt-8 mb-16 flex w-full justify-center">
        <button>
          <Image src={DownArrow} alt="Down Arrow" width={32} height={32} />
        </button>
      </div>

      <div className="from-ridesucr-white to-ridesucr-black absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-radial" />
    </div>
  );
};

export default Moto;
