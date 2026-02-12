import Image from "next/image";
import DownArrow from "@/public/Jump_Button.svg";
import { RIDES_LINKS } from "../../data/LinksData";
import Link from "next/link";

const Moto = () => {
  return (
    <div className="text-ridesucr-white relative w-screen">
      <div className="flex items-center gap-16 pl-[15vw]">
        <div className="text-left">
          <div className="text-[12rem]">
            <div className="mb-[-0.5em]">Driven by</div>
            <div className="mb-[-0.2em]">Passion</div>
          </div>
          <div className="text-ridesucr-gray mt-4 text-5xl">
            We are rides @ ucr.
          </div>
        </div>

        <div className="text-ridesucr-white flex h-[20vh] min-h-[200px] w-[30vw] min-w-[250px] flex-col justify-evenly rounded-md bg-white/30 p-8 text-center text-2xl backdrop-blur-lg">
          <Link href={RIDES_LINKS.discord} target="_blank">
            Discord
          </Link>
          <Link href={RIDES_LINKS.highlanderlink} target="_blank">
            HighlanderLink
          </Link>
          <Link href={RIDES_LINKS.instagram} target="_blank">
            Instagram
          </Link>
        </div>
      </div>

      <div className="mt-8 mb-16 flex w-full justify-center">
        <button>
          <Image src={DownArrow} alt="Down Arrow" />
        </button>
      </div>

      <div className="from-ridesucr-white to-ridesucr-black absolute bottom-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-radial" />
    </div>
  );
};

export default Moto;
