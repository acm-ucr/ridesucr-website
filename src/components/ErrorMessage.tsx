import Image from "next/image";
import ErrorImage from "@/public/CheckEngine.webp";
import Link from "next/link";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <div className="bg-ridesucr-black flex h-screen flex-col items-center">
      <div className="flex overflow-hidden px-[20vw]">
        <div className="z-10 flex flex-col justify-center">
          <p className="text-ridesucr-white text-[25rem]/none">{text}</p>
          <p className="text-ridesucr-gray pb-2 text-6xl">OFF THE ROAD.</p>
          <Link
            href="/"
            className="text-ridesucr-white text-6xl underline hover:text-gray-400"
          >
            RETURN HOME?
          </Link>
        </div>
        <Image
          src={ErrorImage}
          alt="Check Engine Light: Error Message Picture"
          className="blur-[0.3px] [mask-image:radial-gradient(circle_at_center,black_5%,transparent_65%)]"
        />
      </div>
      <div className="via-ridesucr-white my-4 h-1 w-1/3 bg-gradient-to-r from-transparent to-transparent" />
    </div>
  );
};

export default ErrorMessage;
