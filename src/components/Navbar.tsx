import Link from "next/link";
import { navBarData } from "@/data/navBarData";

const Navbar = () => {
  return (
    <div className="from-ridesucr-white/25 text-ridesucr-white mx-auto my-4 flex h-fit w-max justify-between gap-x-18 rounded-2xl bg-linear-to-t to-[#9999993F] px-5 py-3 text-left text-[22px] underline underline-offset-2 ring-1 backdrop-blur-lg">
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
  );
};

export default Navbar;
