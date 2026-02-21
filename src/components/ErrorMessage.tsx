import Image from "next/image";
import ErrorImage from "@/public/CheckEngine.webp";
import Link from "next/link";

interface ErrorMessageProps {
  text: string;
}

const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <div className="bg-ridesucr-black flex h-screen flex-col items-center">
      <div className="relative flex h-lvh flex-col overflow-hidden px-[10vw] text-center lg:flex-row lg:px-[20vw]">
        <div className="relative z-10 flex flex-col justify-center">
          <p className="text-ridesucr-white text-center text-[15rem] lg:text-[25rem]/none">
            {text}
          </p>
          <p className="text-ridesucr-gray relative z-20 pt-12 pb-2 text-center text-4xl lg:pt-0 lg:text-left lg:text-6xl">
            OFF THE ROAD.
          </p>
          <Link
            href="/"
            className="text-ridesucr-white relative z-20 text-center text-4xl underline hover:text-gray-400 lg:pt-0 lg:text-left lg:text-6xl"
          >
            RETURN HOME?
          </Link>
        </div>
        <Image
          src={ErrorImage}
          alt="Check Engine Light: Error Message Picture"
          className="absolute top-36 right-3 left-3 h-[450px] w-[600px] blur-[0.3px] [mask-image:radial-gradient(circle_at_center,black_5%,transparent_65%)] lg:static lg:top-auto lg:h-auto lg:w-auto"
        />
      </div>
    </div>
  );
};

export default ErrorMessage;
