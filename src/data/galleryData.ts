import { StaticImageData } from "next/image";
import car1 from "@/public/cars/car1.webp";
import car2 from "@/public/cars/car2.webp";
import car3 from "@/public/cars/car3.webp";
import car4 from "@/public/cars/car4.webp";
import car5 from "@/public/cars/car5.webp";
import car6 from "@/public/cars/car6.webp";
import car7 from "@/public/cars/car7.webp";
import car8 from "@/public/cars/car8.webp";
import car9 from "@/public/cars/car9.webp";

export interface galleryData {
  Pictures: StaticImageData;
  Alt: string;
}

export const galleryData: galleryData[] = [
  {
    Pictures: car1,
    Alt: "Car 1",
  },
  {
    Pictures: car2,
    Alt: "Car 2",
  },
  {
    Pictures: car3,
    Alt: "Car 3",
  },
  {
    Pictures: car4,
    Alt: "Car 4",
  },
  {
    Pictures: car5,
    Alt: "Car 5",
  },
  {
    Pictures: car6,
    Alt: "Car 6",
  },
  {
    Pictures: car7,
    Alt: "Car 7",
  },
  {
    Pictures: car8,
    Alt: "Car 8",
  },
  {
    Pictures: car9,
    Alt: "Car 9",
  },
];