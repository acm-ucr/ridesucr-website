import { RIDES_LINKS } from "@/data/LinksData";
import Link from "next/link";

type RideLinkKey = keyof typeof RIDES_LINKS;

const LINKS: { name: string; key: RideLinkKey }[] = [
  { name: "Discord", key: "discord" },
  { name: "HighlanderLink", key: "highlanderlink" },
  { name: "Instagram", key: "instagram" },
];

const Linkbox = () => {
  return (
    <div className="text-ridesucr-white flex h-[30vh] w-[25vw] flex-col justify-evenly rounded-md bg-white/30 p-8 text-center text-2xl underline underline-offset-1 backdrop-blur-lg">
      {LINKS.map((link) => (
        <Link
          key={link.key}
          href={RIDES_LINKS[link.key]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Linkbox;
