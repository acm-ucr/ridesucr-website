import Image from "next/image";
import DownArrow from "@/public/Jump_Button.svg";

const Moto = () => {
  return (
    <div className="text-ridesucr-white relative w-screen">
      <div className="flex items-center gap-5 pl-[15vw]">
        <div className="text-left">
          <div className="text-[12rem]">
            <span className="mb-[-0.5em] block">Driven by</span>
            <span className="mb-[-0.2em] block">Passion</span>
          </div>
          <span className="text-ridesucr-gray mt-4 block text-5xl">
            We are rides @ ucr.
          </span>
        </div>

        <div className="text-ridesucr-white flex h-64 w-96 flex-col justify-evenly rounded-md bg-white/30 p-8 text-center text-2xl backdrop-blur-lg">
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
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
