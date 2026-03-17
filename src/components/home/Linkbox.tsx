import { Rides_Links } from "@/data/LinksData";
import Link from "next/link";
import Image from "next/image";
import Est_2021 from "@/public/Est_2021.svg";
import Logo from "@/public/Logo-White.svg";

const Linkbox = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-4 block md:hidden">
        <Image src={Logo} alt="Logo" className="mb-4" />
        <Image src={Est_2021} alt="Est 2021" className="ml-7" />
      </div>
      <div className="text-ridesucr-white flex h-[40vh] w-[80vw] flex-col justify-evenly rounded-lg border-[0.5px] text-center text-5xl underline sm:w-[60vw] md:w-[40vw] lg:w-[25vw]">
        {Rides_Links.map(({ name, url }) => (
          <Link key={name} href={url} target="_blank">
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Linkbox;
