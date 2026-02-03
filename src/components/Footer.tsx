import Image from "next/image";
import { RIDES_LINKS } from "../data/NavBar";

const Footer = () => {
  return (
    <footer className="from-ridesucr-green to-ridesucr-black relative flex h-24 w-full items-end justify-between bg-linear-to-t px-10 pb-10">
      <div className="from-ridesucr-white to-ridesucr-black absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-radial" />
      <div className="translate-y-5 text-3xl text-white md:text-5xl">
        DRIVEN BY PASSION
      </div>
      <div className="flex translate-y-5 items-center gap-7">
        <div className="flex items-center gap-10">
          <div className="from-ridesucr-white/80 to-ridesucr-white/40 rounded-2xl bg-linear-to-b p-[1px]">
            <div className="bg-ridesucr-black/70 flex items-center gap-5 rounded-2xl px-2 py-2 backdrop-blur-xs">
              <a href={RIDES_LINKS.instagram} target="_blank" rel="noreferrer">
                <Image
                  src="/Linkbox/Instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </a>

              <a
                href={RIDES_LINKS.highlanderlink}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/Linkbox/HighlanderLink.svg"
                  alt="HighlanderLink"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </a>

              <a href={RIDES_LINKS.discord} target="_blank" rel="noreferrer">
                <Image
                  src="/Linkbox/Discord.svg"
                  alt="Discord"
                  width={32}
                  height={32}
                  className="h-8 w-8"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/Logo.svg"
            alt="Logo"
            width={64}
            height={64}
            className="h-auto w-16 object-contain invert"
            priority // Prioritize the logo for brand visibility
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
