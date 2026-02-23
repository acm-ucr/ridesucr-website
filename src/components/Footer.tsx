import Image from "next/image";
import { Rides_Links } from "@/data/LinksData";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="from-ridesucr-green to-ridesucr-black relative flex justify-center bg-linear-to-t px-4 pb-10 md:justify-between md:px-10">
      <div className="from-ridesucr-white to-ridesucr-black absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-radial" />
      <div className="hidden translate-y-8 text-5xl text-white md:block">
        DRIVEN BY PASSION
      </div>
      <div className="flex translate-y-5 items-center gap-7">
        <div className="flex items-center gap-10">
          <div className="from-ridesucr-white/80 to-ridesucr-white/40 rounded-2xl bg-linear-to-b p-[1px]">
            <div className="bg-ridesucr-black/70 flex items-center gap-8 rounded-2xl px-3 py-3 backdrop-blur-xs">
              {Rides_Links.map(({ name, url, Icon }) => (
                <Link key={name} href={url} target="_blank">
                  <Icon className="text-5xl text-white transition-opacity hover:opacity-80 md:text-4xl" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link href="/" className="hidden flex-col items-center md:flex">
          <Image
            src="/Logo.svg"
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
