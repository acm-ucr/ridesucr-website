import Image from "next/image";
import { Rides_Links } from "@/data/LinksData";
import Link from "next/link";
import Logo from "@/public/Logo.svg";

const Footer = () => {
  return (
    <div className="from-ridesucr-green to-ridesucr-black relative flex justify-center bg-linear-to-t px-4 pb-10 md:justify-between md:px-10">
      <div className="from-ridesucr-white to-ridesucr-black absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-radial" />
      <div className="hidden translate-y-8 text-5xl text-white md:block">
        DRIVEN BY PASSION
      </div>
      <div className="flex translate-y-5 items-center gap-7">
        <div className="bg-ridesucr-white/15 border-ridesucr-white flex items-center gap-8 rounded-2xl border bg-linear-to-b p-[1px] px-3 py-3 backdrop-blur-lg">
          {Rides_Links.map(({ name, url, Icon }) => (
            <Link key={name} href={url} target="_blank">
              <Icon className="scale-90 text-5xl text-white transition-opacity hover:opacity-80 md:text-4xl" />
            </Link>
          ))}
        </div>

        <Link href="/" className="hidden flex-col items-center md:flex">
          <Image
            src={Logo}
            alt="Logo"
            width={64}
            height={64}
            className="h-auto w-16 invert"
            priority
          />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
