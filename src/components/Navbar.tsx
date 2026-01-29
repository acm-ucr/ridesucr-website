import Link from "next/link";

const Navbar = () => {
  return (
    <div className="from-ridesucr-white/25 text-ridesucr-white mx-auto my-4 flex h-fit w-max justify-between gap-x-18 rounded-2xl bg-linear-to-t to-[#9999993F] px-5 py-3 text-left text-[22px] underline underline-offset-2 ring-1 backdrop-blur-lg">
      <Link href="/" className="hover:-translate-y-0.5">
        Join Us
      </Link>
      <Link href="/about" className="hover:-translate-y-0.5">
        About
      </Link>
      <Link href="/gallery" className="hover:-translate-y-0.5">
        Gallery
      </Link>
      <Link href="/events" className="hover:-translate-y-0.5">
        Events
      </Link>
    </div>
  );
};

export default Navbar;
