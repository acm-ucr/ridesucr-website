import { Rides_Links } from "@/data/LinksData";
import Link from "next/link";

const Linkbox = () => {
  return (
    <div className="text-ridesucr-white flex h-[30vh] w-[25vw] flex-col justify-evenly rounded-md bg-white/30 p-8 text-center text-2xl underline underline-offset-1 backdrop-blur-lg">
      {Rides_Links.map(({name, url}) => (
        <Link key={name} href={url} target="_blank">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Linkbox;
