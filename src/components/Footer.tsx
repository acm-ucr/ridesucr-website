import { RIDES_LINKS } from "../app/links";

const Footer = () => {
  return (
    <footer className="from-ridesucr-green to-ridesucr-black relative flex h-48 w-full items-end justify-between bg-linear-to-t px-10 pb-10">
      <div className="from-ridesucr-white to-ridesucr-black absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-radial" />

      <div className="text-7xl text-white lg:text-8xl">DRIVEN BY PASSION</div>

      {/* right-aligned elements: linkbox, logo. offset vertically by 3 to align with text */}
      <div className="flex -translate-y-3 items-center gap-10">
        <div className="flex items-center gap-10">
          <div className="from-ridesucr-white/80 to-ridesucr-white/40 rounded-2xl bg-linear-to-b p-[1px]">
            <div className="bg-ridesucr-black/70 flex items-center gap-10 rounded-2xl px-5 py-5 backdrop-blur-xs">
              <a href={RIDES_LINKS.instagram} target="_blank" rel="noreferrer">
                <img
                  src="/Linkbox/Instagram.svg"
                  alt="Instagram"
                  className="h-10 w-10"
                />
              </a>

              <a
                href={RIDES_LINKS.highlanderlink}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/Linkbox/HighlanderLink.svg"
                  alt="HighlanderLink"
                  className="h-10 w-10"
                />
              </a>

              <a href={RIDES_LINKS.discord} target="_blank" rel="noreferrer">
                <img
                  src="/Linkbox/Discord.svg"
                  alt="Discord"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/Logo.svg"
            alt="Logo"
            className="h-auto w-24 object-contain invert"
          />
        </div>
      </div>
    </footer>
  );
  // <div>Footer</div>;
};

export default Footer;
