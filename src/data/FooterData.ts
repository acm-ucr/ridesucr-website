import { FaInstagram, FaDiscord, FaLink } from "react-icons/fa6";
import { RIDES_LINKS } from "./LinksData";

export const FOOTER_SOCIALS = [
  {
    name: "Instagram",
    href: RIDES_LINKS.instagram,
    Icon: FaInstagram,
  },
  {
    name: "HighlanderLink",
    href: RIDES_LINKS.highlanderlink,
    Icon: FaLink,
  },
  {
    name: "Discord",
    href: RIDES_LINKS.discord,
    Icon: FaDiscord,
  },
];
