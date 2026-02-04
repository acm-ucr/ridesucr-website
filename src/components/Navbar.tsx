import Link from "next/link";
import Image from "next/image";
import { navBarData } from "@/data/navBarData";
import Rides from "@/public/Logo-White.svg";

const Navbar = () => {
  return (
    <div className="relative my-15 w-screen">
      <div className="ml-15 h-fit w-fit px-5 py-3">
        <Image src={Rides} alt="Rides Logo" width={100} height={100} />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="from-ridesucr-white/25 text-ridesucr-white flex h-18 w-max items-center justify-between gap-x-18 rounded-2xl bg-linear-to-t to-[#9999993F] px-5 py-3 text-left text-[22px] underline underline-offset-2 ring-1 backdrop-blur-lg">
          {navBarData.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="hover:-translate-y-0.5"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
