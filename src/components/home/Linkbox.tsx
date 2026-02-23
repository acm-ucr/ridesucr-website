import { Rides_Links } from "@/data/LinksData";
import Link from "next/link";

const Linkbox = () => {
  return (
    <div className="text-ridesucr-white flex h-[40vh] w-[25vw] flex-col justify-evenly rounded-lg border-[0.5px] border-white bg-white/15 text-center text-5xl underline underline-offset-1 backdrop-blur-lg">
      {Rides_Links.map(({ name, url }) => (
        <Link key={name} href={url} target="_blank">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Linkbox;
